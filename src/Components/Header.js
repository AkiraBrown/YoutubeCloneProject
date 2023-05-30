import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
export default function Header() {
  return (
    <nav className="navbar navbar-expand-md bg-danger fixed-top">
      <div className="container-fluid">
        <NavLink className={"navbar-brand"} to="/">
          Youtube
        </NavLink>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About">
                About
              </NavLink>
            </li>
          </ul>

          <SearchBar />
        </div>
      </div>
    </nav>
  );
}
