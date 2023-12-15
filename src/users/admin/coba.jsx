import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function AddData({ showModal, handleClose }) {
  const [formData, setFormData] = useState({
    id: "",
    titleCourse: "",
    categories: "",
    codeCourse: "",
    isPremium: false,
    priceCourse: 0,
    teacher: "",
    aboutCourse: "",
  });

  const [subjectData, setSubjectData] = useState({
    course: {
      id: "",
    },
    id: "",
    code: "",
    title: "",
    linkVideo: "",
    description: "",
    isPremium: false,
  });

  const handleCourseSubmit = async () => {
    try {
      const response = await axios.post(
        "https://easy-class-407401.et.r.appspot.com/api/admin/course/add",
        {
          id: formData.id,
          titleCourse: formData.titleCourse,
          categories: formData.categories,
          codeCourse: formData.codeCourse,
          isPremium: formData.isPremium,
          priceCourse: formData.priceCourse,
          teacher: formData.teacher,
          aboutCourse: formData.aboutCourse,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubjectSubmit = async () => {
    try {
      const response = await axios.post(
        "https://easy-class-407401.et.r.appspot.com/api/admin/subject/add",
        {
          id: subjectData.id,
          course: {
            id: formData.id,
          },
          code: subjectData.code,
          title: subjectData.title,
          linkVideo: subjectData.linkVideo,
          description: subjectData.description,
          isPremium: subjectData.isPremium,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="font-Montserrat text-[24px] font-bold leading-[36px] text-darkblue-05">Tambah Kelas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="titleCourse">
            <Form.Label>Title Course</Form.Label>
            <Form.Control type="text" name="titleCourse" value={formData.titleCourse} onChange={(e) => setFormData({ ...formData, titleCourse: e.target.value })} />
          </Form.Group>

          <Form.Group controlId="categories">
            <Form.Label>Categories</Form.Label>
            <Form.Control type="text" name="categories" value={formData.categories} onChange={(e) => setFormData({ ...formData, categories: e.target.value })} />
          </Form.Group>

          <Form.Group controlId="codeCourse">
            <Form.Label>Code Course</Form.Label>
            <Form.Control type="text" name="codeCourse" value={formData.codeCourse} onChange={(e) => setFormData({ ...formData, codeCourse: e.target.value })} />
          </Form.Group>

          <Form.Group controlId="isPremium">
            <Form.Label>Is Premium</Form.Label>
            <Form.Control type="boolean" name="isPremium" value={formData.isPremium} onChange={(e) => setFormData({ ...formData, isPremium: e.target.value })} />
          </Form.Group>

          <Form.Group controlId="priceCourse">
            <Form.Label>Price Course</Form.Label>
            <Form.Control type="number" name="priceCourse" value={formData.priceCourse} onChange={(e) => setFormData({ ...formData, priceCourse: e.target.value })} />
          </Form.Group>

          <Form.Group controlId="levelCourse">
            <Form.Label>Level Course</Form.Label>
            <Form.Control type="text" name="levelCourse" value={formData.levelCourse} onChange={(e) => setFormData({ ...formData, levelCourse: e.target.value })} />
          </Form.Group>

          <Form.Group controlId="teacher">
            <Form.Label>Teacher</Form.Label>
            <Form.Control type="text" name="teacher" value={formData.teacher} onChange={(e) => setFormData({ ...formData, teacher: e.target.value })} />
          </Form.Group>

          <Form.Group controlId="aboutCourse">
            <Form.Label>About Course</Form.Label>
            <Form.Control type="text" name="aboutCourse" value={formData.aboutCourse} onChange={(e) => setFormData({ ...formData, aboutCourse: e.target.value })} />
          </Form.Group>
        </Form>
        <hr />
        <h5>Subject Details</h5>
        <Form>
          <Form.Group controlId="code">
            <Form.Label>Code</Form.Label>
            <Form.Control type="text" name="code" value={subjectData.code} onChange={(e) => setSubjectData({ ...subjectData, code: e.target.value })} />
          </Form.Group>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" value={subjectData.title} onChange={(e) => setSubjectData({ ...subjectData, title: e.target.value })} />
          </Form.Group>
          <Form.Group controlId="linkVideo">
            <Form.Label>Link Video</Form.Label>
            <Form.Control type="text" name="linkVideo" value={subjectData.linkVideo} onChange={(e) => setSubjectData({ ...subjectData, linkVideo: e.target.value })} />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name="description" value={subjectData.description} onChange={(e) => setSubjectData({ ...subjectData, description: e.target.value })} />
          </Form.Group>
          <Form.Group controlId="isPremiumSubject">
            <Form.Label>Is Premium</Form.Label>
            <Form.Control type="boolean" name="isPremiumSubject" value={subjectData.isPremium} onChange={(e) => setSubjectData({ ...subjectData, isPremium: e.target.value })} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={handleSubjectSubmit}>Upload Video</Button>
        <Button variant="danger" onClick={handleCourseSubmit}>
          Simpan
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddData;
