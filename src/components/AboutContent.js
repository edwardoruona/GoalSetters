import "./AboutContentStyle.css";
import {Link} from "react-router-dom";
import React1 from "../assets/download (5).jpg"
import React2 from "../assets/download (4).jpg"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who we are</h1>
            <p>iygygygey duiuidsduh fuejhf duhfnbkduisudhd dudhjks dhsudu uhdh </p>
            <Link to="/contact">
            <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="react image" />
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="react image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent