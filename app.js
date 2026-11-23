import {rankIcons} from './icon-match.js';
import {moveToTrash,restoreTrash,purgeTrash} from './trash.js';
import {cachedCatalog,checkCatalog} from './catalog-update.js';
import {isDetailScreen} from './image-check.js';
import {transaction,put,snapshot,restore,parseBaseline,stateOf} from './safety.js';
import {openBox,records,fingerprint,possible,commit} from './box.js';
import Reader from './reader.js';
const $=id=>document.getElementById(id);
const [bundled,encoded]=await Promise.all(['catalog.json','icon-catalog.json'].map(p=>fetch(p).then(r=>r.json())));
let catalogStorage;try{catalogStorage=localStorage}catch{catalogStorage={getItem:()=>null,setItem:()=>{throw Error('保存不可')}}}
const db=cachedCatalog(bundled,catalogStorage).catalog;
const refs=encoded.refs.map(r=>({...r,bytes:Uint8Array.from(atob(r.fp),c=>c.charCodeAt(0))}));
const reader=new Reader(), entries=[];
const headers=['ニックネーム','ポケモン','レベル','スキルレベル','食材1','食材2','食材3','メインスキル','せいかく','Lv10','Lv25','Lv50','Lv70','Lv80'];
function canvas(w,h){const c=document.createElement('canvas');c.width=w;c.height=h;return c}
async function icon(url){
 const im=new Image();im.src=url;await im.decode();
 const c=canvas(600,Math.round(600*im.height/im.width)),ctx=c.getContext('2d',{willReadFrequently:true});
 ctx.drawImage(im,0,0,c.width,c.height);
 const {data}=ctx.getImageData(0,0,c.width,c.height);let top=-1;
 for(let y=0;y<c.height*.45;y++){let k=(y*c.width+6)*4;if(data[k]>225&&data[k+1]>85&&data[k+1]<165&&data[k+2]<120){top=y;break}}
 if(top<0)return {};
 let x1=110,y1=top+85,x2=0,y2=0;
 for(let y=top+13;y<top+86;y++)for(let x=39;x<110;x++){
 const k=4*(y*600+x);if(Math.min(data[k],data[k+1],data[k+2])<210){x1=Math.min(x1,x);x2=Math.max(x2,x);y1=Math.min(y1,y);y2=Math.max(y2,y)}}
 if(x2<=x1||y2<=y1)return {};
 const small=canvas(20,20),s=small.getContext('2d');s.drawImage(c,x1,y1,x2-x1+1,y2-y1+1,0,0,20,20);
 const rgb=s.getImageData(0,0,20,20).data;
 const score=arr=>{let sum=0;for(let i=0;i<1200;i++)sum+=(arr[i]-rgb[Math.floor(i/3)*4+i%3])**2;return Math.sqrt(sum/1200)};
 // OCR sometimes reads the circular nickname mark ◎ as @. Check the glyph itself.
 let right=-1,left=-1;
 const ink=(x,y)=>data[4*(y*600+x)]<190;
 const onCol=x=>Array.from({length:24},(_,dy)=>ink(x,top+54+dy)).some(Boolean);
 for(let x=332;x>175;x--)if(onCol(x)){right=x;break}
 left=right;
 while(left>175&&onCol(left-1))left--;
 let glyphTop=top+80,glyphBottom=top+50;
 for(let y=top+54;y<top+78;y++)for(let x=left;x<=right;x++)if(x>=0&&ink(x,y)){glyphTop=Math.min(glyphTop,y);glyphBottom=Math.max(glyphBottom,y)}
 const w=right-left+1,h=glyphBottom-glyphTop+1;
 function bands(horizontal){let runs=0,previous=false;for(let i=0;i<(horizontal?w:h);i++){let v=horizontal?ink(left+i,Math.round((glyphTop+glyphBottom)/2)):ink(Math.round((left+right)/2),glyphTop+i);if(v&&!previous)runs++;previous=v}return runs}
 const circle=w>=10&&w<=18&&Math.abs(w-h)<=2&&bands(true)===4&&bands(false)===4;

 const fp=Uint8Array.from({length:1200},(_,i)=>rgb[Math.floor(i/3)*4+i%3]);
 const key=btoa(String.fromCharCode(...fp));let learned={};try{learned=JSON.parse(localStorage.iconLabels||'{}')}catch{}
 const matches=Object.entries(learned).map(([k,n])=>[n,score(Uint8Array.from(atob(k),c=>c.charCodeAt(0)))]).sort((a,b)=>a[1]-b[1]);
 if(matches[0]?.[1]<9)return {circle,name:matches[0][0],key,confident:true};
 return {circle,key,...rankIcons(refs,score)};
}
function field(label,value,options){
 const wrap=document.createElement('label');wrap.append(label);
 const el=document.createElement(options?'select':'input');el.setAttribute('aria-label',label);
 if(options)for(const s of ['',...new Set([...options,...(value?[String(value)]:[])])])el.add(new Option(s||'選んでください',s));
 el.value=value??'';wrap.append(el);return [wrap,el]
}
function add(file,url,match,r,hash,draft={}){
 const mon=db.mons.find(m=>m.name===match.name)||db.mons.find(m=>m.name===r.pokemonName||m.name.replaceAll(' ','')===r.pokemonName);
 const det=document.createElement('details'),summary=document.createElement('summary'),grid=document.createElement('section');
 const pic=document.createElement('details'),ps=document.createElement('summary'),img=new Image();ps.textContent='元のスクショ';if(url){img.src=url;pic.append(ps,img)}else pic.hidden=true;
 const nickname=match.circle?r.name?.replace(/[@＠©]$/,'◎'):r.name;
 const vals=draft.vals||[nickname,match.confident?mon?.name:'',r.lv,r.mainSkillLv,...Array.from({length:3},(_,i)=>r.foodList?.[i]),mon?.skill||r.mainSkillName,r.nature,...Array.from({length:5},(_,i)=>r.subSkillList?.length===5?r.subSkillList[i]:'')];
 const sourceLevel=String(draft.sourceLevel||r.lv||vals[2]||'');
 const controls=headers.map((label,i)=>{
 const opts=i===1?db.mons.map(m=>m.name):i>=4&&i<=6?db.foods:i===7?db.skills:i===8?db.natures:i>=9?db.subs:null;
 const [wrap,el]=field(label,vals[i],opts);if(i>0)el.required=true;
 if(i===2||i===3){el.type='number';el.min=1;el.max=i===2?100:10;el.step=1}
 grid.append(wrap);return el
 });
 function refresh(){summary.textContent=(controls[0].value||file.name)+' ／ '+(controls[1].value||'種族を選択')+(controls.some(e=>!e.validity.valid)?' · 要確認':'')+(reference.length?' · '+stateOf(controls.map(c=>c.value),reference):'');}
 const values=()=>controls.map(c=>c.value);
 const persist=()=>put(database,'drafts',{id:hash,vals:values(),filename:file.name,sourceLevel,preview:draft.preview||'',date:Date.now()});
 const edit=()=>{refresh();persist().catch(report)};
 controls.forEach(el=>el.oninput=edit);
 controls[1].onchange=()=>{const m=db.mons.find(m=>m.name===controls[1].value);if(m){controls[7].value=m.skill;if(m.foods[0])controls[4].value=m.foods[0];if(match.key){try{const all=JSON.parse(localStorage.iconLabels||'{}');all[match.key]=m.name;localStorage.iconLabels=JSON.stringify(all)}catch{}}}edit()};
 const remove=document.createElement('button');remove.textContent='削除';remove.onclick=()=>deleteItem('drafts',hash);
 det.append(summary,pic,grid,remove);refresh();det.open=!match.confident||controls.some(e=>!e.validity.valid);
 $('rows').append(det);const entry={det,controls,hash,url,refresh,persist};entries.push(entry);$('exportArea').hidden=false;return entry;
}
async function run(files){
 let skipped=0;const rejected=[];const seen=new Set(entries.map(e=>e.hash));try{for(const row of (await snapshot(await storage)).records)for(const hash of row.photos)seen.add(hash)}catch{}
 $('files').disabled=true;$('copy').disabled=$('save').disabled=true;
 for(const [i,file] of Array.from(files).entries()){
 const hash=await fingerprint(file);if(seen.has(hash)){skipped++;continue}seen.add(hash);
 const url=URL.createObjectURL(file);let match={},r={};
 $('status').textContent=(i+1)+' / '+files.length+' 枚を読み取り中…';
 try{match=await icon(url);r=await reader.read(file,match.confident?match.name:'')}catch(e){URL.revokeObjectURL(url);rejected.push(file.name+'（読み取り失敗）');continue}
 if(!isDetailScreen(r)){URL.revokeObjectURL(url);rejected.push(file.name+'（詳細画面を確認できません）');continue}
 let preview='';try{const im=new Image();im.src=url;await im.decode();const c=canvas(500,Math.round(500*im.height/im.width));c.getContext('2d').drawImage(im,0,0,c.width,c.height);preview=c.toDataURL('image/jpeg',0.7)}catch{}
 await add(file,url,match,r,hash,{preview}).persist();
 }
 $('status').textContent=(skipped?'重複 '+skipped+'枚をスキップ（ごみ箱を含む）。':'')+entries.length+'匹。項目をタップすると修正できます。'+(rejected.length?' ／ 除外 '+rejected.length+'枚：'+rejected.join('、'):'');$('files').disabled=false;$('copy').disabled=$('save').disabled=false;$('files').value='';
}
$('files').onchange=e=>run(Array.from(e.target.files)).catch(report).finally(()=>{$('files').disabled=false;$('copy').disabled=$('save').disabled=false;$('files').value=''});
function output(batch=entries){
 for(const {det,controls:c} of batch){let invalid=c.find(e=>!e.validity.valid);const mon=db.mons.find(m=>m.name===c[1].value);
 if(!invalid&&mon?.foods.length){invalid=c.slice(4,7).find((e,i)=>!(mon.foodSlots?.[i]||mon.foods.slice(0,i+1)).includes(e.value))}
 if(invalid){det.open=true;invalid.focus();$('status').textContent='未入力または食材構成に合わない項目を確認してください。';return}}
 const quote=v=>/[",\r\n]/.test(v)?'"'+v.replaceAll('"','""')+'"':v;
 return [headers,...batch.map(r=>r.controls.map(e=>e.value))].map(row=>row.map(quote).join(',')).join('\r\n');
}
const storage=openBox();
let database,reference=[],lastBatch=[];
const message=text=>$('status').textContent=text;
const report=e=>message('処理を完了できませんでした。'+e.message);
function eraseDraft(id){return transaction(database,['drafts'],t=>t.objectStore('drafts').delete(id))}
function download(text,name,type){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),10000)}
async function init(){
 database=await storage;
 const data=await snapshot(database);reference=data.baseline.filter(r=>!r.deletedAt);
 const live=new Set(data.drafts.filter(r=>!r.deletedAt).map(r=>r.id));
 for(const e of [...entries])if(!live.has(e.hash)){e.det.remove();entries.splice(entries.indexOf(e),1);if(e.url)URL.revokeObjectURL(e.url)}
 $('exportArea').hidden=!entries.length;
 renderTrash(data);
 for(const row of data.drafts.filter(r=>!r.deletedAt))if(!entries.some(e=>e.hash===row.id))add({name:row.filename||'下書き'},row.preview||'',{confident:true},{},row.id,row);
 for(const e of entries)e.refresh();
 $('count').textContent='登録済みの照合データ '+reference.length+'件'
}
function newBatch(){
 const batch=[];let held=0,known=0;
 for(const e of entries){
  const vals=e.controls.map(c=>c.value),state=stateOf(vals,reference);
  if(state==='登録済み'){known++;continue}
  if(state==='更新候補'||batch.some(b=>possible(b.vals,vals))||e.controls.some(c=>!c.validity.valid)){held++;e.det.open=true;continue}
  batch.push({e,vals})
 }
 return {batch,note:'登録済み '+known+'匹・保留 '+held+'匹'}
}
async function send(copy){
 const {batch,note}=newBatch();if(!batch.length){message('新規の出力対象はありません。'+note);return}
 const text=output(batch.map(x=>x.e));if(!text)return;
 let copied=true;
 if(copy){try{await navigator.clipboard.writeText(text)}catch{copied=false;$('fallback').hidden=false;$('fallback').value=text;$('fallback').select()}}
 else download(text,'ポケスリ_新規.csv','text/csv;charset=utf-8');
 lastBatch=batch;$('mark').hidden=false;message((copied?'新規 '+batch.length+'匹分を出力しました。':'表示されたCSVをコピーしてください。')+note)
}
$('copy').onclick=()=>send(true).catch(report);$('save').onclick=()=>send(false).catch(report);
async function finish(){
 // Save the exact exported values. Keep subsequent edits as drafts.
 for(const {vals,e} of lastBatch){
  const rows=await records(database),same=rows.find(r=>r.photos.includes(e.hash));
  if(!same)await commit(database,null,vals,e.hash);
  await put(database,'baseline',{id:JSON.stringify(vals),vals});
  if(JSON.stringify(e.controls.map(c=>c.value))===JSON.stringify(vals)&&(!same||JSON.stringify(same.vals)===JSON.stringify(vals))){
   await eraseDraft(e.hash);const i=entries.indexOf(e);if(i>=0)entries.splice(i,1);e.det.remove();if(e.url)URL.revokeObjectURL(e.url)
  }
 }
 $('mark').hidden=true;$('exportArea').hidden=!entries.length;await init();message('取り込み済みとして記録しました。次回の重複を防ぎます。')
}
$('mark').onclick=()=>finish().catch(report);
$('base').onchange=async e=>{try{const f=e.target.files[0];if(!f)return;const rows=parseBaseline(await f.text(),headers);
 await transaction(database,['baseline'],t=>{for(const r of rows)t.objectStore('baseline').put(r)});await init();message('既存CSVを照合用に読み込みました。')
 }catch(err){report(err)}finally{e.target.value=''}};
