// Keep records in one IndexedDB store. Only structured values and image hashes are retained.
export function openBox(name='pokesleep-personal-box'){
 return new Promise((resolve,reject)=>{
  const req=indexedDB.open(name,2);
  req.onupgradeneeded=()=>{if(!req.result.objectStoreNames.contains('records')){const s=req.result.createObjectStore('records',{keyPath:'id'});s.createIndex('photos','photos',{multiEntry:true,unique:true})}for(const n of ['drafts','baseline'])req.result.createObjectStore(n,{keyPath:'id'})};
  req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)
 })
}
export function records(db){
 return new Promise((resolve,reject)=>{const r=db.transaction('records').objectStore('records').getAll();r.onsuccess=()=>resolve(r.result.filter(row=>!row.deletedAt));r.onerror=()=>reject(r.error)})
}
export async function fingerprint(file){
 const bytes=new Uint8Array(await crypto.subtle.digest('SHA-256',await file.arrayBuffer()));
 return Array.from(bytes,x=>x.toString(16).padStart(2,'0')).join('')
}
export function possible(a,b){
 const norm=x=>String(x??'').normalize('NFKC').trim().toLowerCase();
 if(!a[1]||norm(a[1])!==norm(b[1]))return false;
 const same=(i)=>!!a[i]&&norm(a[i])===norm(b[i]);
 return (same(0)&&norm(a[0])!==norm(a[1]))||[4,5,6,8,9,10,11,12,13].every(same)
}
export function commit(db,old,vals,hash){
 return new Promise((resolve,reject)=>{
  const tx=db.transaction('records','readwrite'),store=tx.objectStore('records');
  let result,problem;
  tx.oncomplete=()=>resolve(result);
  tx.onabort=()=>reject(problem||tx.error||Error('保存できませんでした'));
  const check=store.index('photos').get(hash);
  check.onsuccess=()=>{
   if(check.result&&check.result.id!==old?.id){result='duplicate';return}
   const save=(prior)=>{
    if(old&&prior?.rev!==old.rev){problem=Error('別の画面で更新されました。もう一度保存してください。');tx.abort();return}
    store.put({previous:prior?{vals:prior.vals,photos:prior.photos}:null,id:prior?.id||crypto.randomUUID(),rev:(prior?.rev||0)+1,vals:[...vals],photos:[...new Set([...(prior?.photos||[]),hash])],date:Date.now()});result='saved'
   };
   if(old){const get=store.get(old.id);get.onsuccess=()=>save(get.result)}else save(null)
  }
 })
}
