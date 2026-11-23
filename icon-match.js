// Group by species so normal/shiny references for the same species do not compete.
export function rankIcons(refs,score){
 const byName=new Map();
 for(const ref of refs){const distance=score(ref.bytes);for(const name of ref.names){const previous=byName.get(name);if(!previous||distance<previous.distance)byName.set(name,{name,distance,ambiguous:ref.names.length>1})}}
 const sorted=[...byName.values()].sort((a,b)=>a.distance-b.distance),best=sorted[0];
 if(!best)return {};
 const confident=best.distance<28&&!best.ambiguous&&(!sorted[1]||sorted[1].distance-best.distance>5);
 return {name:best.distance<45?best.name:null,confident};
}
