import * as _ from 'lodash';

import Styles from "./Styles";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";

export default function Layout({ children, navigations }) {
  const mainMenu = _.find(navigations, { handle: 'main-menu'});
  const footerNavigations = _.filter(navigations, navigation => {
    return _.includes(['featured', 'company', 'information'], navigation.handle);
  });
  return (
    <>
      <Styles/>
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
