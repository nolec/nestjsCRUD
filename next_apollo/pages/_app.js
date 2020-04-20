// pages/_app.js
import App from 'next/app';
import React from 'react';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    console.log(Component);
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    console.log(Component, pageProps);
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }
}
