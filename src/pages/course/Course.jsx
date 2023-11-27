import "./courses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, Button, Card, Col, Container, Form, Nav, NavDropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faBell, faUser, faLock, faHistory, faSignOutAlt, faSearch, faClock, faBook, faStar } from "@fortawesome/free-solid-svg-icons";
import imgcourse from "../../assets/image.png";
import Footerr from "../../components/footer/footer";

function Course() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-danger py-3">
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            easyclass
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="sidebar offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                easyclass
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <div className="navbar-nav me-auto mb-lg-0 search ms-5 p-3">
                <input type="text" />
                <div className="iconsearh m-1 text-danger">
                  <FontAwesomeIcon icon={faSearch} />
                </div>
              </div>
              <div className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                <Link to="/notifikasi" className="notif-bell me-5">
                  <FontAwesomeIcon className="text-white" icon={faBell} />
                </Link>
                {/* profile */}
                <Nav className="profill">
                  <NavDropdown title={<FontAwesomeIcon className="text-white" icon={faUser} />} id="basic-nav-dropdown" >
                    <NavDropdown.Item href="/akun">
                      <FontAwesomeIcon icon={faUser} /> Profil Saya
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/ChangePass">
                      <FontAwesomeIcon icon={faLock} /> Ubah Password
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/History">
                      <FontAwesomeIcon icon={faHistory} /> History Pembayaran
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/">
                      <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Container className="mt-5">
        <Row>
          <Col md={3}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item className="accordion-item">
                <Accordion.Header className="accordion-header text-white fw-bold">Topik Kelas</Accordion.Header>
                <Accordion.Body className="jutify-content-center">
                  <div>
                    <p className="fw-bold">Filter</p>
                    <Form className="mt-2">
                      <Form.Check inline label="Paling Baru" name="group1" id="checkbox1" className="mt-2" />
                      <Form.Check inline label="Paling Populer " name="group1" id="checkbox1" className="mt-2" />
                      <Form.Check inline label="Promo" name="group1" id="checkbox1" className="mt-2" />

                      {/* Add more Form.Check as needed */}
                    </Form>
                  </div>
                  <div className="mt-4">
                    <p className="fw-bold">Kategory</p>
                    <Form className="mt-2">
                      <Form.Check inline label="UI/UX Design" name="group1" id="checkbox1" className="mt-2" />
                      <Form.Check inline label="Android Development" name="group1" id="checkbox1" className="mt-2" />
                      <Form.Check inline label="Data Science" name="group1" id="checkbox1" className="mt-2" />
                      <Form.Check inline label="Business Intelligence" name="group1" id="checkbox1" className="mt-2" />
                      {/* Add more Form.Check as needed */}
                    </Form>
                  </div>
                  <div className="mt-4">
                    <p className="fw-bold">Level Kesulitan</p>
                    <Form className="mt-1">
                      <Form.Check inline label="Semua Level" name="group1" id="checkbox1" className="mt-2" />
                      <Form.Check inline label="Beginner Level" name="group1" id="checkbox1" className="mt-2" />
                      <Form.Check inline label="Intermediate Level" name="group1" id="checkbox1" className="mt-2" />
                      <Form.Check inline label="Advanced Level" name="group1" id="checkbox1" className="mt-2" />

                      {/* Add more Form.Check as needed */}
                    </Form>
                  </div>
                  <Button variant="white" className="text-danger mt-4 w-100">
                    Hapus Filter
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col md={9}>
            <div className="d-flex justify-content-end">
              {" "}
              {/* Tambahkan d-flex dan justify-content-end di sini */}
              <div className="search d-flex p-3">
                <input type="text" />
                <div className="iconsearh m-1 text-danger">
                  <FontAwesomeIcon icon={faSearch} />
                </div>
              </div>
            </div>

            <Row className="mt-1">
              <Col md={4}>
                <Button variant="danger" className="w-100 mt-3">
                  All
                </Button>
              </Col>
              <Col md={4}>
                <Button variant="danger" className="w-100 mt-3">
                  Kelas premium
                </Button>
              </Col>
              <Col md={4}>
                <Button variant="danger" className="w-100 mt-3">
                  Kelas gratis
                </Button>
              </Col>
            </Row>

            {/* Card */}
            <Row className="mt-4">
              <Col md={6} className="d-flex justify-content-center mt-3">
                <Card className="kotakcourse">
                  <Card.Img variant="top" src={imgcourse} />
                  <Card.Body>
                    <div className="title mt-2">UI/UX Design</div>

                    <Card.Text className="desc mt-3">Belajar Web Designer dengan Figma by Angela Doe</Card.Text>
                    <div className="d-flex infocourse">
                      <div className="level me-4 d-flex">
                        <div>
                          <FontAwesomeIcon icon={faStar} className="img" />
                        </div>
                        <p className="ms-1 mt-1"> Intermediate Level</p>
                      </div>
                      <div className="level me-4 d-flex">
                        <div>
                          <FontAwesomeIcon icon={faBook} className="img" />
                        </div>
                        <p className="ms-1 mt-1">10 modul</p>
                      </div>
                      <div className="level me-4 d-flex">
                        <div>
                          <FontAwesomeIcon icon={faClock} className="img" />
                        </div>
                        <p className="ms-1 mt-1">120 menit</p>
                      </div>
                    </div>

                    <Button variant="danger">Premium</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} className="d-flex justify-content-center mt-3">
                <Card className="kotakcourse">
                  <Card.Img variant="top" src={imgcourse} />
                  <Card.Body>
                    <div className="title mt-2">UI/UX Design</div>

                    <Card.Text className="desc mt-3">Belajar Web Designer dengan Figma by Angela Doe</Card.Text>
                    <div className="d-flex infocourse">
                      <div className="level me-4 d-flex">
                        <div>
                          <FontAwesomeIcon icon={faStar} className="img" />
                        </div>
                        <p className="ms-1 mt-1"> Intermediate Level</p>
                      </div>
                      <div className="level me-4 d-flex">
                        <div>
                          <FontAwesomeIcon icon={faBook} className="img" />
                        </div>
                        <p className="ms-1 mt-1">10 modul</p>
                      </div>
                      <div className="level me-4 d-flex">
                        <div>
                          <FontAwesomeIcon icon={faClock} className="img" />
                        </div>
                        <p className="ms-1 mt-1">120 menit</p>
                      </div>
                    </div>

                    <Button variant="danger">Premium</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="d-flex justify-content-center mt-3">
                <Card className="kotakcourse">
                  <Card.Img variant="top" src={imgcourse} />
                  <Card.Body>
                    <div className="title mt-2">UI/UX Design</div>

                    <Card.Text className="desc mt-3">Belajar Web Designer dengan Figma by Angela Doe</Card.Text>
                    <div className="d-flex infocourse">
                      <div className="level me-4 d-flex">
                        <div>
                          <FontAwesomeIcon icon={faStar} className="img" />
                        </div>
                        <p className="ms-1 mt-1"> Intermediate Level</p>
                      </div>
                      <div className="level me-4 d-flex">
                        <div>
                          <FontAwesomeIcon icon={faBook} className="img" />
                        </div>
                        <p className="ms-1 mt-1">10 modul</p>
                      </div>
                      <div className="level me-4 d-flex">
                        <div>
                          <FontAwesomeIcon icon={faClock} className="img" />
                        </div>
                        <p className="ms-1 mt-1">120 menit</p>
                      </div>
                    </div>

                    <Button variant="danger">Premium</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="d-flex justify-content-center mt-3">
                <Card className="kotakcourse">
                  <Card.Img variant="top" src={imgcourse} />
                  <Card.Body>
                    <div className="title mt-2">UI/UX Design</div>

                    <Card.Text className="desc mt-3">Belajar Web Designer dengan Figma by Angela Doe</Card.Text>
                    <div className="d-flex infocourse">
                      <div className="level me-4 d-flex">
                        <div>
                          <FontAwesomeIcon icon={faStar} className="img" />
                        </div>
                        <p className="ms-1 mt-1"> Intermediate Level</p>
                      </div>
                      <div className="level me-4 d-flex">
                        <div>
                          <FontAwesomeIcon icon={faBook} className="img" />
                        </div>
                        <p className="ms-1 mt-1">10 modul</p>
                      </div>
                      <div className="level me-4 d-flex">
                        <div>
                          <FontAwesomeIcon icon={faClock} className="img" />
                        </div>
                        <p className="ms-1 mt-1">120 menit</p>
                      </div>
                    </div>

                    <Button variant="danger">Premium</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
     <Footerr></Footerr>
    </>
  );
}

export default Course;
