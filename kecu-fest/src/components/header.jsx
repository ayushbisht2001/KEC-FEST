import React from "react";
import "./style/header.css";

export default function Header() {
  return (
    <div className="container-fluid  bg-dark ">
      <div className="container header p-4">
        <h2 className="heading ">
          {" "}
          Bipin Tripathi Kuamon Institute of Techonology
        </h2>

        <h1 className="heading mt-4" >Kaivalya</h1>
        <div className="logo-box p-3 m-3">
            <img src="image/logo.svg"></img>
        </div>
        <div className="content">
            <pre>
               Start Fest from 18 April to  20 April 2k22
            </pre>
        </div>

      </div>
    </div>
  );
}
