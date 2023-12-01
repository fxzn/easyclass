// import "./Style.css";

function SideBar() {
  return (
    <>
      <div className="sidebar pe-4 pb-3">
        <nav className="navbar bg-light navbar-light">
          <a href="index.html" className="navbar-brand mx-4 mb-3">
            <h3 className="text-primary">
              <i className="fa fa-hashtag me-2" />
              DASHMIN
            </h3>
          </a>
          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: 40, height: 40 }} />
              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
            </div>
            <div className="ms-3">
              <h6 className="mb-0">Jhon Doe</h6>
              <span>Admin</span>
            </div>
          </div>
          <div className="navbar-nav w-100">
            <a href="index.html" className="nav-item nav-link active">
              <i className="fa fa-tachometer-alt me-2" />
              Dashboard
            </a>
            <a href="index.html" className="nav-item nav-link active">
              <i className="fa fa-tachometer-alt me-2" />
              Kelola Kelas
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default SideBar;
