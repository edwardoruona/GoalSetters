import { FaFacebook, FaHome,FaMailBulk,FaPhone,FaLinkedin, FaTwitter} from "react-icons/fa"
import "./FooterStyle.css"

import React from 'react'


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    {/* <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/> */}
                <div>
                {/* <p>123 Housing Society</p>
                <p>Banglandish</p> */}
                </div>
                </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                +2349036023616</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                info@smartwealthinitiative.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About The Company</h4>
                <p>Goal Setters is a financial institution that is poised to providing you with the best business, investment and wealth creation services.</p>
                <div className="socials">
                    <FaFacebook size={30} style={{color: "#fff", marginRight:"1rem"}}/>
                    <FaTwitter size={30} style={{color: "#fff", marginRight:"1rem"}}/>
                    <FaLinkedin size={30} style={{color: "#fff", marginRight:"1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer