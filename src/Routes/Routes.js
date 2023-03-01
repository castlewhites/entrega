import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "../Pages/Main";
import Login from "../Pages/Login";
import Inicio from "../Pages/Inicio/Index";
import TeAmo from "../Pages/Teamo/Index";
import Felicidad from "../Pages/Felicidad/Index";
import TeInteresa from "../Pages/Teinteresa/Index";



/* 
import AboutUs from "../pages/AboutUs";
 */



function RoutesApp() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
        </Routes>
        <Routes>
          <Route path="/teAmo" element={<TeAmo />} />
        </Routes>
        <Routes>
          <Route path="/felicidad" element={<Felicidad />} />
        </Routes>
        <Routes>
          <Route path="/te-interesa" element={<TeInteresa />} />
        </Routes>
     {/*   
      
        <Routes>
          <Route path="/About-us" element={<AboutUs />} />
        </Routes> */}
      </Router>
    </div>
  );
}

export default RoutesApp;
