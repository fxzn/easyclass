// ModalBeliCourse.jsx
import PropTypes from "prop-types"; // Import PropTypes
import { Modal, Button, Card } from "react-bootstrap";
import { faClock, faBook, faStar } from "@fortawesome/free-solid-svg-icons";
import imgcourse from "../../assets/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useNavigate } from "react-router-dom";
function ModalBeliCourse({ showModal, handleCloseModal,title }) {
  const navigate = useNavigate();

  const handlBuyClick = () => {
    navigate('/course/payment');
  }
  return (
    <Modal  show={showModal} onHide={handleCloseModal} closeButton centered>
      <Modal.Header className="justify-content-center"  >
        <div className="headermodal text-center">
          <p>Selangkah lagi menuju <p className="text-danger">kelas premium</p></p>
          
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="contentModal">
          <Card className="modalkotakcourse">
            <Card.Img className="img-card" variant="top" src={imgcourse} />
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div className="title ">{title}</div>
                <div className="rating d-flex ">
                  <FontAwesomeIcon icon={faStar} className="img text-warning me-1" />
                  <p>4.5</p>
                </div>
              </div>

              <Card.Text>
                <div className="desc mt-1 fw-bold">Belajar Web Designer dengan Figma </div>
                <div>by Angela Doe</div>
              </Card.Text>
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

             
            </Card.Body>
          </Card>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handlBuyClick}>Beli Sekarang</Button>
      </Modal.Footer>
    </Modal>
  );
}

// Add prop types validation
ModalBeliCourse.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

export default ModalBeliCourse;
