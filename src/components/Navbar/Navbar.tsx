import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import Dropdown from '../Dropdown/Dropdown';

const Navbar = () => {
  const navigate = useNavigate();
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
          className="d-flex justify-content-start align-items-center gap-3 navbar-link"
        >
          <img src="/images/site-logo.png" className="navbar-logo" alt="logo" />
          <h1 className="mb-0 fs-3 fs-md-2 font-semibold">CryptoX</h1>
        </NavLink>

        <div className="d-none d-md-flex justify-content-start align-items-center gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'navbar-link-active' : 'navbar-link'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/prices"
            className={({ isActive }) =>
              isActive ? 'navbar-link-active' : 'navbar-link'
            }
          >
            Prices
          </NavLink>
        </div>

        <div className="d-md-none">
          <Dropdown
            items={['Home', 'Dashboard']}
            links={['/', '/ashboard']}
            type="link"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
