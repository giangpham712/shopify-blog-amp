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
          <amp-script src="https://cdn.shopify.com/s/files/1/0648/1955/files/wknd.js?v=1681485614"></amp-script>
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
