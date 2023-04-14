import Document, {Html, Head, Main, NextScript} from 'next/document'

import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <Html>
        <Head>
          <script async="async" custom-element="amp-skimlinks"
                  src="https://cdn.ampproject.org/v0/amp-skimlinks-0.1.js" class="jsx-3778485153"></script>
          <amp-script src="https://amp.puritycosmetics.com/static/wknd.js"></amp-script>
        </Head>
        <body>
        <amp-skimlinks layout="nodisplay" publisher-code="158246X1624815"></amp-skimlinks>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument
