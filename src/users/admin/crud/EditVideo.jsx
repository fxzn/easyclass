import axios from "axios";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function EditVideo(props) {
  const { showModal, handleCloseModal, code } = props;

  const [videoData, setVideoData] = useState({
    title: "",
    code: "",
    link: "",
    isPremium: true,
    description: "",
  });

  const getCourseByCode = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/admin/subject/get?code=${code}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setVideoData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideoData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    axios
      .put(`${import.meta.env.VITE_BASE_URL}/api/admin/subject/update/${code}`, videoData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        alert("Data kelas berhasil diperbarui:", response.data);
        handleCloseModal();
      })
      .catch((error) => {
        console.log("Terjadi kesalahan saat memperbarui kelas:", error);

        if (error.response) {
          console.log("Data respons error:", error.response.data);
          console.log("Kode status HTTP:", error.response.status);
        } else if (error.request) {
          console.log("Tidak ada respons yang diterima:", error.request);
        } else {
          console.log("Kesalahan lainnya:", error.message);
        }
      });
  };

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal} onShow={getCourseByCode}>
        <Modal.Header closeButton>
          <Modal.Title className="font-Montserrat text-[24px] font-bold leading-[36px] text-darkblue-05">Update Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="titleCourse">
              <Form.Label>Title Video</Form.Label>
              <Form.Control type="text" name="titleCourse" value={videoData.title} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="codeCourse">
              <Form.Label>Code Course</Form.Label>
              <Form.Control type="text" name="codeCourse" value={videoData.code} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="duration">
              <Form.Label>Link</Form.Label>
              <Form.Control type="text" name="duration" value={videoData.link} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="module">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="module" value={videoData.description} onChange={handleChange} />
            </Form.Group>

            
            <Form.Group controlId="isPremium">
              <Form.Label>Is Premium</Form.Label>
              <Form.Control type="text" name="isPremium" value={videoData.isPremium} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleSaveClick}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditVideo;
