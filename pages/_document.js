/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="/public/font/Silka-Regular.otf" rel="stylesheet" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;500;700&display=swap"
          />
          <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