$('backup').onclick=async()=>{try{const data=await snapshot(database);try{data.labels=JSON.parse(localStorage.iconLabels||'{}')}catch{}download(JSON.stringify(data),'ポケスリバックアップ-'+new Date().toISOString().slice(0,10)+'.json','application/json');try{localStorage.setItem('pokesleep.backup.requested',new Date().toISOString())}catch{}backupStatus();message('バックアップのダウンロードを開始しました。ファイルが保存されたことを確認してください。')}catch(err){report(err)}};
$('restore').onchange=async e=>{try{const f=e.target.files[0];if(!f)return;const data=JSON.parse(await f.text());const res=await restore(database,data);if(data.labels){try{localStorage.iconLabels=JSON.stringify({...data.labels,...JSON.parse(localStorage.iconLabels||'{}')})}catch{}}
 await init();message('復元 '+res.added+'件。既存 '+res.skipped+'件は保持しました。')}catch(err){report(err)}finally{e.target.value=''}};
$('files').disabled=true;init().then(()=>{$('files').disabled=false;if(entries.length)message('下書き '+entries.length+'匹を再開しました。')}).catch(report);

function backupStatus(){
 let date;try{date=localStorage.getItem('pokesleep.backup.requested')}catch{}
 $('backupStatus').textContent=date?'前回のバックアップ出力操作：'+new Date(date).toLocaleString('ja-JP')+'。その後の変更は再度保存してください。':'手持ちはこのブラウザだけに保存されます。取り込み後はバックアップをファイルに保存してください。';
}
backupStatus();
// Check public data in the background; keep the working catalog on any failure.
checkCatalog(bundled,{storage:catalogStorage}).catch(()=>{});

