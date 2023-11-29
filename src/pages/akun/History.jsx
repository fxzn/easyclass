import Footerr from '../../components/footer/footer';
import NavigationBars from '../../components/navigation/NavigationBars';
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faUser,
  faLock,
  faHistory,
  faSignOutAlt,
  faSearch,
  faClock,
  faBook,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import imgcourse from '../../assets/image.png';

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

              {/* card */}

              <Row className="kard">
                <h2>Riwayat Pembayaran</h2>
                <Col md={12} className="d-flex justify-content-center mt-3">
                  <Card
                    className="cardkursus"
                    style={{ width: '400px', height: '180px' }}
                  >
                    <Card.Img
                      variant="top"
                      src={imgcourse}
                      style={{ height: '80px' }}
                    />
                    <Card.Body>
                      <div className="title mt-0">UI/UX Design</div>

                      <Card.Text className="desc mt-0">
                        Belajar Web Designer dengan Figma by Angela Doe
                      </Card.Text>
                      <div
                        className="d-flex infocourse"
                        style={{ margin: '-8px 0' }}
                      >
                        <div className="level me-4 d-flex">
                          <div>
                            <FontAwesomeIcon icon={faStar} className="img" />
                          </div>
                          <p className="ms-1 mt-0"> Intermediate Level</p>
                        </div>
                        <div className="level me-4 d-flex">
                          <div>
                            <FontAwesomeIcon icon={faBook} className="img" />
                          </div>
                          <p className="ms-1 mt-0">10 modul</p>
                        </div>
                        <div className="level me-4 d-flex">
                          <div>
                            <FontAwesomeIcon icon={faClock} className="img" />
                          </div>
                          <p className="ms-1 mt-0">120 menit</p>
                        </div>
                      </div>

                      <Button
                        variant="danger"
                        style={{ height: '18px', fontSize: '10px' }}
                        className="d-flex align-items-center justify-content-center"
                      >
                        Premium
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={12} className="d-flex justify-content-center mt-3">
                  <Card
                    className="cardkursus"
                    style={{ width: '400px', height: '180px' }}
                  >
                    <Card.Img
                      variant="top"
                      src={imgcourse}
                      style={{ height: '80px' }}
                    />
                    <Card.Body>
                      <div className="title mt-0">UI/UX Design</div>

                      <Card.Text className="desc mt-0">
                        Belajar Web Designer dengan Figma by Angela Doe
                      </Card.Text>
                      <div
                        className="d-flex infocourse"
                        style={{ margin: '-8px 0' }}
                      >
                        <div className="level me-4 d-flex">
                          <div>
                            <FontAwesomeIcon icon={faStar} className="img" />
                          </div>
                          <p className="ms-1 mt-0"> Intermediate Level</p>
                        </div>
                        <div className="level me-4 d-flex">
                          <div>
                            <FontAwesomeIcon icon={faBook} className="img" />
                          </div>
                          <p className="ms-1 mt-0">10 modul</p>
                        </div>
                        <div className="level me-4 d-flex">
                          <div>
                            <FontAwesomeIcon icon={faClock} className="img" />
                          </div>
                          <p className="ms-1 mt-0">120 menit</p>
                        </div>
                      </div>

                      <Button
                        variant="danger"
                        style={{ height: '18px', fontSize: '10px' }}
                        className="d-flex align-items-center justify-content-center"
                      >
                        Premium
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>

      <Footerr />
    </>
  );
};

export default UserProfile;
