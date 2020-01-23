import React from "react";
import Head from "next/head";

const sidebarMenuItems = [
  { label: 'Best Sellers', children: [ { label: 'View All', url: '' }, { label: 'New', url: '' }, { label: 'Best Sellers', url: '' }, { label: 'Award Winners', url: '' } ] },
  { label: 'Fruit Pigmented® Makeup', children: [ { label: 'View All', url: '' }, { label: 'Face', url: '' }, { label: 'Eye', url: '' } ] },
  { label: 'Skin Care', children: [] },
  { label: 'Hair & Body', children: [] },
  { label: 'Specials', children: [] },
  { label: 'Explore', children: [] },
];

export default function NavDrawer({ children }) {
  return (
    <div id={"NavDrawer"}>
      <Head>
        <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>
        <script async custom-element="amp-accordion" src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"></script>
      </Head>

      <amp-sidebar id="mobile-nav" layout="nodisplay" side="left" className="p-t p-h">
        <button on="tap:mobile-nav.close" tabIndex="0" className="close-sidebar">✕</button>
        <amp-accordion animate="" disable-session-states="">
          {sidebarMenuItems.map((item, index) => {
            return (
              <section key={index} className="b-b">
                <h3 className="callout_text text-u-c p-v-md block p-l dorp-trigger-l1 pos-rlt">
                  {item.label}
                  <svg xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 100 100" version="1.1" className="mobile-nav-arrow"
                       style={{fill: "#333333"}}>
                    <title>Arrow</title>
                    <path
                      d="M75.1381537,0.977907097 C73.1518375,-1.18705996 71.1513372,0.561802247 68.5006408,3.11952341 L25.5001802,46.7154203 C23.4999399,48.7786289 23.4999399,52.1115044 25.5001802,54.1747131 L66.3985766,96.5939141 C68.911699,99.1861506 70.3551659,101.445471 72.8682883,98.8532345 C75.3814107,96.260998 73.2456257,94.8096508 70.7325033,92.2174143 L30.2031971,50.4450667 L72.8682883,7.60666778 C75.387313,4.97536461 77.1244698,3.14287415 75.1381537,0.977907097 Z"/>
                  </svg>
                </h3>
                <div className="o-f-hid no-margin-v m-h-sm">
                  {item.children.map((child, idx) => {
                    return <h3 key={idx}><a className="p-v-sm m-b-sm block p-l callout_text text-u-c">{child.label}</a></h3>
                  })}
                </div>
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
            position: fixed;
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
}
