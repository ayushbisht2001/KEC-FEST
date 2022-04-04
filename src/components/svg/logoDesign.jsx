import React from 'react'
function logoDesign() {
    return (
        <div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center" }} className='logoDesign'>
            <img style={{ width: "100%" }} src={`${process.env.PUBLIC_URL}/image/logo-design.png`} alt="LOGO " />
        </div>
    )
}

export default logoDesign;