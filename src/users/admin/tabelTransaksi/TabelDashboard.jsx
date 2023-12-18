import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardInfo from "../component/CardInfo";
import NavAdmin from "../component/NavAdmin";
import "../component/Style.css";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

function TabelDashboard() {
  return (
    <>
      <div className="content">
        <NavAdmin />
        <CardInfo />
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-12">
              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Status Pembayaran</h6>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <button type="button" className="btn btn-tambahclass mb-3">
                    Filter
                    <FontAwesomeIcon icon={faFilter} className="ms-2" />
                  </button>
                </div>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Kategori</th>
                        <th scope="col">Kelas Premium</th>
                        <th scope="col">Status</th>
                        <th scope="col">Metode Pembayaran</th>
                        <th scope="col">Tanggal Bayar</th>
                        <th scope="col">Status</th>
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
                        <td>Member</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>mark@email.com</td>
                        <td>UK</td>
                        <td>456</td>
                        <td>Member</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>jacob@email.com</td>
                        <td>AU</td>
                        <td>789</td>
                        <td>Member</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TabelDashboard;
