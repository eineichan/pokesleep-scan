// Inspect OCR evidence before species correction can make unrelated images look valid.
// 一部の項目が読めないだけの詳細画面を、画面違いとして捨てない。
export function detailScreenCheck(result){
 const text=String(result.rawText||'').normalize('NFKC').replace(/\s/g,'');
 const labels=['おてつだい時間','最大所持数','メインスキル','サブスキル','詳細ステータス','せいかく','食材'];
 const count=labels.filter(label=>text.includes(label)).length;
 // このツール自身の画面（フォームや説明）を個体の詳細画面と取り違えない。
 const appMarkers=['個体スキャン','選んでください','元のスクショ','CSVをコピー','スクショを選ぶ','この端末'];
 const level=result.lv!=null||/Lv[.。]?[0-9]{1,3}/i.test(text);
 const helpTime=Boolean(result.helpTime)||/[0-9]+分[0-9]+秒/.test(text);
 const skill=Boolean(result.mainSkillName)||text.includes('カビゴン')||text.includes('スキル');
 const subCount=(result.subSkillList||[]).filter(Boolean).length;
 // 見出しが2つ以上あり、レベルかおてつだい時間のどちらかが読めていれば個体の詳細画面とみなす。
 // サブスキルが読めないことは画面違いの根拠にしない。
 const appScreen=appMarkers.some(marker=>text.includes(marker));
 // 項目が読めないこと自体は画面違いの根拠にしない（薄い画像・圧縮画像でも登録する）。
 const ok=!appScreen&&(
  (count>=2&&(level||helpTime||skill||subCount>=1))||
  (subCount>=3&&(skill||helpTime))||
  (helpTime&&skill)
 );
 const reason=ok?'':appScreen?'このツールの画面のため登録しません':count<2?'個体の詳細画面の見出しが見つかりません':'個体の詳細画面として読み取れません';
 return {ok,reason,labels:count,level,helpTime,subCount};
}
export function isDetailScreen(result){
 return detailScreenCheck(result).ok;
}
// Group by species so normal/shiny references for the same species do not compete.
export function rankIcons(refs,score){
 const byName=new Map();
 for(const ref of refs){const distance=score(ref.bytes);for(const name of ref.names){const previous=byName.get(name);if(!previous||distance<previous.distance)byName.set(name,{name,distance,ambiguous:ref.names.length>1})}}
 const sorted=[...byName.values()].sort((a,b)=>a.distance-b.distance),best=sorted[0];
 if(!best)return {};
 const confident=best.distance<28&&!best.ambiguous&&(!sorted[1]||sorted[1].distance-best.distance>5);
 return {name:best.distance<45?best.name:null,confident};
}
