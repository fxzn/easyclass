import SideBar from "./SideBar";
import StatistikCard from "./StatistikCard";
import "./Style.css";
import Tabel from "./Tabel";

function Admin() {
  return (
    <>
      <div className="content">
        <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
          <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
            <h2 className="text-primary mb-0">
              <i className="fa fa-hashtag" />
            </h2>
          </a>
          <a href="#" className="sidebar-toggler flex-shrink-0">
            <i className="fa fa-bars" />
          </a>
          <form className="d-none d-md-flex ms-4">
            <input className="form-control border-0" type="search" placeholder="Search" />
          </form>
        </nav>

        <SideBar />
        <StatistikCard />
        <Tabel />
      </div>
    </>
  );
}

export default Admin;
