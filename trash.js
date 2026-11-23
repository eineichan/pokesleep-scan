import {transaction,tables} from './safety.js';
export async function moveToTrash(db,table,id){
 if(!tables.includes(table))throw Error('削除対象が不正です');
 await transaction(db,tables,tx=>{
  const store=tx.objectStore(table),q=store.get(id);
  q.onsuccess=()=>{const row=q.result;if(!row||row.deletedAt)return;const group=crypto.randomUUID(),deletedAt=Date.now();
   store.put({...row,deletedAt,trashGroup:group});
   // A saved record may still have a draft visible in the CSV area.
   if(table==='records')for(const hash of row.photos){const drafts=tx.objectStore('drafts'),r=drafts.get(hash);r.onsuccess=()=>{if(r.result&&!r.result.deletedAt)drafts.put({...r.result,deletedAt,trashGroup:group})}}
  };
 });
}
export async function restoreTrash(db,group){
 await transaction(db,tables,tx=>{for(const table of tables){const store=tx.objectStore(table),q=store.getAll();q.onsuccess=()=>{for(const row of q.result)if(row.deletedAt&&row.trashGroup===group){const {deletedAt,trashGroup,...rest}=row;store.put(rest)}}}});
}
export async function purgeTrash(db,group){
 if(typeof group!=='string'||!group)throw Error('削除対象が不正です');
 let removed=0;
 await transaction(db,tables,tx=>{for(const table of tables){
  const store=tx.objectStore(table),q=store.getAll();
  q.onsuccess=()=>{for(const row of q.result)if(row.deletedAt&&row.trashGroup===group){store.delete(row.id);removed++}};
 }});
 return removed;
}
