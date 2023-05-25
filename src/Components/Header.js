import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-danger">
      <div className="container-fluid">
        <NavLink className={"navbar-brand"} to="/">
          Youtube
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/About">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
