import Head from 'next/head'
import NavDrawer from "./NavDrawer";
import Logo from "./Logo";

export default function Header({ children }) {
  return (
    <>
      <Head></Head>
      <div className="mobile-nav--container is-moved-by-drawer">
        <div id="MobileMenu">
          <div className="grid--full no-m-v-gutter text-center">
            <div className="grid__item one-sixth" >
              <div className="site-nav--mobile">
                <a href="#" className="nav-open site-nav__link js-drawer-open-left"
                   aria-controls="NavDrawer" aria-expanded="false" role="button" on="tap:mobile-nav.toggle" >
                  <div className="inner"></div>
                  <span className="off-screen icon-fallback-text">Mobile Menu</span>
                </a>
              </div>
            </div>
            <div className="grid__item one-sixth site-nav--mobile"></div>
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
        
      `}</style>
    </>
  )
}
