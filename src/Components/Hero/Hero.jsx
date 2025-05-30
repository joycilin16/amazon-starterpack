import React from "react";
import CSS from "../Hero/Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import {motion} from "framer-motion";
const Hero = () => {

  const transition={duration:3,type:"spring"}

  return (
    <div className={CSS.Container}>
      <div className={CSS.h_side}>
        <span className={CSS.text1}>Skin Protection Cream</span>

        <div className={CSS.text2}>
          <span>Trendy Colletions</span>
          <span>
            Seedly say has suitable disposal and boy. Excercise joy and rejoice.
          </span>
        </div>
      </div>

      <div className={CSS.wrapper}>
        <motion.div 
        initial={{bottom: "2rem"}}
        whileInView={{bottom: "0rem"}}
        className={CSS.bluecircle}
        transition={transition}
        ></motion.div>
        <motion.img 
         initial={{bottom: "-2rem"}}
         whileInView={{bottom: "0rem"}}
         transition={transition}
        src={HeroImg} alt="" width={400} />
        <div 
        
        className={CSS.Cart2}>
          <RiShoppingBagFill />
          <div className={CSS.Signup}>
            <span>Best Signup Offer</span>
            <span className="arrow" >
              <BsArrowRight />
            </span>
          </div>
        </div>
      </div>

      <div className={CSS.h_side}>
        <div className={CSS.traffic}>
          <span>1.5m</span>
          <span> Monthly Traffic</span>
        </div>
        <div className={CSS.customers}>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
