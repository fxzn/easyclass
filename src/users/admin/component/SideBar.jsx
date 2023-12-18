import { Link } from "react-router-dom";
import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark, faHome } from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  return (
    <>
      <>
        <div className="sidebar pe-4 pb-3 ">
          <nav className="navbar  navbar-light">
            <a href="index.html" className="navbar-brand mx-4 mb-3">
              <h3 className="text-admin mb-5">
                easyclass
              </h3>
            </a>
            <div className="navbar-nav w-100">
              <Link to="/admin/dashboard"className="nav-item nav-link active">
                <FontAwesomeIcon icon={faHome} className="me-2" />
                Dashboard
              </Link>
              <Link to="/admin/kelas" className="nav-item nav-link">
                <FontAwesomeIcon icon={faBookBookmark} className="me-2" />
                Kelola Kelas
              </Link>
              
            </div>
          </nav>
        </div>
      </>
    </>
  );
}

export default SideBar;
