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
          <script async custom-element="amp-script" src="https://cdn.ampproject.org/v0/amp-script-0.1.js"></script>
          <script async custom-element="amp-script" src="https://cdn.shopify.com/s/files/1/0648/1955/files/popup-script.js?v=1687194598"></script>
          <meta name="amp-script-src" content="sha384-bPBkuW4E1H49KTCaFi9FtTqb_decMdd2zpPocqe4siq12h1y50f7a535BczIhjga" />
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
