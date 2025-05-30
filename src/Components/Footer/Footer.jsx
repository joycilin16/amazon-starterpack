import React from "react";
import CSS from "../Footer/Footer.module.css";
import Logo from "../../assets/logo.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { GoSignIn } from "react-icons/go";
import { AiFillSafetyCertificate } from "react-icons/ai";
const Footer = () => {
  return (
    <div className={CSS.cFooterWrapper}>
      <hr />
      <div className={CSS.cFooter}>
        <div className={CSS.cLogo}>
          <img src={Logo} alt="" />
          <span>amazon</span>
        </div>

        <div className={CSS.cBlock}>
          <div className={CSS.cDetails}>
            <span>Contact Us</span>
            <span className={CSS.pngLinc}>
              <HiOutlineLocationMarker className={CSS.icon} />
              <span>11/345 thtatet street teretui,rthruu</span>
            </span>
            <span className={CSS.pngLinc}>
              <FaPhone className={CSS.icon} />
              <a href="+1234567898">+1234-4567-678</a>
            </span>
            <span className={CSS.pngLinc}>
              <IoIosMail className={CSS.icon} />
              <a href="+1234567898">+1234-4567-678</a>
            </span>
          </div>
        </div>
        <div className={CSS.cBlock}>
          <div className={CSS.cDetails}>
            <span>Company</span>
            <span className={CSS.pngLinc}>
              <GoSignIn className={CSS.icon} />
              <a href="/about ">About Us</a>
            </span>
          </div>
        </div>
        <div className={CSS.cBlock}>
          <div className={CSS.cDetails}>
            <span>Resource</span>
            <span className={CSS.pngLinc}>
              <AiFillSafetyCertificate className={CSS.icon} />
              <a href="/Security ">Security & Privacy</a>
            </span>
          </div>
        </div>
        </div>
        <div className={CSS.copyrights}>
            <span>Copyrights @2002 by amazon.inc</span>
            <span>All rights reserved</span>
        </div>
      
    </div>
  );
};

export default Footer;
