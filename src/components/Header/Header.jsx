import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from 'react-outside-click-handler';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function Header() {
  const [menuOpened, setMenuOpened] =useState(false)
  
  const getMenuStyles = (menuOpened) =>{
    if(document.documentElement.clientWidth <= 800)
    {
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <img src="./images/brandname.png" width={100} alt="LOGO" />
        <OutsideClickHandler onOutsideClick={()=>{
        setMenuOpened(false)
       }}>
        <div className="flexCenter h-menu"
        style={getMenuStyles(menuOpened)}
        >
          <Link activeClass="active" to="recidencies" spy={true} smooth={true} offset={0} duration={500}> Residencies </Link>
          <Link activeClass="active" to="our-value" spy={true} smooth={true} offset={0} duration={500}> Our Values </Link> 
          <Link activeClass="active" to="contact-us" spy={true} smooth={true} offset={0} duration={500}> Contact Us </Link> 
          <Link activeClass="active" to="get-started" spy={true} smooth={true} offset={0} duration={500}> Get Started </Link>
          <button className="button">
            <a href="mailto:abc@gmail.com"> Contact</a>
          </button>
        </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={()=>setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}

export default Header;
