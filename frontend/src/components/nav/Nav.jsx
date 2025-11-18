import './nav.scss'
import { NavLogo, KiteLogo, ConsoleLogo, KiteConnectLogo, CoinLogo, VarsityLogo, TqnaLogo } from './navLogos';
import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom';
import { navLinks } from '../../data/navLinks';
import { products } from '../../data/productName';

const Nav = () => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const sideBarRef = useRef(null);
  const menuButtonRef = useRef(null);

  // const handleClickOutside = useCallback((event) => {
  //   if (sideBarRef.current.contains(event.target)) {
  //     return
  //   }

  //   if (menuButtonRef.current.contains(event.target)) {
  //     return
  //   }

  //   setNavMenuOpen(false);
  // }, [])

  // useEffect(() => {
  //   if (navMenuOpen) {
  //     document.addEventListener('mousedown', handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   }

  // }, [navMenuOpen]);

  // useEffect(() => {
  //   if (!navMenuOpen) return;

  //   const handler = (event) => {
  //     if (
  //       sideBarRef.current &&
  //       !sideBarRef.current.contains(event.target) &&
  //       !menuButtonRef.current.contains(event.target)
  //     ) {
  //       setNavMenuOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handler);
  //   return () => document.removeEventListener("mousedown", handler);

  // }, [navMenuOpen]);


  useEffect(() => {
    if (!navMenuOpen) return;

    const onPointerDown = (event) => {
      const sidebar = sideBarRef.current;
      const button = menuButtonRef.current;

      if (!sidebar || !button) return

      if (!sidebar.contains(event.target) && !button.contains(event.target)) {
        setNavMenuOpen(false);
      }
    }

    document.addEventListener('pointerdown', onPointerDown);

    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
    }
  }, [navMenuOpen]);

  return (
    <section className='nav'>
      <div className="nav_container">
        <div className="nav_logo">
          <Link to="/">
            <img src={NavLogo} alt="Zerodha logo" />
          </Link>
        </div>
        <div className="nav_route-links">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}

          </ul>
          <div ref={menuButtonRef} onClick={() => setNavMenuOpen(!navMenuOpen)} className={`nav_menu ${navMenuOpen ? 'openMenu' : ''}`} >
            <span></span>
            <span ></span>
            <span></span>
          </div>
        </div>
        <div ref={sideBarRef} className={`nav_sidebar ${navMenuOpen ? 'openNavSideBar' : ''}`}>
          <ul className="open-on-small">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <div className="nav_product-list">
            {products.map((product) => (
              <div key={product.name} className="nav_product-item">
                <img src={product.img} loading='lazy' alt={product.name + "Logo"} />
                <span>{product.name}</span>
                <p>{product.desc}</p>
              </div>
            ))}
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

              <div className="nav_product-list">
                <div className="nav_product-item">
                  <img src={VarsityLogo} alt="" />
                  <span>Varsity</span>
                </div>
                <div className="nav_product-item">
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
