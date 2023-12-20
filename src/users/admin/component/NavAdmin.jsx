// NavAdmin.jsx
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";
import "./Style.css";

function NavAdmin() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
        <button className="sidebar-toggler flex-shrink-0" onClick={handleSidebarToggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <form className="d-none d-md-flex ms-4">
          <input className="form-control border-0" type="search" placeholder="Search" />
        </form>
        <div className="navbar-nav align-items-center ms-auto">
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              <img className="rounded-circle me-lg-2" src="img/user.jpg" alt="" style={{ width: 40, height: 40 }} />
              <span className="d-none d-lg-inline-flex">Hi Admin</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
              <a href="#" className="dropdown-item">
                Log Out
              </a>
            </div>
          </div>
        </div>
      </nav>

      <SideBar isSidebarOpen={isSidebarOpen} handleSidebarToggle={handleSidebarToggle} />
    </>
  );
}

export default NavAdmin;