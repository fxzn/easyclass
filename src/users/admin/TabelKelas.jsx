import CardInfo from "./CardInfo";
import NavAdmin from "./NavAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Tabelkelola.css";
import AddData from "./AddData";
import { useState } from "react";

function TabelKelas() {
  const [showModal, setShowModal] = useState(false);

  const handleTambahClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveData = () => {
    // Add your save logic here
    handleCloseModal(); // Close the modal after saving
  };
  return (
    <>
      <div className="content">
        <NavAdmin />
        <CardInfo />
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-12">
              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Status pembayaran</h6>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <button type="button" className="btn btn-tambahclass mb-3" onClick={handleTambahClick}>
                    Tambah
                    <FontAwesomeIcon icon={faPlus} className="ms-2" />
                  </button>
                  <AddData/>
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
                      <tr>
                        <th scope="row">1</th>
                        <td>John</td>
                        <td>Doe</td>
                        <td>jhon@email.com</td>
                        <td>USA</td>
                        <td>123</td>
                        <td>
                          <div>
                            <button type="button" className="btn btn-edit">
                              <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button type="button" className="btn btn-delete">
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>mark@email.com</td>
                        <td>UK</td>
                        <td>456</td>
                        <td>
                          <div>
                            <button type="button" className="btn btn-edit">
                              <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button type="button" className="btn btn-delete">
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>jacob@email.com</td>
                        <td>AU</td>
                        <td>789</td>
                        <td>
                          <div>
                            <button type="button" className="btn btn-edit">
                              <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button type="button" className="btn btn-delete">
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddData showModal={showModal} handleClose={handleCloseModal} handleSave={handleSaveData} />
    </>
  );
}

export default TabelKelas;
