export default function Footer({ children }) {
  return (
    <>
      <section id="Footer">
        <footer className="site-footer">
          <div className="wrapper m-t-xlg">
            <div className="grid__item">
              <div className="grid">
                <div className="grid__item one-half m-b-md">
                  <h3>company</h3>
                  <ul>
                    <li><a href={"/pages/about-us"} title="">About 100% PURE®</a></li>
                    <li><a href={"/pages/philanthropy"} title="">Philanthropy</a></li>
                    <li><a href={"/pages/careers"} title="">Careers</a></li>
                    <li><a href={"/pages/press"} title="">Press</a></li>
                    <li><a href={"/pages/store-locations"} title="">Store Locations</a></li>
                    <li><a href="https://wus.100percentpure.com/" title="">Wholesale US</a></li>
                    <li><a href="https://wca.100percentpure.com/" title="">Wholesale CA</a></li>
                    <li><a href="https://www.100percentpure.com/blogs/feed#cover" title="">Our Blog</a></li>
                  </ul>
                </div>
                <div className="grid__item one-half m-b-md">
                  <h3>information</h3>
                  <ul>
                    <li><a rel="nofollow" href="https://100percentpure.returnly.com/" title="">Start a Return</a></li>
                    <li><a href="https://support.100percentpure.com/" title="">Contact Us</a></li>
                    <li><a href={"/pages/affiliates"} title="">Affiliate Program</a></li>
                    <li><a href="/pages/shipping-faq" title="">Shipping FAQ</a></li>
                    <li><a href="/pages/afterpay" title="">Afterpay FAQ</a></li>
                    <li><a href="/pages/purist-perks" title="">Purist Perks</a></li>
                    <li><a href="/pages/purist-pro" title="">Purist Pro</a></li>
                    <li><a href="https://www.100percentpure.com/pages/share?traffic_source=site_footer" title="">Refer a Friend</a></li>
                  </ul>
                </div>
                <div className="grid__item one-half m-b-md">
                  <h3>featured</h3>
                  <ul>
                    <li><a href={"/collections/new"} title="">New Products</a></li>
                    <li><a href={"/collections/best-sellers"} title="">Best Sellers</a></li>
                    <li><a href={"/products/online-gift-card"} title="">Online Gift Card</a></li>
                    <li><a href={"/pages/student-discount"} title="">Student Discount</a></li>
                  </ul>
                </div>
                <div className="grid__item small--one-half medium--one-third large--one-quarter m-b-md">
                  <h3>Subscribe</h3>
                </div>
              </div>
            </div>

          </div>
          <div id="site-selection" className="text-center m-t-lg p-v-sm">
            <ul className="no-margin">
              <li><a target="_blank" href="https://www.100purity.cn/">中国</a></li>
              <li><a target="_blank" href="https://www.nourishedlife.com.au/">Australia</a></li>
              <li><a target="_blank" href="https://www.100percentpure.de/">Germany</a></li>
            </ul>
          </div>
          <div className="text-center text-xs p-b-lg m-b-md">
            <span>
              <a href={"/pages/legal-terms-conditions"}>Terms &amp; Condition</a>
            </span>
            <span> | </span>
            <span>
              <a href={"/pages/privacy-policy"}>Privacy Policy</a>
            </span>
            <span> | </span>
            <span>© 2020 100% PURE<sup>®</sup></span>
            <p className="m-v-lg text-sm">
              If you are using a screen reader and are having problems using this website, please call <a className="thin-u-l" href="tel:18447873100">+1 (844) 787-3100</a> for assistance.
            </p>
          </div>
        </footer>
      </section>
      <style jsx global>{`
        #Footer .site-footer ul {
          margin: 0;
        }
        
        #Footer h1,
        #Footer .h1 {
            font-size: 18px;
            line-height: 25px;
            font-weight: 400;
            width: 70%;
            margin: auto
        }
        
        #Footer h1>a,
        #Footer .h1>a {
            text-decoration: underline
        }
        
        #Footer h3,
        #Footer .h3 {
            text-transform: uppercase;
            letter-spacing: 0.2em;
            font-family: "Avenir Next Demi", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-size: 12px;
            font-weight: 400;
            margin-bottom: 1.5rem
        }
        
        #Footer .site-footer ul {
            list-style-type: none
        }
        
        #Footer .site-footer ul li {
            font-size: 14px;
            margin-bottom: 0.75em
        }
        
        #Footer .site-footer .large--one-quarter ul {
            margin: 0
        }
        
        #Footer .site-footer #social-icon-block .fzSpET.fzSpET {
            flex-direction: column
        }
        
        #Footer .site-footer #social-icon-block .jGdRFY.jGdRFY,
        #Footer .site-footer #social-icon-block .iWqZrV.iWqZrV,
        #Footer .site-footer #social-icon-block .hlBEKn.hlBEKn {
            padding-left: 0;
            padding-top: 0
        }
        
        #Footer .site-footer #social-icon-block input[type=email] {
            border: 0;
            outline: 0;
            border: 1px solid #444;
            border-radius: 0;
            padding: 0 8px
        }
        
        #Footer .site-footer #social-icon-block button {
            width: 100%
        }
        
        #Footer .site-footer #social-icon-block ul li {
            display: inline-block;
            padding: 0 10px 0 0;
            font-size: 20px
        }
        
        #Footer .site-footer #social-icon-block .input-group-btn {
            width: 0
        }
        
        #Footer .site-footer #site-selection ul li {
            display: inline;
            padding: 0 6px;
            border-right: 1px solid #747474
        }
        
        #Footer .site-footer #site-selection ul li:last-child {
            border-right: none
        }
      `}</style>
      </>
  )
}
