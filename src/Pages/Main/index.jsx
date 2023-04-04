import React from "react";
import { Link } from "react-router-dom";
import pareja2 from "../../assets/pareja2.png";
import "./Main.scss"


function Main() {

  return (
    <div className="landing">
        <div className="landing-content">
        <div className="landing-img">
          <img src={pareja2} />
        </div>
          <div className="title-box">
            <h2>QUIERO CONSTRUIR<br /></h2>
            <h2>MI <span>VIDA</span></h2>
            <p>JUNTO A TI, ¿ACEPTAS?</p>
          </div>
         
        </div>
        <div className="content-button">
          <Link className="link-button" to="/inicio">ACEPTO</Link>
        </div>
     
        <p className="since">&copy; DESDE 19-02-2022</p>

    </div>

  );
}

export default Main;