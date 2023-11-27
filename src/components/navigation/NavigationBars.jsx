import './Navigation.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faUser,
  faLock,
  faHistory,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import {  Nav, NavDropdown } from 'react-bootstrap';

function NavigationBars() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.pageYOffset > 0) {
      nav.classList.add('drop-shadow');
    } else {
      nav.classList.remove('drop-shadow');
    }
  });

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white py-3">
        <div className="container px-2">
          <Link to="/" className="navbar-brand">
            <span className="fw-bolder text-dark">easyclass</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="navbarSupportedContent"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                easyclass
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 small fw-bolder">
                <li className="nav-item">
                  <Link to="/" className="nav-link mx-3" href="index.html">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                <Link to="/course" className="nav-link mx-3" href="index.html">
                    Course
                  </Link>
                  
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className="nav-link mx-3"
                    href="projects.html"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className="nav-link mx-3"
                    href="contact.html"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="d-flex">
                {isLoggedIn ? (
                  <button className="btn btn-navbar" onClick={handleLogout}>
                    Logout
                  </button>
                ) : (
                  <>
                    <Link to="/notifikasi" className="notif-bell">
                      <FontAwesomeIcon icon={faBell} />
                    </Link>
                    {/* profile */}
                    <Nav className="profil">
                      <NavDropdown
                        title={<FontAwesomeIcon icon={faUser} />}
                        id="basic-nav-dropdown"
                      >
                        <NavDropdown.Item href="/akun">
                          <FontAwesomeIcon icon={faUser}  className="icon" /> Profil Saya
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/ChangePass">
                          <FontAwesomeIcon icon={faLock}  className="icon" /> Ubah Password
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/History">
                          <FontAwesomeIcon icon={faHistory} className="icon" /> History
                          Pembayaran
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          <FontAwesomeIcon icon={faSignOutAlt} className="icon" /> Log Out
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <Link to="/auth/login" className="btn btn-navbar">
                      Login
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBars;
