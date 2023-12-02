
import NavigationBars from '../../components/navigation/NavigationBars';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faLock,
  faHistory,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Akun.css';
import Footer from '../../components/footer/footer';

const UserProfile = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [imageSize, setImageSize] = useState(50);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageSizeChange = () => {
    const newSize = imageSize === 25 ? 50 : 25;
    setImageSize(newSize);
  };

  const handleProfileChange = () => {
    // This function can be extended to update the profile on the server
    console.log('Profile changed!');
  };

  const handleChooseFileClick = () => {
    // Trigger the file input click
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
      fileInput.click();
    }
  };

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
                 {/* prf */}
              <div className="profile-picture-container">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      style={{ display: 'none' }}
                    /> 

                    <div
                      className="profile-picture-button"
                      onClick={handleChooseFileClick}
                    >
                      {profilePicture && (
                        <div className="circular-profile-picture-container">
                          <img
                            src={profilePicture}
                            alt=""
                            className="circular-profile-picture"
                            style={{
                              width: `${imageSize}vw`, 
                              height: 'auto',
                            }}
                            onClick={handleImageSizeChange}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                       {/* prf end */}
                <div className="formBox">

                  <div className="inputBox w100">
                    <input type="text" name="" id="" required="" />
                    <span>Name</span>
                  </div>
                  <div className="inputBox w100">
                    <input type="email" name="" id="" required="" />
                    <span>Email</span>
                  </div>
                  <div className="inputBox w100">
                    <input type="text" name="" id="" required="" />
                    <span>Mobile Number</span>
                  </div>
                  <div className="inputBox w50">
                    <input type="text" name="" id="" required="" />
                    <span>Negara</span>
                  </div>
                  <div className="inputBox w50">
                    <input type="text" name="" id="" required="" />
                    <span>Kota</span>
                  </div>
                  <div className="inputBox w100">
                    <input type="submit" defaultValue="Submit" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default UserProfile;
