import React from "react";
import Head from "next/head";
import NavArrow from "./NavArrow";

const NavDrawer = ({menuItems}) => {
  return (
    <div id={"NavDrawer"}>
      <Head>
        <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>
        <script async custom-element="amp-accordion" src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"></script>
      </Head>

      <amp-sidebar id="mobile-nav" layout="nodisplay" side="left" className="p-t p-h">
        <button on="tap:mobile-nav.close" tabIndex="0" className="close-sidebar">✕</button>
        <amp-accordion animate="" disable-session-states="">
          {menuItems.map((item, index) => {
            return (
              <section key={index} className="b-b">
                <h3 className="callout_text text-u-c p-v-md block p-l">
                  {item.title}
                  <NavArrow/>
                </h3>
                <amp-accordion className="nested-accordion no-margin-v m-h-sm" animate="">
                  {item.links.map((child, idx) => {
                    if (child.links && child.links.length > 0)
                      return (
                        <section key={idx}>
                          <h3 className="callout_text text-u-c p-v-sm m-b-sm block p-l">{child.title}</h3>
                          <div className="no-margin-v m-h-sm">
                          {child.links.map(grandChild => (
                              <h3><a href={grandChild.url} className="caption_text p-v-sm m-b-sm block p-l">{grandChild.title}</a></h3>
                            ))}
                          </div>
                        </section>
                      );

                    return (
                      <section key={idx}>
                        <h3><a href={child.url} className="callout_text text-u-c p-v-sm m-b-sm block p-l">{child.title}</a></h3>
                        <div className=""></div>
                      </section>
                    )
                  })}
                </amp-accordion>
              </section>
            );
            }
          )}
        </amp-accordion>
        <a href={"/pages/purist-perks"} className="block callout_text text-center p-v-md bg-peach m-t-md m-h">PURIST PERKS</a>
        <a href={"/pages/cosmetic-retailers"} className="block callout_text text-center p-v-md bg-peach m-t m-h">STORE LOCATOR</a>
        <a href="https://support.100percentpure.com" className="block callout_text text-center p-v-md bg-peach m-t m-h">HELP</a>
      </amp-sidebar>

      <style jsx global>{`
        #NavDrawer {
          background-color: #fff;
        }
      
        amp-sidebar,
        amp-sidebar section,
        .i-amphtml-accordion-header {
          background-color: #fff;
          border: none;
        }
        
        amp-sidebar {
          width: 83.3333vw;
          left: -83.3333vw;
          border-right: 1px solid #f2f2f2;
        }
        
        amp-sidebar .close-sidebar {
          font-size: 20px;
          position: absolute;
          right: 20px;
          z-index: 2;
        }
        
        amp-sidebar .close-sidebar:focus {
          outline-color: transparent;
          outline-width: 0;
        }
        
        amp-sidebar > amp-accordion {
          margin-top: 30px;
        }
        
        amp-sidebar section a {
          font: bold 12px/14px 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
          letter-spacing: 2px; 
        }
        
        amp-sidebar section h3:hover, 
        amp-sidebar section h3:focus {
          outline-color: #fff;
        }
        
        .mobile-nav--container {
            z-index: 9999;
            top: 0;
            left: 0;
            right: 0;
            background: #fff;
            width: 100%;
            transform: translateZ(0);
            -moz-transform: translatez(0);
            -ms-transform: translatez(0);
            -o-transform: translatez(0);
            -webkit-transform: translateZ(0);
            -webkit-font-smoothing: antialiased
        }
        
        .mobile-nav--container #search-bar form.opened {
            position: absolute
        }
        
        #mobile-nav section {
            list-style: none
        }
        
        #mobile-nav section h3:focus {
            color: #ed3376;
        }
        
        #mobile-nav section .mobile-nav-arrow {
            height: 12px;
            position: absolute;
            right: 16px;
            transform: rotate(-90deg);
            transition: all 0.6s
        }
        
        #mobile-nav section .mobile-nav-account-arrow {
            width: 0;
            height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 8px solid #333;
            transition: all 0.6s
        }
        
        #mobile-nav section[expanded] .mobile-nav-arrow {
            transform: rotate(90deg)
        }
        
        #mobile-nav section[expanded] .mobile-nav-account-arrow {
            transform: rotate(180deg)
        }
        
        #mobile-nav>li>ul {
            max-height: 0;
            opacity: 0;
            transition: all 0.6s
        }
        
        #mobile-nav>li>ul>li>ul {
            max-height: 0;
            opacity: 0;
            transition: all 0.6s
        }
        
        #mobile-nav>li>ul>li.open-drawer>ul {
            max-height: 1000px;
            opacity: 1
        }
        
        #mobile-nav>li.open-drawer>ul {
            max-height: 1000px;
            opacity: 1
        }
      `}</style>
    </div>
  )
};

export default NavDrawer;
