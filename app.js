import {rankIcons} from './icon-match.js';
import {cachedCatalog,checkCatalog} from './catalog-update.js';
import {isDetailScreen} from './image-check.js';
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
// Drafts stay on this device only, so cards survive an accidental refresh or a closed tab.
const database=new Promise((resolve,reject)=>{
 const req=indexedDB.open('pokesleep-personal-box',2);
 req.onupgradeneeded=()=>{if(!req.result.objectStoreNames.contains('drafts'))req.result.createObjectStore('drafts',{keyPath:'id'})};
 req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)
});
function drafts(action,mode='readonly'){
 return database.then(db=>new Promise((resolve,reject)=>{
  const tx=db.transaction('drafts',mode);let result;
  const request=action(tx.objectStore('drafts'));if(request)request.onsuccess=()=>result=request.result;
  tx.oncomplete=()=>resolve(result);tx.onabort=()=>reject(tx.error||Error('保存できませんでした'))
 }))
}
const saveDraft=row=>drafts(s=>s.put(row),'readwrite');
const removeDraft=id=>drafts(s=>s.delete(id),'readwrite');
async function fingerprint(file){
 const bytes=new Uint8Array(await crypto.subtle.digest('SHA-256',await file.arrayBuffer()));
 return Array.from(bytes,x=>x.toString(16).padStart(2,'0')).join('')
}
function add(file,url,match,r,id,draft={}){
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
 function refresh(){summary.textContent=(controls[0].value||file.name)+' ／ '+(controls[1].value||'種族を選択')+(controls.some(e=>!e.validity.valid)?' · 要確認':'');}
 const values=()=>controls.map(c=>c.value);
 const persist=()=>saveDraft({id,vals:values(),filename:file.name,sourceLevel,preview:draft.preview||'',date:Date.now()});
 const edit=()=>{refresh();persist().catch(report)};
 controls.forEach(el=>el.oninput=edit);
 controls[1].onchange=()=>{const m=db.mons.find(m=>m.name===controls[1].value);if(m){controls[7].value=m.skill;if(m.foods[0])controls[4].value=m.foods[0];if(match.key){try{const all=JSON.parse(localStorage.iconLabels||'{}');all[match.key]=m.name;localStorage.iconLabels=JSON.stringify(all)}catch{}}}edit()};
 const remove=document.createElement('button');remove.textContent='削除'; det.append(summary,pic,grid,remove);refresh();det.open=!match.confident||controls.some(e=>!e.validity.valid);
 $('rows').append(det);const entry={det,controls,id,url,refresh,persist};entries.push(entry);remove.onclick=()=>removeCard(entry);$('exportArea').hidden=false;return entry;
}
async function run(files){
 if(!files.length)return;
 const rejected=[],before=entries.length;
 $('files').disabled=true;$('copy').disabled=$('save').disabled=true;
 for(const [i,file] of Array.from(files).entries()){
 const url=URL.createObjectURL(file);let match={},r={};
 $('status').textContent=(i+1)+' / '+files.length+' 枚を読み取り中…';
 try{match=await icon(url);r=await reader.read(file,match.confident?match.name:'')}catch(e){URL.revokeObjectURL(url);rejected.push(file.name+'（読み取り失敗）');continue}
 if(!isDetailScreen(r)){URL.revokeObjectURL(url);rejected.push(file.name+'（詳細画面を確認できません）');continue}
 const hash=await fingerprint(file);
 let preview='';try{const im=new Image();im.src=url;await im.decode();const c=canvas(500,Math.round(500*im.height/im.width));c.getContext('2d').drawImage(im,0,0,c.width,c.height);preview=c.toDataURL('image/jpeg',0.7)}catch{}
 await add(file,url,match,r,'shot-'+hash+'-'+Date.now(),{preview}).persist();
 }
 $('status').textContent=(entries.length>before?(entries.length-before)+'匹を追加。':'追加はありませんでした。')+(entries.length?'合計 '+entries.length+'匹。項目をタップすると修正できます。':'')+(rejected.length?' ／ 除外 '+rejected.length+'枚：'+rejected.join('、'):'');$('files').disabled=false;$('copy').disabled=$('save').disabled=false;$('files').value='';
}
$('files').onchange=e=>run(Array.from(e.target.files)).catch(report).finally(()=>{$('files').disabled=false;$('copy').disabled=$('save').disabled=false;$('files').value=''});
function problem({controls:c}){
 let invalid=c.find(e=>!e.validity.valid);const mon=db.mons.find(m=>m.name===c[1].value);
 if(!invalid&&mon?.foods.length){invalid=c.slice(4,7).find((e,i)=>!(mon.foodSlots?.[i]||mon.foods.slice(0,i+1)).includes(e.value))}
 return invalid
}
function output(batch=entries){
 const quote=v=>/[\",\r\n]/.test(v)?'"'+v.replaceAll('"','""')+'"':v;
 return [headers,...batch.map(r=>r.controls.map(e=>e.value))].map(row=>row.map(quote).join(',')).join('\r\n');
}
const message=text=>$('status').textContent=text;
const report=e=>message('処理を完了できませんでした。'+e.message);
function download(text,name,type){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),10000)}
// Identical rows are written once, so scanning the same individual twice never doubles the CSV.
async function send(copy){
 const batch=[],keys=new Set();let merged=0,broken=null;
 for(const e of entries){
  if(problem(e)){broken=e;break}
  const key=JSON.stringify(e.controls.map(c=>c.value));
  if(keys.has(key)){merged++;continue}
  keys.add(key);batch.push(e)
 }
 if(broken){broken.det.open=true;const f=problem(broken);if(f)f.focus();message('未入力または食材構成に合わない項目を確認してください。');return}
 if(!batch.length){message('出力できるカードがありません。スクショを選んでね。');return}
 const text=output(batch);
 let copied=true;
 if(copy){try{await navigator.clipboard.writeText(text)}catch{copied=false;$('fallback').hidden=false;$('fallback').value=text;$('fallback').select()}}
 else download(text,'ポケスリ_新規.csv','text/csv;charset=utf-8');
 message(batch.length+'匹分のCSVを'+(copy?(copied?'コピーしたよ。':'表示したからコピーしてね。'):'保存したよ。')+(merged?' 同じ内容の '+merged+'匹はまとめました。':'')+' にとよんの「インポート」に貼ってね。')
}
$('copy').onclick=()=>send(true).catch(report);$('save').onclick=()=>send(false).catch(report);
async function removeCard(entry){
 const i=entries.indexOf(entry);if(i>=0)entries.splice(i,1);
 entry.det.remove();if(entry.url)URL.revokeObjectURL(entry.url);
 try{await removeDraft(entry.id)}catch(e){report(e);return}
 $('exportArea').hidden=!entries.length;message('削除しました。');
}
$('clear').onclick=async()=>{
 if(!entries.length||!confirm('いま並んでいるカードをすべて消しますか？'))return;
 try{await drafts(s=>s.clear(),'readwrite')}catch(e){report(e);return}
 for(const e of entries){e.det.remove();if(e.url)URL.revokeObjectURL(e.url)}
 entries.length=0;$('exportArea').hidden=true;message('カードをすべて削除しました。');
};
async function init(){
 const rows=(await drafts(s=>s.getAll())).filter(r=>!r.deletedAt);
 for(const row of rows)add({name:row.filename||'スクショ'},row.preview||'',{confident:true},{},row.id,row);
 for(const e of entries)e.refresh();
 $('exportArea').hidden=!entries.length;
}
$('files').disabled=true;init().then(()=>{$('files').disabled=false;if(entries.length)message('前回のカード '+entries.length+'匹を再開しました。')}).catch(report);
// Check public data in the background; keep the working catalog on any failure.
checkCatalog(bundled,{storage:catalogStorage}).catch(()=>{});
