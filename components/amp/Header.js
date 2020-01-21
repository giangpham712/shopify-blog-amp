import Head from 'next/head'
import NavDrawer from "./NavDrawer";
import Logo from "./Logo";

export default function Header({ children }) {
  return (
    <>
      <Head></Head>
      <div className="mobile-nav--container is-moved-by-drawer">
        <div id="MobileMenu">
          <div className="grid--full no-m-v-gutter">
            <div className="grid__item one-sixth" >
              <div className="site-nav--mobile">
                <a href="#" className="nav-open site-nav__link js-drawer-open-left"
                   aria-controls="NavDrawer" aria-expanded="false" role="button" on="tap:mobile-nav.toggle" >
                  <div className="inner"></div>
                  <span className="off-screen icon-fallback-text">Mobile Menu</span>
                </a>
              </div>
            </div>
            <div className="grid__item one-sixth site-nav--mobile">&nbsp;</div>
            <div className="grid__item two-sixths site-nav--mobile p-t-sm">
              <a href="/">
                <Logo/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <NavDrawer />
      {children}
      <style jsx global>{`
        #MobileMenu {
          border-bottom: 1px solid #d4d4d4;
          text-align: center;
          background: #fff;
          width: 100%
        }
        
        #MobileMenu .site-nav--mobile .icon-fallback-text .icon {
          font-size: 1.7rem;
          position: relative;
          top: 16px;
          color: #4d4d4d
        }
        
        #MobileMenu .grid__item {
          padding-right: 0
        }
        
        #MobileMenu .nav-open {
          width: 32px;
          height: 30px;
          top: 32px;
          right: -22px;
          transform: translate(0, 50%)
        }
        
        #MobileMenu .nav-open .inner,
        #MobileMenu .nav-open .inner::before,
        #MobileMenu .nav-open .inner::after {
          background-color: #4d4d4d;
          content: "";
          display: block;
          height: 2px;
          width: 21px
        }
        
        #MobileMenu .nav-open .inner {
          left: 50%;
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%)
        }
        
        #MobileMenu .nav-open .inner::before {
          margin-top: -7px;
          position: absolute
        }
        
        #MobileMenu .nav-open .inner::after {
          margin-top: 7px;
          position: absolute
        }
        
        #MobileMenu .nav-open.nav-close .inner {
          background-color: transparent;
          left: 54%
        }
        
        #MobileMenu .nav-open.nav-close .inner::before,
        #MobileMenu .nav-open.nav-close .inner::after {
          transform: rotate(45deg);
          transform-origin: 0 50%;
          width: 21px
        }
        
        #MobileMenu .nav-open.nav-close .inner::after {
          transform: rotate(-45deg)
        }
      `}</style>
    </>
  )
}
