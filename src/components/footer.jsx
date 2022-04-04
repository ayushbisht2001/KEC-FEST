import React from 'react'
import './style/footer.css';

function footer() {
    return (
        <div className='footer'>
            <div className="social-meadia">
                <a href="https://www.instagram.com/i_m_anas07/"><img src={`${process.env.PUBLIC_URL}/image/instagram.png`} alt="" />
                </a>

                <a href="https://www.facebook.com/"><img src={`${process.env.PUBLIC_URL}/image/facebook.png`} alt="" />
                </a>

            </div>
        </div>
    )
}

export default footer