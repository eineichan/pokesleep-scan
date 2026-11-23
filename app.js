import {rankIcons} from './icon-match.js?v=20261123d';
import {cachedCatalog,checkCatalog} from './catalog-update.js?v=20261123d';
import {detailScreenCheck} from './image-check.js?v=20261123d';
import Reader from './reader.js?v=20261123d';
const $=id=>document.getElementById(id);
const VERSION='20261123d';
const DEBUG=new URLSearchParams(location.search).get('debug')==='1';
const [bundled,encoded]=await Promise.all(['catalog.json','icon-catalog.json'].map(p=>fetch(p).then(r=>r.json())));
let catalogStorage;try{catalogStorage=localStorage}catch{catalogStorage={getItem:()=>null,setItem:()=>{throw Error('保存不可')}}}
const db=cachedCatalog(bundled,catalogStorage).catalog;
const refs=encoded.refs.map(r=>({...r,bytes:Uint8Array.from(atob(r.fp),c=>c.charCodeAt(0))}));
const reader=new Reader(), entries=[];
if(DEBUG){reader.debug=true;window.__scanDebug=[]}
const headers=['ニックネーム','ポケモン','レベル','スキルレベル','食材1','食材2','食材3','メインスキル','せいかく','Lv10','Lv25','Lv50','Lv70','Lv80'];
function canvas(w,h){const c=document.createElement('canvas');c.width=w;c.height=h;return c}
// ===== 個体アイコンの読み取り =====
// 画面のスクロールや機種で位置がずれても拾えるように、左上の白いカード
// （赤い枠の浮いたカード）を色から探し、その中で一番大きな絵を切り出す。
function cardBox(c){
 const ctx=c.getContext('2d',{willReadFrequently:true}),{data}=ctx.getImageData(0,0,c.width,c.height),w=c.width,h=c.height;
 const isRed=i=>{const p=i*4,r=data[p],g=data[p+1],b=data[p+2];return r>=180&&r-g>=35&&r-b>=45&&b<=170};
 const rowList=[];
 for(let y=0;y<h;y++){
  let first=-1,last=-1,count=0;
  for(let x=0;x<w;x++)if(isRed(y*w+x)){count++;if(first<0)first=x;last=x}
  if(count>=w*0.3&&last-first>=w*0.3)rowList.push({y,first,last});
 }
 const top=rowList.find(row=>row.y<h*0.5);
 if(!top)return null;
 const maxHeight=Math.round(h*0.16),minGap=Math.max(18,Math.round(h*0.02));
 const bottom=rowList.find(row=>row.y>top.y+minGap&&row.y-top.y<=maxHeight);
 const height=bottom?bottom.y-top.y:Math.round(h*0.075);
 return {data,top:top.y,height,left:Math.max(0,top.first)};
}
function spriteBox(c,card){
 const {data}=card,ctx=c.getContext('2d',{willReadFrequently:true});
 const h=card.height;
 const x0=Math.max(0,card.left+2),x1=Math.min(c.width-1,card.left+h+Math.round(h*0.08));
 const y0=Math.max(0,card.top+3),y1=Math.min(c.height-1,card.top+h-3);
 const w=x1-x0+1,hei=y1-y0+1;
 if(w<16||hei<16)return null;
 const ink=new Uint8Array(w*hei);
 for(let y=0;y<hei;y++)for(let x=0;x<w;x++){
  const p=((y0+y)*c.width+(x0+x))*4,r=data[p],g=data[p+1],b=data[p+2];
  const brightness=r*0.299+g*0.587+b*0.114,chroma=Math.max(r,g,b)-Math.min(r,g,b);
  ink[y*w+x]=chroma>30||brightness<208?1:0;
 }
 const seen=new Uint8Array(ink.length),stack=[];let best=null;
 for(let start=0;start<ink.length;start++){
  if(!ink[start]||seen[start])continue;
  stack.length=0;stack.push(start);seen[start]=1;
  let area=0,minX=w,maxX=-1,minY=hei,maxY=-1,edge=false;
  while(stack.length){
   const i=stack.pop(),x=i%w,y=(i-x)/w;
   area++;
   if(x<minX)minX=x;if(x>maxX)maxX=x;if(y<minY)minY=y;if(y>maxY)maxY=y;
   if(x<=1||y<=1||x>=w-2||y>=hei-2)edge=true;
   for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){
    const nx=x+dx,ny=y+dy;
    if(nx<0||nx>=w||ny<0||ny>=hei)continue;
    const ni=ny*w+nx;
    if(ink[ni]&&!seen[ni]){seen[ni]=1;stack.push(ni)}
   }
  }
  // カードの枠やアイコンの淡い円は端に触れるので、絵だけを拾う
  if(!edge&&area>80&&(!best||area>best.area))best={area,minX,maxX,minY,maxY};
 }
 if(!best)return null;
 return {x1:x0+best.minX,y1:y0+best.minY,x2:x0+best.maxX,y2:y0+best.maxY};
}
function iconPixels(c,box){
 const small=canvas(20,20),s=small.getContext('2d',{willReadFrequently:true});
 s.imageSmoothingEnabled=true;s.imageSmoothingQuality='high';
 s.drawImage(c,box.x1,box.y1,box.x2-box.x1+1,box.y2-box.y1+1,0,0,20,20);
 const rgb=s.getImageData(0,0,20,20).data;
 return Uint8Array.from({length:1200},(_,i)=>rgb[Math.floor(i/3)*4+i%3]);
}
// 縮小されたスクショでも比べられるように、両側を軽くぼかしてから距離を測る。
function blurPixels(px){
 const out=new Uint8Array(1200);
 for(let y=0;y<20;y++)for(let x=0;x<20;x++)for(let ch=0;ch<3;ch++){
  let sum=0,n=0;
  for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){
   const nx=x+dx,ny=y+dy;
   if(nx<0||ny<0||nx>=20||ny>=20)continue;
   sum+=px[(ny*20+nx)*3+ch];n++;
  }
  out[(y*20+x)*3+ch]=sum/n;
 }
 return out;
}
function rankIconPixels(px){
 const blurred=blurPixels(px);
 const byName=new Map();
 for(const ref of refs){
  const refBlur=blurPixels(ref.bytes);
  let sum=0;
  for(let i=0;i<1200;i++){const d=blurred[i]-refBlur[i];sum+=d*d}
  const distance=Math.sqrt(sum/1200);
  for(const name of ref.names){
   const previous=byName.get(name);
   if(!previous||distance<previous.distance)byName.set(name,{name,distance,ambiguous:ref.names.length>1});
  }
 }
 const sorted=[...byName.values()].sort((a,b)=>a.distance-b.distance);
 return sorted.map((item,index)=>({...item,gap:(sorted[index+1]?.distance??99)-item.distance}));
}
// 名前の末尾の「◎」がOCRで @ や © になったときだけ、字形（小さな輪）を確認して戻す。
// 確認できなければ置換しない。
function fixCircleMark(name,circle,mark){
 if(!name)return name;
 if(mark)return name.replace(/[@＠©ⓒ〇○◯◎]*$/,'')+mark;
 if(!circle)return name;
 return name.replace(/[@＠©ⓒ]$/,'◎');
}
async function icon(url){
 const im=new Image();im.src=url;await im.decode();
 const c=canvas(600,Math.round(600*im.height/im.width)),ctx=c.getContext('2d',{willReadFrequently:true});
 ctx.drawImage(im,0,0,c.width,c.height);
 const card=cardBox(c);
 let box=card?spriteBox(c,card):null;
 if(card&&!box){
  // カードは見えたが絵を切り出せないときは、カード上端からの相対位置で拾う
  const top=card.top;
  box={x1:39,y1:Math.min(c.height-1,top+13),x2:Math.min(c.width-1,110),y2:Math.min(c.height-1,top+86)};
 }
 // OCR sometimes reads the circular nickname mark ◎ as @. Check the glyph itself.
 let circle=false;
 if(card&&box){
  const {data}=card;
  const ink=(x,y)=>data[4*(y*c.width+x)]<190;
  const onCol=x=>Array.from({length:24},(_,dy)=>ink(x,card.top+54+dy)).some(Boolean);
  let right=-1;
  for(let x=332;x>175;x--)if(onCol(x)){right=x;break}
  let left=right;
  while(left>175&&onCol(left-1))left--;
  let glyphTop=card.top+80,glyphBottom=card.top+50;
  for(let y=card.top+54;y<card.top+78;y++)for(let x=left;x<=right;x++)if(x>=0&&ink(x,y)){glyphTop=Math.min(glyphTop,y);glyphBottom=Math.max(glyphBottom,y)}
  const w=right-left+1,h=glyphBottom-glyphTop+1;
  const bands=horizontal=>{let runs=0,previous=false;for(let i=0;i<(horizontal?w:h);i++){const v=horizontal?ink(left+i,Math.round((glyphTop+glyphBottom)/2)):ink(Math.round((left+right)/2),glyphTop+i);if(v&&!previous)runs++;previous=v}return runs};
  circle=w>=10&&w<=18&&Math.abs(w-h)<=2&&bands(true)===4&&bands(false)===4;
 }
 if(!box)return {circle,ranking:[],confident:false,reason:'アイコンを切り出せません'};
 const fp=iconPixels(c,box);
 const key=btoa(String.fromCharCode(...fp));
 let learned={};try{learned=JSON.parse(localStorage.iconLabels||'{}')}catch{}
 const learnedList=Object.entries(learned).map(([k,n])=>{
  const bytes=Uint8Array.from(atob(k),ch=>ch.charCodeAt(0));
  let sum=0;for(let i=0;i<1200;i++){const d=fp[i]-bytes[i];sum+=d*d}
  return [n,Math.sqrt(sum/1200)];
 }).sort((a,b)=>a[1]-b[1]);
 if(learnedList[0]?.[1]<9)return {circle,name:learnedList[0][0],key,confident:true,ranking:[{name:learnedList[0][0],distance:learnedList[0][1],gap:99}]};
 const ranking=rankIconPixels(fp);
 const best=ranking[0];
 if(!best)return {circle,key,ranking,confident:false,reason:'種族の照合先がありません'};
 const confident=Boolean(best.distance<26&&best.gap>5&&!best.ambiguous);
 return {circle,key,ranking,confident,reason:confident?'':'似た種族との区別がつきません',name:best.distance<45?best.name:null};
}
// 種族はアイコンから決める。アイコンの候補が僅差のときだけ、画面から読めた
// メインスキル・食材を「どちららしいか」の手がかりに使う（値を埋めるのには使わない）。
function pickSpecies(match,r){
 const ranking=match.ranking||[],best=ranking[0],estimate=r.pokemonName||'';
 const compatibility=name=>{
  const mon=db.mons.find(m=>m.name===name);
  if(!mon)return -1;
  let score=0;
  if(r.mainSkillName&&mon.skill===r.mainSkillName)score+=2;
  (r.foodList||[]).forEach((food,index)=>{if(food&&(mon.foodSlots?.[index]||[]).includes(food))score++});
  return score;
 };
 if(!best)return {name:estimate,confident:false};
 if(estimate&&best.name===estimate)return {name:estimate,confident:true};
 const estimateScore=estimate?compatibility(estimate):-1,bestScore=compatibility(best.name);
 if(estimate&&estimateScore>=3&&estimateScore>=bestScore&&best.distance>26)return {name:estimate,confident:false};
 if(best.distance<=26&&best.gap>=5)return {name:best.name,confident:true};
 if(best.distance<=40&&bestScore>=3)return {name:best.name,confident:true};
 if(estimate&&estimateScore>=3)return {name:estimate,confident:false};
 if(best.distance<=42)return {name:best.name,confident:false};
 return {name:'',confident:false};
}
// 種族の候補食材と違う食材が読めたときは、値を入れずに未確定へ戻す（矛盾の検出だけに使う）。
function reconcileFoods(foods,match){
 const mon=match.confident?db.mons.find(m=>m.name===match.name):null;
 if(!mon)return {foods,warnings:[]};
 const warnings=[];
 const next=foods.map((food,index)=>{
  if(!food)return '';
  const allowed=mon.foodSlots?.[index]||mon.foods||[];
  if(allowed.includes(food))return food;
  warnings.push(`${index+1}枠目の「${food}」は${mon.name}の食材と一致しないため未確定にしました`);
  return '';
 });
 return {foods:next,warnings};
}
function field(label,value,options,candidates){
 const wrap=document.createElement('label');wrap.append(label);
 const badge=document.createElement('span');badge.className='und';badge.hidden=true;badge.textContent='未確定';wrap.append(badge);
 const el=document.createElement(options?'select':'input');el.setAttribute('aria-label',label);
 if(options){
  const rest=[...new Set([...(options||[]),...(value?[String(value)]:[])])];
  // 種族の候補食材を先に並べる（値を入れるのではなく、選びやすくするだけ）
  const first=(candidates||[]).filter(name=>rest.includes(name));
  for(const name of first)el.add(new Option(name,name));
  if(first.length&&rest.length>first.length){const group=document.createElement('optgroup');group.label='その他の食材';el.add(group)}
  const group=el.querySelector('optgroup');
  for(const name of rest)if(!first.includes(name)){const option=new Option(name,name);(group||el).append(option)}
  if(!el.options.length||el.options[0].value!=='')el.insertBefore(new Option('選んでください',''),el.firstChild);
 }
 el.value=value??'';wrap.append(el);return [wrap,el,badge]
}
// Drafts stay on this device only, so cards survive an accidental refresh or a closed tab.
const database=new Promise((resolve,reject)=>{
 const req=indexedDB.open('pokesleep-personal-box',2);
 req.onupgradeneeded=()=>{if(!req.result.objectStoreNames.contains('drafts'))req.result.createObjectStore('drafts',{keyPath:'id'})}
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
const shaIndex=new Map();
function add(file,url,match,r,id,draft={}){
 const species={name:match.name||'',confident:!!match.confident};
 const mon=db.mons.find(m=>m.name===species.name);
 const reconciled=reconcileFoods(r.foodList||[],species);
 // 未読の値は空欄のまま。種族を選んだからといってスキルや食材を埋めない。
 const rawVals=[fixCircleMark(r.name,match.circle,r.nameMark),species.name,r.lv,r.mainSkillLv,
  ...Array.from({length:3},(_,i)=>reconciled.foods?.[i]),
  r.mainSkillName,r.nature,...Array.from({length:5},(_,i)=>r.subSkillList?.[i])];
 const vals=draft.vals||rawVals.map(value=>value==null?'':String(value));
 const sources=draft.sources||rawVals.map(value=>value==null||value===''?'undetermined':'read');
 const det=document.createElement('details'),summary=document.createElement('summary'),grid=document.createElement('section');
 const pic=document.createElement('details'),ps=document.createElement('summary'),img=new Image();ps.textContent='元のスクショ';if(url){img.src=url;pic.append(ps,img)}else pic.hidden=true;
 const controls=headers.map((label,i)=>{
  const opts=i===1?db.mons.map(m=>m.name):i>=4&&i<=6?db.foods:i===7?db.skills:i===8?db.natures:i>=9?db.subs:null;
  const candidates=i>=4&&i<=6&&mon?mon.foodSlots?.[i-4]||[]:[];
  const [wrap,el,badge]=field(label,vals[i],opts,candidates);if(i>0)el.required=true;
  if(i===2||i===3){el.type='number';el.min=1;el.max=i===2?100:10;el.step=1}
  grid.append(wrap);return el
 });
 const badges=[...grid.querySelectorAll('span.und')];
 const values=()=>controls.map(c=>c.value);
 const entry={det,controls,id,url,sha:draft.sha||'',warnings:reconciled.warnings};
 function refresh(){
  badges.forEach((badge,index)=>{const state=sources[index];badge.hidden=!(state==='undetermined'&&!controls[index].value);badge.textContent=state==='read'?'読み取り':'未確定'});
  summary.textContent=(controls[0].value||file.name)+' ／ '+(controls[1].value||'種族を選択')+(controls.some(e=>!e.validity.valid)?' · 要確認':'');
 }
 const persist=()=>saveDraft({id,vals:values(),sources,filename:file.name,preview:draft.preview||'',sha:entry.sha,date:Date.now()});
 entry.refresh=refresh;entry.persist=persist;
 const edit=()=>{refresh();persist().catch(error=>message('保存できませんでした。'+error.message))};
 controls.forEach((el,index)=>el.oninput=()=>{sources[index]=el.value?'manual':'undetermined';edit()});
 // 種族を選び直しても、未確定のメインスキルや食材を勝手に埋めない（矛盾の表示だけ）。
 controls[1].onchange=()=>{const selected=db.mons.find(m=>m.name===controls[1].value);if(selected&&match.key){try{const all=JSON.parse(localStorage.iconLabels||'{}');all[match.key]=selected.name;localStorage.iconLabels=JSON.stringify(all)}catch{}}entry.warnings=[];edit()};
 const remove=document.createElement('button');remove.textContent='削除';
 det.append(summary,pic,grid,remove);refresh();
 det.open=!species.confident||controls.some(e=>!e.validity.valid);
 $('rows').append(det);entries.push(entry);remove.onclick=()=>removeCard(entry);$('exportArea').hidden=false;return entry;
}
async function run(files){
 if(!files.length)return;
 const rejected=[],before=entries.length;
 $('files').disabled=true;$('copy').disabled=$('save').disabled=true;
 for(const [i,file] of Array.from(files).entries()){
 const url=URL.createObjectURL(file);let match={},r={};
 $('status').textContent=(i+1)+' / '+files.length+' 枚を読み取り中…';
 if(file.type&&!file.type.startsWith('image/')){URL.revokeObjectURL(url);rejected.push(file.name+'（画像ではない形式です）');continue}
 let sha='';
 try{sha=await fingerprint(file)}catch(e){URL.revokeObjectURL(url);rejected.push(file.name+'（読み込み失敗）');continue}
 if(shaIndex.has(sha)){URL.revokeObjectURL(url);rejected.push(file.name+'（同じ画像を取り込み済み）');continue}
 try{match=await icon(url);r=await reader.read(file,'')}catch(e){URL.revokeObjectURL(url);rejected.push(file.name+(e?.message?`（${e.message}）`:'（読み取り失敗）'));continue}
 const screen=detailScreenCheck(r);
 if(!screen.ok){URL.revokeObjectURL(url);rejected.push(file.name+'（'+screen.reason+'）');continue}
 const species=pickSpecies(match,r);
 const reconciled=reconcileFoods(r.foodList||[],species);
 let preview='';try{const im=new Image();im.src=url;await im.decode();const c=canvas(500,Math.round(500*im.height/im.width));c.getContext('2d').drawImage(im,0,0,c.width,c.height);preview=c.toDataURL('image/jpeg',0.7)}catch{}
 const entry=await add(file,url,{...match,...species},r,'shot-'+sha,{preview,sha});
 shaIndex.set(sha,entry.id);
 await entry.persist().catch(error=>{message('保存できませんでした。'+error.message)});
 if(DEBUG)window.__scanDebug.push({file:file.name,sha,match:{name:match.name,confident:match.confident,circle:match.circle,reason:match.reason,ranking:(match.ranking||[]).slice(0,4)},result:{name:r.name,lv:r.lv,mainSkillName:r.mainSkillName,mainSkillLv:r.mainSkillLv,foodList:r.foodList,subSkillList:r.subSkillList,nature:r.nature,pokemonName:r.pokemonName,warnings:reconciled.warnings},debug:r.debug||null,values:entry.controls.map(c=>c.value)});
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
 const quote=v=>/[\",\r\n]/.test(v)?'\"'+v.replaceAll('\"','\"\"')+'\"':v;
 return [headers,...batch.map(r=>r.controls.map(e=>e.value))].map(row=>row.map(quote).join(',')).join('\r\n');
}
const message=text=>$('status').textContent=text;
const report=e=>message('処理を完了できませんでした。'+e.message);
function download(text,name,type){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),10000)}
// まったく同じ内容の行だけを1行にまとめる。能力が似ている別個体は統合しない。
function buildBatch(){
 const exact=new Map(),order=[];let merged=0;
 for(const e of entries){
  const bad=problem(e);if(bad)return {broken:{e,bad}};
  const vals=e.controls.map(c=>c.value),raw=JSON.stringify(vals);
  if(exact.has(raw)){merged++;continue}
  exact.set(raw,e);order.push(e);
 }
 return {batch:order,merged};
}
async function send(copy){
 if(!entries.length){message('出力できるカードがありません。スクショを選んでね。');return}
 const {batch,merged,broken}=buildBatch();
 if(broken){broken.e.det.open=true;broken.bad.focus();message('未入力または種族と食材の組み合わせが合わない項目があります。開いているカードを確認してください。');return}
 const text=output(batch);
 let copied=true;
 if(copy){try{await navigator.clipboard.writeText(text);$('fallback').hidden=true}catch{copied=false;$('fallback').hidden=false;$('fallback').value=text;$('fallback').select()}}
 else download(text,'ポケスリ_新規.csv','text/csv;charset=utf-8');
 message(batch.length+'匹分のCSVを'+(copy?(copied?'コピーしたよ。':'表示したからコピーしてね。'):'保存したよ。')+(merged?' 同じ内容の '+merged+'匹はまとめました。':'')+' にとよんの「インポート」に貼ってね。')
}
$('copy').onclick=()=>send(true).catch(report);$('save').onclick=()=>send(false).catch(report);
async function removeCard(entry){
 const i=entries.indexOf(entry);if(i>=0)entries.splice(i,1);
 entry.det.remove();if(entry.url)URL.revokeObjectURL(entry.url);
 if(entry.sha)shaIndex.delete(entry.sha);
 try{await removeDraft(entry.id)}catch(e){report(e);return}
 $('exportArea').hidden=!entries.length;message('削除しました。');
}
$('clear').onclick=async()=>{
 if(!entries.length||!confirm('いま並んでいるカードをすべて消しますか？'))return;
 try{await drafts(s=>s.clear(),'readwrite')}catch(e){report(e);return}
 for(const e of entries){e.det.remove();if(e.url)URL.revokeObjectURL(e.url)}
 entries.length=0;shaIndex.clear();$('exportArea').hidden=true;message('カードをすべて削除しました。');
};
async function init(){
 const rows=(await drafts(s=>s.getAll())).filter(r=>!r.deletedAt);
 for(const row of rows){const entry=add({name:row.filename||'スクショ'},row.preview||'',{confident:true},{},row.id,row);if(row.sha)shaIndex.set(row.sha,row.id)}
 for(const e of entries)e.refresh();
 $('exportArea').hidden=!entries.length;
}
$('files').disabled=true;init().then(()=>{$('files').disabled=false;if(entries.length)message('前回のカード '+entries.length+'匹を再開しました。');if(DEBUG)mountDebug()}).catch(report);
// Check public data in the background; keep the working catalog on any failure.
checkCatalog(bundled,{storage:catalogStorage}).catch(()=>{});
// ===== 開発用の診断表示（?debug=1 のときだけ） =====
function mountDebug(){
 const box=document.createElement('details');box.id='debug';
 const head=document.createElement('summary');head.textContent='開発用の診断情報（?debug=1）';
 const area=document.createElement('textarea');area.readOnly=true;area.rows=12;
 const button=document.createElement('button');button.textContent='診断JSONを保存';
 button.onclick=()=>download(JSON.stringify(window.__scanDebug,null,1),'scan-debug.json','application/json');
 box.append(head,area,button);box.style.cssText='margin:18px 0;font-size:12px';
 area.style.cssText='width:100%;font-family:ui-monospace,monospace';
 document.querySelector('main').append(box);
 const update=()=>{area.value=JSON.stringify(window.__scanDebug.map(item=>({file:item.file,match:item.match,result:item.result,values:item.values,warnings:item.result.warnings})),null,1)};
 new MutationObserver(update).observe($('rows'),{childList:true});
 setInterval(update,1000);
}
