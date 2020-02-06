import * as _ from 'lodash';

import Styles from "./Styles";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import Head from "next/dist/next-server/lib/head";

export default function Layout({ children, navigations }) {
  const mainMenu = _.find(navigations, { handle: 'main-menu'});
  const footerNavigations = _.filter(navigations, navigation => {
    return _.includes(['featured', 'company', 'information'], navigation.handle);
  });
  return (
    <>
      <Styles/>
      
      <Head>
        <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"/>
        <amp-analytics type="googleanalytics" id="analytics-ga">
          <script type="application/json">
            {
              {
                "vars": {
                "account":"UA-1450425-1"
              },
                "triggers": {
                  "trackPageView": {
                    "on":"visible",
                    "request":"pageview"
                  }
                }
              }
            }
          </script>
        </amp-analytics>
        <amp-analytics type="facebookpixel" id="facebook-pixel">
          <script type="application/json">
            {
              "vars": {
                "pixelId":"1038798819518133"
              }
            }
          </script>
        </amp-analytics>
      </Head>
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
