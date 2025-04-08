import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routesConfig } from "./Utils/routesConfig";
import Navbar from "./Components/Navbar/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
