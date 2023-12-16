import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const AddData = ({ showModal, handleClose }) => {
  const [formData, setFormData] = useState({
    titleCourse: "",
    codeCourse: "",
    priceCourse: "",
    levelCourse: "",
    teacher: "",
    isPremium: false,
    categories: 0,
    subjects: [],
  });

  const handleChange = (e, index = null) => {
    const { name, value } = e.target;

    if (name === "subjects") {
      const { name: updatedName, value: updatedValue } = value;
      const updatedSubjects = formData.subjects.map((subject, i) => {
        if (index === i) {
          return {
            ...subject,
            [updatedName]: updatedValue,
          };
        }
        return subject;
      });

      setFormData((prevData) => ({
        ...prevData,
        subjects: updatedSubjects,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const addSubject = async () => {
    try {
      const response = await axios.post(
        "https://easy-class-407401.et.r.appspot.com/api/admin/subject/add",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log(response.data);

      setFormData((prevData) => ({
        ...prevData,
        subjects: [
          ...prevData.subjects,
          {
            code: "",
            title: "",
            linkVideo: "",
            description: "",
            isPremium: false,
          },
        ],
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/admin/course/add`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Post created:", response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title className="font-Montserrat text-[24px] font-bold leading-[36px] text-darkblue-05">Tambah Kelas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="titleCourse">
              <Form.Label>Title Course</Form.Label>
              <Form.Control type="text" name="titleCourse" value={formData.titleCourse} onChange={(e) => handleChange(e)} />
            </Form.Group>

            <Form.Group controlId="codeCourse">
              <Form.Label>Code Course</Form.Label>
              <Form.Control type="text" name="codeCourse" value={formData.codeCourse} onChange={(e) => handleChange(e)} />
            </Form.Group>

            <Form.Group controlId="priceCourse">
              <Form.Label>Price Course</Form.Label>
              <Form.Control type="number" name="priceCourse" value={formData.priceCourse} onChange={(e) => handleChange(e)} />
            </Form.Group>

            <Form.Group controlId="levelCourse">
              <Form.Label>Level Course</Form.Label>
              <Form.Control type="text" name="levelCourse" value={formData.levelCourse} onChange={(e) => handleChange(e)} />
            </Form.Group>

            <Form.Group controlId="teacher">
              <Form.Label>Teacher</Form.Label>
              <Form.Control type="text" name="teacher" value={formData.teacher} onChange={(e) => handleChange(e)} />
            </Form.Group>

            <Form.Group controlId="isPremium">
              <Form.Check type="checkbox" label="Is Premium" name="isPremium" checked={formData.isPremium} onChange={(e) => handleChange(e)} />
            </Form.Group>

            <Form.Group controlId="categories">
              <Form.Label>Categories</Form.Label>
              <Form.Control type="number" name="categories" value={formData.categories} onChange={(e) => handleChange(e)} />
            </Form.Group>

            {formData.subjects.map((subject, index) => (
              <div key={index}>
                <Form.Group controlId={`subjectCode${index}`}>
                  <Form.Label>{`Subject ${index + 1} Code`}</Form.Label>
                  <Form.Control type="text" name="subjects" value={subject.code} onChange={(e) => handleChange(e, index)} />
                </Form.Group>

                <Form.Group controlId={`subjectTitle${index}`}>
                  <Form.Label>{`Subject ${index + 1} Title`}</Form.Label>
                  <Form.Control type="text" name="subjects" value={subject.title} onChange={(e) => handleChange(e, index)} />
                </Form.Group>

                <Form.Group controlId={`subjectLinkVideo${index}`}>
                  <Form.Label>{`Subject ${index + 1} Link Video`}</Form.Label>
                  <Form.Control type="text" name="subjects" value={subject.linkVideo} onChange={(e) => handleChange(e, index)} />
                </Form.Group>

                <Form.Group controlId={`subjectDescription${index}`}>
                  <Form.Label>{`Subject ${index + 1} Description`}</Form.Label>
                  <Form.Control type="text" name="subjects" value={subject.description} onChange={(e) => handleChange(e, index)} />
                </Form.Group>

                <Form.Group controlId={`subjectIsPremium${index}`}>
                  <Form.Check type="checkbox" label={`Subject ${index + 1} Is Premium`} name="subjects" checked={subject.isPremium} onChange={(e) => handleChange(e, index)} />
                </Form.Group>
              </div>
            ))}

            <Button type="button" onClick={addSubject}>
              Add Subject
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default AddData;