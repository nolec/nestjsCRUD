import React from 'react';

import Document, { Html, Head, Main, NextScript } from 'next/document';

//기본 문서 형식 지정 * 문서의 전체적인 큰 틀 생성
//서버사이드에서 단 1회만 로드
//SPA에서 변경할 수 없는 부분
//클라이언트단의 첫 진입점 _app.js

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>My new cool app</title>
        </Head>
        <body>
          <div id="root">
            <Main />
            {/*Next JS client 가 동작하는 부분*/}
            <NextScript />
            {/*Next 에서 알아서 생성하는 번들러 된 파일들이 들어감*/}
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
