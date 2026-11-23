// Public catalog only. Never send screenshots or box records to the update host.
const KEY='pokesleep.catalog.v1', CHECK='pokesleep.catalog.checked.v1';
const DAY=86400000;
const clean=s=>typeof s==='string'&&s.length>0&&s.length<120&&!/[<>\x00-\x1f]/.test(s);
export function validate(c){
 if(!c||!Array.isArray(c.mons)||c.mons.length<100||c.mons.length>5000)throw Error('種族データの形式が変わりました');
 for(const k of ['foods','skills','subs','natures'])if(!Array.isArray(c[k])||!c[k].length||!c[k].every(clean))throw Error('候補データが不正です');
 for(const m of c.mons)if(!clean(m.name)||!Number.isInteger(m.id)||m.id<1||!Array.isArray(m.foods)||m.foods.length<1||m.foods.length>30||!m.foods.every(f=>c.foods.includes(f))||!c.skills.includes(m.skill))throw Error('種族データが不完全です');
 for(const m of c.mons)if(m.foodSlots&&(!Array.isArray(m.foodSlots)||m.foodSlots.length!==3||!m.foodSlots.every(slot=>Array.isArray(slot)&&slot.length&&slot.every(f=>c.foods.includes(f)))))throw Error('食材枠が不正です');
 return c;
}
export function convert(pokemon,names,data,skills,base){
 if(!Array.isArray(pokemon))throw Error('種族データを取得できません');
 const mons=pokemon.filter(p=>!(p.skill==='unknown'&&!names.pokemons?.[p.name])).map(p=>{
 const translate=i=>data.ingredients?.[i.name];
 const regular=[p.ing1,p.ing2,p.ing3].filter(i=>i&&i.name!=='unknown');
 const foods=p.mythIng?[...new Set(p.mythIng.map(translate))]:regular.map(translate);
 const foodSlots=p.mythIng?[1,2,3].map(n=>p.mythIng.filter(i=>i['c'+n]>0).map(translate)):[1,2,3].map(n=>regular.slice(0,n).map(translate));
 return {name:names.pokemons?.[p.name],id:p.id,foods,foodSlots,skill:skills.skills?.[p.skill]?.name};
 });
 const subs=Object.entries(data.subskill||{}).filter(([k])=>/ (S|M|L)$/.test(k)||k.endsWith(' Bonus')).map(([,v])=>v);
 return validate({mons,foods:Object.values(data.ingredients||{}),natures:Object.values(data.natures||{}),subs:[...new Set([...base.subs,...subs])],skills:[...new Set(mons.map(m=>m.skill))]});
}
export function cachedCatalog(base,storage){
 try{const record=JSON.parse(storage.getItem(KEY));validate(record.catalog);if(!/^[a-f0-9]{40}$/.test(record.sha))throw Error();return record}catch{return {catalog:validate(base),sha:null}}
}
export async function checkCatalog(base,{storage,fetcher=fetch,now=Date.now(),force=false}={}){
 const current=cachedCatalog(base,storage);
 try{
  const checked=Number(storage.getItem(CHECK));
  if(!force&&checked>0&&now>=checked&&now-checked<DAY)return {state:'recent',current};
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),12000);
  let sha,catalog;
  try{
   async function json(url){const r=await fetcher(url,{signal:controller.signal,credentials:'omit',referrerPolicy:'no-referrer',cache:'no-cache'});if(!r.ok)throw Error('取得できません');return r.json()}
   const head=await json('https://api.github.com/repos/nitoyon/pokesleep-tool/commits/main');sha=head.sha;
   if(!/^[a-f0-9]{40}$/.test(sha))throw Error('更新情報が不正です');
   if(sha===current.sha){storage.setItem(CHECK,String(now));return {state:'same',current}}
   const root='https://raw.githubusercontent.com/nitoyon/pokesleep-tool/'+sha+'/';
   const paths=['src/data/pokemon.json','src/i18n/ja/pokemons.json','src/i18n/ja/data.json','src/i18n/ja/skills.json'];
   const files=await Promise.all(paths.map(p=>json(root+p)));
   catalog=convert(...files,base);
   // A shrinking catalog may be an upstream format change. Keep the working copy.
   if(current.catalog.mons.some(m=>!catalog.mons.some(n=>n.name===m.name)))throw Error('種族の削除を検知しました');
  }finally{clearTimeout(timer)}
  const next={catalog,sha,updatedAt:now};
  storage.setItem(KEY,JSON.stringify(next)); // One atomic write after all files pass validation.
  storage.setItem(CHECK,String(now));
  return {state:JSON.stringify(catalog)===JSON.stringify(current.catalog)?'same':'updated',current:next};
 }catch{return {state:'failed',current}}
}
