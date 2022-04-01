import React from "react";
import "./style/header.css";
import logo from '../kvlogo.png'
// import Particles from 'react-particles-js';

export default function Header() {
  return (
    <div className="header">


      <h2 className="college-name">Bipin Tripathi Kumaon Institute of Technology</h2>
      <div className="header-container">
        <div className="left-container">
          <img src={logo} alt="Fest-logo" />
        </div>
        <div className="right-container">
          <div className="clip"></div>
          <div>
            <h1 className="fest-h1">KAIVALYA</h1>
            <h1 className="fest-h2">FEST</h1>
            <h1 className="fest-h3">2K22</h1>
          </div>
          <p>Fest Start from 18 April to 19 April 2K22</p>
        </div>

      </div>

    </div>
  );
}
