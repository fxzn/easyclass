// SideBar.jsx
import { Link } from "react-router-dom";
import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark, faHome } from "@fortawesome/free-solid-svg-icons";

function SideBar({ isSidebarOpen, handleSidebarToggle }) {
  return (
    <div className={`sidebar${isSidebarOpen ? " open" : ""}`}>
      <nav className="navbar  navbar-light">
        <button className="sidebar-brand mx-4 mb-3" >
          <h3 className="text-admin mb-5">easyclass</h3>
        </button>
        <div className="navbar-nav w-100">
          <Link to="/admin/dashboard" className={`nav-item nav-link ${isSidebarOpen ? "active" : ""}`}>
            <FontAwesomeIcon icon={faHome} className="me-2" />
            Dashboard
          </Link>
          <Link to="/admin/kelas" className="nav-item nav-link">
            <FontAwesomeIcon icon={faBookBookmark} className="me-2" />
            Kelola Kelas
          </Link>
          {/* Add more links as needed */}
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
