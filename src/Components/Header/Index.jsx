import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"

function Header() {


  function menu(){
    const navToggle = document.getElementById('navItems')

    navToggle.classList.toggle('oculto')
  }

  return (
    <div className="navBar">
      <div className="nav-logo">
        SOULMATE 
      </div>
      <div id="navItems" className="nav-items">
        <Link  className="nav-link" to="/inicio" onClick={menu}>INICIO</Link>
        <Link className="nav-link" to='/inicio' >NOSOTROS</Link>
        <Link className="nav-link" to='/'>SALIR</Link>
      </div>
    <div id="navToggle" onClick={menu} className="nav-toggle">  
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Header;