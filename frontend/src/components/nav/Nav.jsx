import './nav.scss'
import NavLogo from "../../assets/Images/logo.svg"
import KiteLogo from "../../assets/Images/kite-logo.svg";
import ConsoleLogo from "../../assets/Images/console-logo.svg"
import KiteConnectLogo from "../../assets/Images/kite-connect-logo.svg"
import CoinLogo from "../../assets/Images/coin-logo.svg"
import VarsityLogo from "../../assets/Images/varsity-logo.png"
import TqnaLogo from "../../assets/Images/tqna-logo.png"
import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const sideBarRef = useRef(null);
  const menuButtonRef = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if (sideBarRef.current.contains(event.target)) {
      return
    }

    if (menuButtonRef.current.contains(event.target)) {
      return
    }

    setNavMenuOpen(false);
  }, [])

  useEffect(() => {
    if (navMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }

  }, [navMenuOpen]);



  return (
    <section className='nav-section'>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src={NavLogo} alt="Zerodha logo" />
          </Link>
        </div>
        <div className="nav-route-links">
          <ul>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
          </ul>
          <div ref={menuButtonRef} onClick={() => setNavMenuOpen(!navMenuOpen)} className={`nav-menu ${navMenuOpen ? 'openMenu' : ''}`} >
            <span></span>
            <span ></span>
            <span></span>
          </div>
        </div>
        <div ref={sideBarRef} className={`nav-side-bar ${navMenuOpen ? 'openNavSideBar' : ''}`}>
          <ul className="open-on-small">
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
          </ul>
          <div className="product-list">
            <div className="product-name">
              <img src={KiteLogo} alt="" />
              <span>Kite</span>
              <p>Trading Platform</p>
            </div>
            <div className="product-name">
              <img src={ConsoleLogo} alt="" />
              <span>Console</span>
              <p>Backoffice</p>
            </div>
            <div className="product-name">
              <img src={KiteConnectLogo} alt="" />
              <span>Kite Connect</span>
              <p>Trading APIs</p>
            </div>
            <div className="product-name">
              <img src={CoinLogo} alt="" />
              <span>Coin</span>
              <p>Mutual funds</p>
            </div>
            <div className="product-name">
              <img src={VarsityLogo} alt="" />
              <span>Varsity</span>
            </div>
            <div className="product-name">
              <img src={TqnaLogo} alt="" />
              <span>Trading Q&A</span>
            </div>
          </div>

          <div className="footer-menu">
            <div className="footer-menu-container">
              <div className="utilities">
                <p>Utilites</p>
                <ul>
                  <li>Calculators</li>
                  <li>Brokerage calculator</li>
                  <li>Margin calculator</li>
                  <li>SIP calculator</li>
                </ul>
              </div>
              <div className="updates">
                <p>Updates</p>
                <ul>
                  <li>Z-Connect blog</li>
                  <li>Circulars / Bulletin</li>
                  <li>IPOs</li>
                  <li>Markets</li>
                </ul>
              </div>
            </div>
            <div className="educaton">
              <p>Education</p>

              <div className="product-list">
                <div className="product-name">
                  <img src={VarsityLogo} alt="" />
                  <span>Varsity</span>
                </div>
                <div className="product-name">
                  <img src={TqnaLogo} alt="" />
                  <span>Trading Q&A</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nav
