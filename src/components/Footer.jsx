import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
        <div className="footer-section-one">
            <div className='footer-icons'>
                <FaFacebookF />
                <BsYoutube />
                <BsTwitter />
            </div>
        </div>
        <div className="footer-section-two">
            <div>
                <span>Tel - +251-111-11-11</span>
                <span>Email - Kitchensecrets@recipe.com</span>
                <span>Website - www.kitchensecrets.com</span>
            </div>
            <div>
                <p>&copy; 2023 KitchenSecrets by Bereket Abebe</p>
            </div>
        </div>
    </div>
  );
};

export default Footer;