import "./HeroStyle.css";
import React from 'react' ;
import { Link } from "react-router-dom" ;

import Introimg from "../assets/images (1).jpg" ;




function Hero() {
    
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={Introimg} alt="introimage" />
            </div>
            <div className="content">
                <p>We provide business/investment consultation services</p>
                <h1>-------</h1>
                <div>
                    <Link to="/project" className="btn">Services</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default Hero



