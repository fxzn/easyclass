import Footerr from '../../components/footer/footer';
import NavigationBars from '../../components/navigation/NavigationBars';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faUser,
  faLock,
  faHistory,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  return (
    <>
      <NavigationBars />
      <section>
        <div className="container-profile">
          <div className="profileForm">
            <div className="akun-header">
              <h2>Akun</h2>
            </div>
            <div className="profileFormm">
              <div className="profileInfo">
                <Link to="/Akun">
                  <h1>
                    <FontAwesomeIcon icon={faUser} />
                    <span className="link-text">Profil Saya</span>
                  </h1>
                </Link>
                <hr />
                <Link to="/ChangePass">
                  <h1>
                    <FontAwesomeIcon icon={faLock} />
                    <span className="link-text">Ubah Password</span>
                  </h1>
                </Link>
                <hr />
                <Link to="/History">
                  <h1>
                    <FontAwesomeIcon icon={faHistory} />
                    <span className="link-text">Riwayat Pembayaran</span>
                  </h1>
                </Link>
                <hr />
                <Link to="/">
                  <h1>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span className="link-text">Logout</span>
                  </h1>
                </Link>
              </div>

              
            <div className="contactForm">
              
              <div className="formBox">
              <h2>Ubah Password</h2>
                <div className="inputBox w100">
                  <input type="password" name="oldPassword" id="oldPassword" required />
                  <label htmlFor="oldPassword">Masukkan Password Lama</label>
                </div>
                <div className="inputBox w100">
                  <input type="password" name="newPassword" id="newPassword" required />
                  <label htmlFor="newPassword">Masukkan Password Baru</label>
                </div>
                <div className="inputBox w100">
                  <input type="password" name="confirmPassword" id="confirmPassword" required />
                  <label htmlFor="confirmPassword">Ulangi Password Baru</label>
                </div>
          
                <div className="inputBox w100">
                  <input type="submit" value="Submit" />
                </div>
              </div>
            </div>
            </div>
           
          </div>
        </div>
      </section>

      <Footerr />
    </>
  );
};

export default UserProfile;