async function deleteItem(table,id){
 try{await moveToTrash(database,table,id);lastBatch=[];$('mark').hidden=true;await init();message('削除しました。「データ管理」の「ごみ箱」から戻せます。')}catch(e){report(e)}
}
function renderTrash(data){
 const groups=new Map();for(const table of ['records','drafts','baseline'])for(const row of data[table])if(row.deletedAt&&!groups.has(row.trashGroup))groups.set(row.trashGroup,{row,table});
 $('trashCount').textContent='ごみ箱（'+groups.size+'件）';const frag=document.createDocumentFragment();
 for(const [group,{row,table}] of groups){const d=document.createElement('div'),text=document.createElement('p'),b=document.createElement('button');text.textContent=(row.vals[0]||row.vals[1]||'読み取り結果')+' ／ '+(row.vals[1]||'種族未選択')+'（'+({records:'保存個体',drafts:'下書き',baseline:'照合データ'}[table])+'）';b.textContent='元に戻す';b.onclick=async()=>{try{await restoreTrash(database,group);await init();message('元に戻しました。')}catch(e){report(e)}};const del=document.createElement('button');del.textContent='完全に削除';del.onclick=async()=>{
 if(!confirm(text.textContent+'\nこのデータを完全に削除しますか？\nごみ箱から元に戻せなくなります。保存済みのバックアップファイルは変更されません。'))return;
 del.disabled=true;b.disabled=true;
 try{const count=await purgeTrash(database,group);await init();message(count?'完全に削除しました。':'対象は別の画面で変更されています。現在の状態を表示しました。')}catch(e){del.disabled=false;b.disabled=false;report(e)}
 };d.append(text,b,del);frag.append(d)}
 $('trashList').replaceChildren(frag);
}
