import "./AboutContentStyle.css";
import {Link} from "react-router-dom";
import React1 from "../assets/image(11).jpg"
import React2 from "../assets/image(10).jpg"


import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who We Are</h1>
            <p>Welcome to our platform! We specialize in a range of services tailored to elevate personal and business performance. From expert investment consultancy to personalized business coaching, we're here to guide you towards success. Dive into our courses, ebooks, and educational materials to enhance your marketing strategies. Join us for seminars on various topics like business, investments, passive income, and personal development. Let's embark on this journey together towards growth and financial freedom . </p>
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
