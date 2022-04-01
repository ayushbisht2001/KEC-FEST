import React from 'react'
import log from './logo-design.png';
function logoDesign() {
    return (
        <div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center" }} className='logoDesign'>
            <img style={{ width: "100%" }} src={log} alt="LOGO " />
        </div>
    )
}

export default logoDesign;