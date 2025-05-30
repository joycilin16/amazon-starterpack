import React from "react";
import CSS from "../Virtual/Virtual.module.css";
import Shade from "../../assets/shade.png";
import ReactCompareImage from "react-compare-image";
import before from "../../assets/before.png";
import after from "../../assets/after.png";

const Virtual = () => {
  return (
    <div className={CSS.Virtual}>
      <div className={CSS.left}>
        <span>Virtual Try-on</span>
        <span>Never Buy the Wrong Shades Again</span>
        <span>Try Now</span>
        <img src={Shade} alt="Shades" />
      </div>

      <div className={CSS.right}>
        <div className={CSS.wrapper}>
          <ReactCompareImage 
            leftImage={before}
            rightImage={after}
            
          />
        </div>
      </div>
    </div>
  );
};

export default Virtual;
