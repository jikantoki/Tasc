# スケジュール管理・共有ソフト

## セットアップ

### 前提条件

Node.jsがインストールされていること

```shell
git clone git@github.com:jikantoki/tasc.git tasc
cd tasc
npm install
yarn install
```

## 実行方法

※ポート番号12345以上の空きポートで実行されます

```shell
yarn serve
```

http://localhost:12345 にアクセス

## ブランチ名規則

**英語しか使えないので注意**

### 新機能開発

feature/本名以外のペンネーム/新機能について 10 ～ 20 文字程度で概要  
ex: feature/jikantoki/save-data

### バグ修正、コード改善

hotfix/本名以外のペンネーム/修正内容について 10 ～ 20 文字程度で概要  
ex: hotfix/jikantoki/fix-directory-path

**ブランチ名は機能や修正内容事に分けること**

## 命名規則

サンプル名 →my name is jiro
| 名称 | 規則 |
|---|---|
| クラス名 | MyNameIsJiro |
| 変数名・データベースのプロパティ名 | myNameIsJiro |
| ディレクトリパス | MY-NAME-IS-JIRO |
| ブランチ名 | my-name-is-jiro |
| 定数名・大文字小文字に制限がかかる場所 | MY_NAME_IS_JIRO |

## コーディング規則

### 言語規則

PHP でも Javascript でも開発可能なものは原則 Javascript で
但し外部からソースコードを見られてはいけない部分や DB を触る API 部分は PHP で作る
API は原則 GET で入力して JSON を出力

### 変数の扱い

| 言語 | 型     | 使い方                                     |
| ---- | ------ | ------------------------------------------ |
| PHP  | $      | 変数                                       |
| PHP  | define | 定数                                       |
| Js   | var    | パブリックな変数（できるだけ使わないこと） |
| Js   | let    | 宣言した場所でのみ使える変数               |
| Js   | const  | 定数                                       |

### 命令文について

```js
/**
 * 変数の説明
 */
let abc = 'hello' //イコール前後にスペース
if (abc === 'hello') {
  hogehoge()
} else {
  piyopiyo()
}

/**
 * 関数の説明
 * @param {int} fuga フガフガするために必要な引数
 * @param {string} piyo ピヨピヨで分岐するときにこの文字列を使う
 */
const hogehoge = (fuga, piyo) => {
  console.log('関数')
}
//処理の中身はタブでインデント
//ifやelseの前後のスペース
```

## その他ルール

### ソケット通信の行い方

#### 特定のユーザーにデータを渡す方法

参考資料: https://qiita.com/coret/items/59ccfa7457f8491b6b35

※ここで言うトークンとは、セッション毎に変わるワンタイムパスワードのようなものを指す

1. 接続時に、サーバーがクライアント毎にランダムなIDを割り振る（clients.set）
1. この時に、クライアントはユーザーIDをサーバーに送信する（1で作ったIDと紐づけるため）
1. 個別送信時は、クライアントからIDを取得して送信したいユーザーのIDと正しければ文字を送信する
1. 接続が破棄されたら、1で用意したIDを破棄する

### Vueの書き方

```vue
<template lang="pug">
//HTML部分はpugを使って記述

//内部リンクでaタグは使わない、代替手段↓
router-link(to="/") トップページ

//外部リンクの場合
a(href="https://enoki.xyz") エノキ電気
</template>

<script></script>

<style lang="scss">
//スタイルシートはSCSSで書く
//具体的な使い方はCSSとほとんど変わらないので割愛
</style>
```

## 以下、自動で生成されたマニュアル

以下の指示に従ってインストール、テストすること

## Project setup

```shell
yarn install
```

### Compiles and hot-reloads for development

```shell
yarn serve
```

### Compiles and minifies for production

```shell
yarn build
```

### Lints and fixes files

```shell
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
