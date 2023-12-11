import NavigationBars from '../../components/navigation/NavigationBars';
import { useState } from 'react';
import Bars from './Bar';
import './Akun.css';
import Footerr from "../../components/footer/Footerr";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Akun = () => {
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
      <div className="nav1">
        <NavigationBars />
      </div>
      <section className="akunPage">
        <div className="container-profile">
          <div className="profileForm">
            <div className="akun-header">
              <h2>Akun</h2>
            </div>

            <div className="profileFormm">
              <span className="arrow1">
                <Link to="/Bar">
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{ fontSize: '24px', color: '#151515' }}
                  />
                </Link>
              </span>
              <div className="bar">
                <Bars />
              </div>

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
                <div id="tomb1" className="inputBox w100">
                  <input type="submit" defaultValue="Submit" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="foot1">
      <Footerr/>
      </div>
    </>
  );
};

export default Akun;
