import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import AboutUs from "./views/aboutUs";


function App() {
  return (
    
      <Router>
        <Routes>
          {/* Rutas publicas */}
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
    
          {/* Rutas protegidas */}

        </Routes>
      </Router>

  )
}

export default App