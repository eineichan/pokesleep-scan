# pokesleep-scan

ポケスリのスクショをデータ化して、にとよんCSVにまとめる個人用ツール。

- 公開先: https://eineichan.github.io/pokesleep-scan/
- 使い方: スクショをまとめて選ぶ → 読み取り結果を確認・修正 → CSVをコピー／保存 → にとよんへインポート
- 画面は `1. スクショを選ぶ → 2. 確認・修正 → 3. にとよんへ貼る` の3ステップだけ（データ管理・CSV照合・バックアップ機能はありません）
- データは端末のブラウザ内（IndexedDB・下書きのみ）に保存。画像や手持ちは外部へ送信しません。

## 構成

- `index.html` / `app.js` / `reader.js` ほか: アプリ本体（GitHub Pages のルート）
- `ocr/`: Tesseract の日本語OCR一式（同梱・自動更新の対象外）
- `catalog.json` / `icon-catalog.json`: 図鑑データ
- ライセンス表記: `LICENSE.md` / `LICENSE-nitoyon.txt` / `LICENSE-reimer.txt` / `IMAGE-SOURCES.txt`
- 未使用ファイル: `safety.js` / `trash.js` / `box.js`（2026-11-23 の超シンプル化で読み込みを外したもの）
