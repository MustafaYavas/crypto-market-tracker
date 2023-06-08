import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={`row ${styles.footer}`}>
      <div className="col-12 col-lg-4">
        <p className="text-light fs-4 fw-bolder mb-2">About Us</p>
        <p className="pe-md-5" style={{ color: 'var(--text-secondary)' }}>
          CryptoX is a platform that shares instant market data with its users.
        </p>
      </div>

      <div className="col-12 col-lg-4 my-4 my-lg-0">
        <p className="text-light fs-4 fw-bolder mb-2">Connect With Me</p>
        <div className="d-flex align-items-center gap-3">
          <NavLink
            to="https://www.linkedin.com/in/mustafa-yava%C5%9F-936431199/"
            target="_blank"
            className={styles['connect-box']}
          >
            <Icon name="FaLinkedin" size={24} color="#1ba1e9" />
          </NavLink>
          <NavLink
            to="https://github.com/MustafaYavas"
            target="_blank"
            className={styles['connect-box']}
          >
            <Icon name="AiFillGithub" size={24} color="#1ba1e9" />
          </NavLink>
        </div>
      </div>

      <div className="col-12 col-lg-4">
        <p className="text-light fs-4 fw-bolder mb-2">Contact Me</p>
        <NavLink
          to="mailto:mustafayavas40@gmail.com"
          className={`d-flex align-items-center gap-3 text-decoration-none ${styles['contact-text']}`}
        >
          <Icon name="MdMail" size={24} color="#1ba1e9" />
          <span
            className="d-none d-md-inline"
            style={{ color: 'var(--text-secondary)' }}
          >
            mustafayavas40@gmail.com
          </span>
          <span
            className="d-inline d-md-none"
            style={{ color: 'var(--text-secondary)' }}
          >
            Send a Mail
          </span>
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
