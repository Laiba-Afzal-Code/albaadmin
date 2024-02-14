import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";
export default function Sidebar() {
  let location = useLocation();
  return (
    <>
      <div className="sidebar">
        <div className="sidebarWapper">
          <div className="sidebarManu">
            <h2 className="sidebarTitle">Dashboard</h2>
            <ul className="sidebarList">
              <li
                className={`sidebarListItems ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                <i className="fa-solid fa-lines-leaning"></i>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li className="sidebarListItems">
                <i className="fa-solid fa-arrow-up-right-dots"></i>
                Analytics
              </li>
              <li className="sidebarListItems">
                <i className="fa-solid fa-arrow-trend-up"></i>
                Sales
              </li>
            </ul>
          </div>
          <div className="sidebarManu">
            <h2 className="sidebarTitle">Quick Access</h2>
            <ul className="sidebarList">
              <li
                className={`sidebarListItems ${
                  location.pathname === "/users" ? "active" : ""
                }`}
              >
                <i class="fa-solid fa-user"></i>
                <Link to="/users" className="link">
                  Users
                </Link>
              </li>
              <li
                className={`sidebarListItems ${
                  location.pathname === "/products" ? "active" : ""
                }`}
              >
                <i class="fa-solid fa-dumpster-fire"></i>
                <Link to={"/products"} className="link">
                  Products
                </Link>
              </li>
              <li className="sidebarListItems">
                <i class="fa-solid fa-dollar-sign"></i>
                Transactions
              </li>
              <li className="sidebarListItems">
                <i class="fa-solid fa-signal"></i>
                Reports
              </li>
            </ul>
          </div>
          <div className="sidebarManu">
            <h2 className="sidebarTitle">Notifications</h2>
            <ul className="sidebarList">
              <li className="sidebarListItems">
                <i className="fa-regular fa-envelope"></i>
                Mail
              </li>
              <li className="sidebarListItems">
                <i class="fa-solid fa-barcode"></i>
                Feedback
              </li>
              <li className="sidebarListItems">
                <i class="fa-regular fa-message"></i>
                Messages
              </li>
            </ul>
          </div>
          <div className="sidebarManu">
            <h2 className="sidebarTitle">Staff</h2>
            <ul className="sidebarList">
              <li className="sidebarListItems">
                <i class="fa-solid fa-business-time"></i>
                Manage
              </li>
              <li className="sidebarListItems">
                <i class="fa-solid fa-seedling"></i>
                Growth
              </li>
              <li className="sidebarListItems">
                <i className="fa-solid fa-circle-exclamation"></i>
                Reports
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
