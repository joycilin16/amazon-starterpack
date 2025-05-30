import React, { useState } from "react";
import CSS from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { VscThreeBars } from "react-icons/vsc";
const Header = () => {

  const [MenuState, setMenuState] = useState(true);
 const toogleMenu = () => {

  setMenuState((MenuState)=> !MenuState);
 }
  return (
    <div className={CSS.Container}>
      <div className={CSS.Logo}>
        <img src={Logo} alt="logo" />
        <span>Trendora</span>
      </div>
      <div className={CSS.Right} >
        <div className={CSS.bar} onClick={toogleMenu} >
          <VscThreeBars />
        </div>

        
          <ul className={CSS.Menu}  style={{ display: MenuState ? "inherit" : "none" }}>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>
        
        <input className={CSS.Search} type="text" placeholder="search" sty />
        <CgShoppingBag className={CSS.Cart} />
      </div>
    </div>
  );
};
export default Header;
