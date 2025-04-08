import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { routesConfig } from "../../Utils/routesConfig";
import "./style.css";
import { selectThemeMode } from "../../State/Selectors/themeSelector";

const Navbar = () => {
  const mode = useSelector(selectThemeMode); 

  const backgroundColor = mode === 'light' ? '#1976d2' : '#333';

  return (
    <nav className="navbar" style={{ backgroundColor }}>
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
