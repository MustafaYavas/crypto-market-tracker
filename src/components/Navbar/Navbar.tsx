import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Menu from '../Menu/Menu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);

  return (
    <nav
      style={{
        backgroundColor: isScrolled ? 'rgba(7, 16, 32, .7)' : 'transparent',
        transition: '.25s ease-in-out',
      }}
      className="navbar text-light"
    >
      <div className="d-flex justify-content-between align-items-center h-100 w-100 base-container">
        <NavLink
          to="/"
          className="d-flex justify-content-start align-items-center gap-3 text-light text-decoration-none"
        >
          <img src="/images/site-logo.png" className="navbar-logo" alt="logo" />
          <h1 className="mb-0 fs-3 fs-md-2 font-semibold">CryptoX</h1>
        </NavLink>

        <div className="d-none d-md-flex justify-content-start align-items-center gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `navbar-link ${isActive ? 'navbar-link-active' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/prices"
            className={({ isActive }) =>
              `navbar-link ${isActive ? 'navbar-link-active' : ''}`
            }
          >
            Prices
          </NavLink>
        </div>

        <div className="d-md-none">
          <Menu
            items={['Home', 'Prices']}
            links={['/', '/prices']}
            type="link"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
