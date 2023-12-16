import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import Input from "./Input";

const AddData = ({ showModal, handleClose }) => {
 const [formData, setFormData] = useState({
    titleCourse: "",
    codeCourse: "",
    priceCourse: "",
    levelCourse: "",
    teacher: "",
    isPremium: false,
    categories: "",
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

 const addSubject = () => {
    setFormData((prevData) => ({
      ...prevData,
      subjects: [
        ...prevData.subjects,
        {
          id: "",
          code: "",
          title: "",
          linkVideo: "",
          description: "",
          isPremium: false,
        },
      ],
    }));
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(${import.meta.env.VITE_BASE_URL}/api/admin/course/add, {
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
          <div>
            <Input type="text" label="Title Course" name="titleCourse" value={formData.titleCourse} onChange={(e) => handleChange(e)} />
            <Input type="text" label="Code Course" name="codeCourse" value={formData.codeCourse} onChange={(e) => handleChange(e)} />
            <Input type="number" label="Price Course" name="priceCourse" value={formData.priceCourse} onChange={(e) => handleChange(e)} />
            <Input type="text" label="Level Course" name="levelCourse" value={formData.levelCourse} onChange={(e) => handleChange(e)} />
            <Input type="text" label="Teacher" name="teacher" value={formData.teacher} onChange={(e) => handleChange(e)} />
            <Input type="checkbox" label="Is Premium" name="isPremium" checked={formData.isPremium} onChange={(e) => handleChange(e)} />
            <Input type="text" label="Categories" name="categories" value={formData.categories} onChange={(e) => handleChange(e)} />


            {formData.subjects.map((subject, index) => (
              <div key={index}>
                <Input type="text" label={Subject ${index + 1} Code} name="subjects" value={{ name: "code", value: subject.code }} onChange={(e) => handleChange(e, index)} />
                <Input type="text" label={Subject ${index + 1} Title} name="subjects" value={{ name: "title", value: subject.title }} onChange={(e) => handleChange(e, index)} />
                <Input type="text" label={Subject ${index + 1} Link Video} name="subjects" value={{ name: "linkVideo", value: subject.linkVideo }} onChange={(e) => handleChange(e, index)} />
                <Input type="text" label={Subject ${index + 1} Description} name="subjects" value={{ name: "description", value: subject.description }} onChange={(e) => handleChange(e, index)} />
                <Input type="checkbox" label={Subject ${index + 1} Is Premium} name="subjects" checked={subject.isPremium} value={{ name: "isPremium", value: subject.isPremium }} onChange={(e) => handleChange(e, index)} />
              </div>
            ))}

            <Button onClick={addSubject}>Add Subject</Button>
          </div>
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