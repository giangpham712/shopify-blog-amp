import Styles from "./Styles";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";

export default function Layout({ children, menuItems }) {
  return (
    <>
      <Styles/>
      <Header menuItems={menuItems}/>
      <main className="main-content">
        <div className="wrapper p-t-lg">
          {children}
        </div>
      </main>
      <Footer/>
      <style jsx global>{`
        .main-content {
          margin-top: 87px;
          position: relative;
        }
      `}</style>
    </>
  )
}
