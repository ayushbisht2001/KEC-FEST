import React from 'react';
import './styles/css-battle.css'



const hexaVariant = {
    green : "linear-gradient(to bottom right, #cddc39 0%, #8bc34a 100%)",
    yellow : "linear-gradient(to bottom right, #ffeb3b 0%, #fbc02d 100%)",
    golden : "linear-gradient(to bottom right, #e6ce6a 0%, #b7892b 100%)",
    silver : "linear-gradient(to bottom right, #e0e0e0 0%, #bdbdbd 100%)",
    blue : "linear-gradient(to bottom right, #4fc3f7 0%, #2196f3 100%)",
    mint : "linear-gradient(to bottom right, #4db6ac 0%, #00796b 100%)",
    red : "linear-gradient(to bottom right, #f4511e 0%, #b71c1c 100%)"

}

const iconVariant = {
    green : " #8bc34a",
    yellow : " #fbc02d",
    golden : " #b7892b",
    silver : " #bdbdbd",
    blue : " #2196f3",
    mint : " #00796b",
    red : "#b71c1c"

}

export const Hexa = (props) =>{

const{
    color = "mint",
    iconClass,
    icon = false,
    hexaBoxStyle = {},
    hexaInnerStyle = {},
    hexaCircleStyle = {}


} = props;

return (

<div className = "hexa-box" style = {hexaBoxStyle} >
    <div className = "hexa-inner"
        style = {{
            background : hexaVariant[color],
            ...hexaInnerStyle
            
        }}

        >
      
    </div>
    <div className = "hexa-circle" 
        style = {
            { color : iconVariant[color] ,
            ...hexaCircleStyle
            }
            } 
            >
        { icon ? 
          icon : 
         <i className = {iconClass} style = {{ color : iconVariant[color] }} ></i>

        }
    </div>

</div>)

}


const CssBattle = () => {
    return (
    <>
        <div className="explore-card-container">
      <div className="explore-card-inner">
        <div className="explore-card">
          <div className=" cards card-3">
            <div className="top">
              <div className="top-content">
                <div className="row-1">
                  <p></p>
                  <p></p>
                </div>
                <div className="row-2">
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="play">
              <p></p>
            </div>
            <div className="bottom">
              <p></p>
            </div>
          </div>
        </div>
        <div className="explore-card">
          <div className=" cards card-2">
            <div className="top">
              <div className="top-content">
                <div className="row-1">
                  <p></p>
                  <p></p>
                </div>
                <div className="row-2">
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="play">
              <p></p>
            </div>

            <div className="bottom">
              <p></p>
            </div>
          </div>
        </div>
        <div className="explore-card">
          <div className=" cards card-1">
            <div className="top">
              <div className="top-content">
                <div className="row-1">
                  <p></p>
                  <p></p>
                </div>
                <div className="row-2">
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="play">
              <p></p>
            </div>

            <div className="bottom">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className='d-block position-absolute' style = {{ width : "100%", height : "100%"}}>
    {Object.keys(iconVariant).map((kys, index) => <Hexa color={kys}  hexaBoxStyle = {{position : "absoute"}} />
    )}
    </div> */}
 

    </>
    );
}

export default CssBattle;
