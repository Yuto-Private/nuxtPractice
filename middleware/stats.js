// ミドルウェアを使うと、特定のページやいくつかのページのグループがレンダリングされる前に実行されるカスタム関数を定義することができます。
// ミドルウェアは middleware/ ディレクトリに入れます。 ファイル名はミドルウェアの名前となります（middleware/auth.js は auth ミドルウェアになります）
// ミドルウェアは第一引数として コンテキスト を受け取ります:
//https://ja.nuxtjs.org/guide/routing/#%E3%83%9F%E3%83%89%E3%83%AB%E3%82%A6%E3%82%A7%E3%82%A2

export default function(context) { // コンテキストを引数に無名関数を定義
  context.userAgent = process.server // 返り値のuserAgentに代入 process.server（どっからくるの・・・？）を比較
    ? context.req.headers['user-agent'] // 返り値のリクエストヘッダーからuser-agentを取得
    : navigator.userAgent // navigator (どっからくるの・・・？)のuserAgentを代入
}