
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../Tabelkelola.css";
import AddData from "../AddData";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import EditKelas from "../EditKelas";

function TabelVideo() {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [kelasData, setKelasData] = useState([]);
  const [editCourseData, setEditCourseData] = useState(null);

  useEffect(() => {
    async function getCourseList() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/subject/get`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setKelasData(response.data.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
      }
    }
    getCourseList();
  }, []);

  const handleTambahClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowEditModal(false);
    setEditCourseData(null);
  };

  const handleSaveData = () => {
    handleCloseModal(); 
  };

  const handleEdit = (courseCode) => {
    const editedCourse = kelasData.find((course) => course.code === courseCode);
    setEditCourseData(editedCourse);
    setShowEditModal(true);
  };

  const handleDelete = async (code) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/admin/subject/delete/${code}`);

      if (response.status === 200) {
        toast.success("Course deleted successfully");


      } else {
        toast.error("Failed to delete course");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="content">
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-12">
              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Video</h6>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <button type="button" className="btn btn-tambahclass mb-3" onClick={handleTambahClick}>
                    Tambah
                    <FontAwesomeIcon icon={faPlus} className="ms-2" />
                  </button>
                </div>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Kode Kelas</th>
                        <th scope="col">Kategori</th>
                        <th scope="col">Nama Kelas</th>
                        <th scope="col">Tipe Kelas</th>
                        <th scope="col">Level</th>
                        <th scope="col">Harga Kelas</th>
                        <th scope="col">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {kelasData && kelasData.length > 0 ? (
                        kelasData.map((course) => (
                          <tr key={course.id}>
                            <td>{course.code}</td>
                            <td>{course.categories && course.categories.length > 0 ? course.categories.map((category) => category.categoryName).join(",") : "No category"}</td>
                            <td>{course.title}</td>
                            <td>{course.isPremium ? "Yes" : "No"}</td>
                            <td>{course.level}</td>
                            <td>Rp. {course.price}</td>
                            <td>
                              <div>
                                <button type="button" className="btn btn-edit" onClick={() => handleEdit(course.code)}>
                                  <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button type="button" className="btn btn-delete" onClick={() => handleDelete(course.code)}>
                                  <FontAwesomeIcon icon={faTrash} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="7">No data available</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {editCourseData && (
        <EditKelas
        editCourseData={editCourseData}
        showModal={showEditModal}
        handleClose={handleCloseModal}
        handleSave={handleSaveData}
        />
      )}
      {showModal && (
        <AddData
          showModal={showModal}
          handleClose={handleCloseModal}
          handleSave={handleSaveData}
        />
      )}
    </>
  );
}

export default TabelVideo;
