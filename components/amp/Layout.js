import React from 'react';
import Head from 'next/head';
import * as _ from 'lodash';

import Styles from './Styles';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, navigations }) {
  const mainMenu = _.find(navigations, { handle: 'main-menu'});
  const footerNavigations = _.filter(navigations, navigation => {
    return _.includes(['featured', 'company', 'information'], navigation.handle);
  });

  const gaJson = {
    vars: { account: 'UA-1450425-1' },
    triggers: { trackPageView: { on: 'visible', request: 'pageview' } }
  };
  const fbPixelJson = { vars: { pixelId: '1038798819518133' } };

  return (
    <>
      <Styles/>
      <Head>
        <script async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"></script>
        <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
        <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
      </Head>
      <amp-analytics type="googleanalytics" id="analytics-ga">
        <script type="application/json" dangerouslySetInnerHTML={{__html: JSON.stringify(gaJson)}}></script>
      </amp-analytics>
      <amp-analytics type="facebookpixel" id="facebook-pixel">
        <script type="application/json" dangerouslySetInnerHTML={{__html: JSON.stringify(fbPixelJson)}}></script>
      </amp-analytics>
      <Header mainMenu={mainMenu}/>
      <main className="main-content">
        <div className="wrapper p-t-lg">
          {children}
        </div>
      </main>
      <Footer navigations={footerNavigations}/>
      <style jsx global>{`
        .main-content {
          margin-top: 87px;
          position: relative;
        }
      `}</style>
    </>
  )
}
