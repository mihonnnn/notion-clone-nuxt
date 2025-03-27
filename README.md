# Notion Clone with Nuxt.js

![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/mihonnnn/notion-clone-nuxt?utm_source=oss&utm_medium=github&utm_campaign=mihonnnn%2Fnotion-clone-nuxt&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)

## 概要

このプロジェクトは、Nuxt.js を使用して Notion のようなドキュメント管理システムを実装したクローンアプリケーションです。

## 主な機能

- 📝 リアルタイムドキュメント編集
- 📁 ドキュメントの階層構造管理
- 👥 コラボレーション機能
- 🔍 検索機能
- 🎨 カスタマイズ可能な UI

## 技術スタック

- Nuxt.js
- TypeScript
- Tailwind CSS
- Supabase (認証・データベース)

## セットアップ方法

### 必要条件

- Node.js (v16 以上)
- npm または yarn

### インストール

```bash
# リポジトリのクローン
git clone https://github.com/mihonnnn/notion-clone-nuxt.git

# プロジェクトディレクトリに移動
cd notion-clone-nuxt

# 依存関係のインストール
npm install
# または
yarn install
```

### 環境変数の設定

`.env`ファイルを作成し、必要な環境変数を設定してください：

```env
NUXT_PUBLIC_SUPABASE_URL=your-supabase-url
NUXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
```

## 使用方法

1. アプリケーションにアクセス
2. アカウントを作成またはログイン
3. 新しいドキュメントを作成
4. ドキュメントの編集と共有

## ライセンス

MIT

## 貢献

プロジェクトへの貢献は大歓迎です。Issue の作成や Pull Request の送信をお願いします。

## 作者

- GitHub: [@mihonnnn](https://github.com/mihonnnn)
