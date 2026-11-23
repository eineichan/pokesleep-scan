// Inspect OCR evidence before species correction can make unrelated images look valid.
export function isDetailScreen(result){
 const text=String(result.rawText||'').normalize('NFKC').replace(/\s/g,'');
 const labels=['おてつだい時間','最大所持数','メインスキル','サブスキル','詳細ステータス','せいかく','食材'];
 const count=labels.filter(label=>text.includes(label)).length;
 const level=/Lv[.。]?[0-9]{1,3}/i.test(text);
 const skills=Array.isArray(result.subSkillList)&&result.subSkillList.length>=3;
 const helpTime=/[0-9]+分[0-9]+秒/.test(text);
 const skillPanel=text.includes('カビゴン')||text.includes('スキル');
 return count>=2&&level&&skills&&helpTime&&skillPanel;
}
