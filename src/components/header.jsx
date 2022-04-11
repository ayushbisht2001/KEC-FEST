import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use"
import "./style/header.scss";
// import logo from '../kvlogo.png'
import Head from "./svg/head";
import { Hexa } from "./svg/hexa"

export default function Header() {

  const { y: pageOffSet } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pageOffSet > 1200) {
      setVisible(true)
    } else {
      setVisible(false);
    }
  }, [pageOffSet])

  const handleTop = (e) => window.scrollTo({ top: 0, behavior: 'smooth' });


  return (
    <div className="header">

      {visible && <div onClick={handleTop} id="button">
        <i class="fas fa-angle-up"></i>
      </div>}

      <div className="header position-relative">
        <section className='container-fluid position-absolute' style={{ width: "100%", height: "100vh" }}>
          {
            ["mint", "silver", "yellow", "blue"].map(cls => {
              return (
                <Hexa
                  hexaBoxStyle={{
                    position: "absolute",
                    opacity: '0.4',
                    zIndex: '1'
                  }}
                  color={cls}
                />
              )
            })
          }
        </section>
        <div className="head-clg-name">
          <h2>BTKIT</h2>
          <span>Dwarahat</span>
        </div>

        <div className="header-container position-relative">
          <Head />

        </div>




        {/* <h2 className="college-name">Bipin Tripathi Kumaon Institute of Technology</h2>
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

      </div> */}
        {/* 
      <p>Fest Start from 18 April to 19 April 2K22</p> */}


      </div>
    </div>

  );
}
