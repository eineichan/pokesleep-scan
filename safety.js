import {possible} from './box.js';
export const tables=['records','drafts','baseline'];
export function transaction(db,names,action,mode='readwrite'){
 return new Promise((resolve,reject)=>{
  const tx=db.transaction(names,mode);tx.oncomplete=resolve;tx.onabort=()=>reject(tx.error||Error('保存処理が中断されました'));
  try{action(tx)}catch(e){tx.abort();reject(e)}
 })
}
export function put(db,name,row){return transaction(db,[name],tx=>tx.objectStore(name).put(row))}
export async function snapshot(db){
 const data={format:'poke-box-backup',version:1};
 await transaction(db,tables,tx=>{for(const n of tables){const q=tx.objectStore(n).getAll();q.onsuccess=()=>data[n]=q.result}},'readonly');
 return data
}
export async function restore(db,data){
 const strings=a=>Array.isArray(a)&&a.every(v=>typeof v==='string');
 const values=a=>strings(a)&&a.length===14;
 if(data?.format!=='poke-box-backup'||data.version!==1||!tables.every(k=>Array.isArray(data[k])))throw Error('このツールのバックアップを選んでください');
 for(const k of tables)for(const r of data[k]){
  if(r?.deletedAt!==undefined&&(!Number.isFinite(r.deletedAt)||r.deletedAt<=0||typeof r.trashGroup!=='string'||!r.trashGroup))throw Error('ごみ箱のデータが不正です');
  if(!r||typeof r.id!=='string'||!values(r.vals))throw Error('ファイルが破損しています');
  if(k==='records'&&(!Number.isInteger(r.rev)||!strings(r.photos)||(r.previous&&(!values(r.previous.vals)||!strings(r.previous.photos)))))throw Error('個体データが不正です')
 }
 let added=0,skipped=0;
 await transaction(db,tables,tx=>{for(const k of tables){
  const s=tx.objectStore(k),q=s.getAll();
  q.onsuccess=()=>{const ids=new Set(q.result.map(r=>r.id)),photos=new Set(q.result.flatMap(r=>r.photos||[]));
   for(const r of data[k]){
    if(ids.has(r.id)||(k==='records'&&r.photos.some(h=>photos.has(h)))){skipped++;continue}
    s.add(r);ids.add(r.id);for(const h of r.photos||[])photos.add(h);added++
   }
  }
 }});
 return {added,skipped}
}
export async function undo(db,old){
 await transaction(db,['records'],tx=>{const s=tx.objectStore('records'),q=s.get(old.id);q.onsuccess=()=>{
  const r=q.result;if(!r?.previous||r.rev!==old.rev){tx.abort();return}
  s.put({...r,...r.previous,previous:null,rev:r.rev+1,date:Date.now()})
 }})
}
export function parseCSV(text){
 let rows=[],row=[],v='',quoted=false;text=text.replace(/^\uFEFF/,'');
 for(let i=0;i<text.length;i++){const c=text[i];
  if(c==='"'){if(quoted&&text[i+1]==='"'){v+='"';i++}else quoted=!quoted}
  else if(!quoted&&c===','){row.push(v);v=''}
  else if(!quoted&&(c==='\r'||c==='\n')){if(c==='\r'&&text[i+1]==='\n')i++;row.push(v);if(row.some(Boolean))rows.push(row);row=[];v=''}
  else v+=c
 }
 if(quoted)throw Error('CSVが途中で切れています');row.push(v);if(row.some(Boolean))rows.push(row);return rows
}
export function parseBaseline(text,headers){
 const [cols,...rows]=parseCSV(text);
 if(!cols||!['ポケモン','レベル','Lv10'].every(h=>cols.includes(h)))throw Error('日本語で書き出したにとよんのCSVを選んでください');
 return rows.map((r,i)=>{const vals=headers.map(h=>r[cols.indexOf(h)]||'');if(r.length!==cols.length||!vals[1])throw Error((i+2)+'行目を確認してください');return {id:JSON.stringify(vals),vals}})
}
export function stateOf(vals,baseline){
 if(baseline.some(r=>r.vals.every((v,i)=>i===0?(v||vals[1])===(vals[0]||vals[1]):v===vals[i])))return '登録済み';
 return baseline.some(r=>possible(r.vals,vals))?'更新候補':'新規'
}
