import { Link } from "react-router-dom";
import { routesConfig } from "../../Utils/routesConfig";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>
      <ul className="nav-links">
        {routesConfig.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
