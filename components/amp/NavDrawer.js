import React from "react";
import Head from "next/head";

const sidebarMenuItems = [
  { label: 'Best Sellers', children: [ { label: 'View All', url: '' }, { label: 'New', url: '' }, { label: 'Best Sellers', url: '' }, { label: 'Award Winners', url: '' } ] },
  { label: 'Fruit Pigmented® Makeup', children: [] },
  { label: 'Skin Care', children: [] },
  { label: 'Hair & Body', children: [] },
  { label: 'Specials', children: [] },
  { label: 'Explore', children: [] },
];

export default function NavDrawer({ children }) {
  return (
    <div id="NavDrawer">
      <Head>
        <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>
        <script async custom-element="amp-accordion" src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"></script>
      </Head>

      <amp-sidebar id="mobile-nav" layout="nodisplay" side="left" className="p-t p-h">
        <div role="button" aria-label="close sidebar" on="tap:mobile-nav.toggle" tabIndex="0"
             className="close-sidebar">✕
        </div>
        <amp-accordion animate="" disable-session-states="">
          {sidebarMenuItems.map((item, index) => {
              return (
                <section key={index} className="b-b">
                  <h3 className="callout_text text-u-c p-v-md block p-l dorp-trigger-l1 pos-rlt">
                    {item.label}
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
        
        amp-sidebar section a {
          font: bold 12px/14px 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
          letter-spacing: 2px; 
        }
        
        amp-sidebar section h3:hover, 
        amp-sidebar section h3:focus {
          outline-color: #fff;
        }
      `}</style>
    </div>
  )
}
