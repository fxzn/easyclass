import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style/SideBar.css";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  return (
    <>
      <nav>
        <div className="logo-name">
          <div className="logo-image">
            <img src="images/logo.png" alt="" />
          </div>
          <span className="logo_name">CodingLab</span>
        </div>
        <div className="menu-items">
          <ul className="nav-links">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faHouse} />
                <span className="link-name">Dahsboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-files-landscapes" />
                <span className="link-name">Content</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-chart" />
                <span className="link-name">Analytics</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-thumbs-up" />
                <span className="link-name">Like</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-comments" />
                <span className="link-name">Comment</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-share" />
                <span className="link-name">Share</span>
              </a>
            </li>
          </ul>
          <ul className="logout-mode">
            <li>
              <a href="#">
                <i className="uil uil-signout" />
                <span className="link-name">Logout</span>
              </a>
            </li>
            <li className="mode">
              <a href="#">
                <i className="uil uil-moon" />
                <span className="link-name">Dark Mode</span>
              </a>
              <div className="mode-toggle">
                <span className="switch" />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default SideBar;
