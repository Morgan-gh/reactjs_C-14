import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

function Header() {
  const buttonRef = useRef();
  const navRef = useRef();
  const [active, setActive] = useState("header__menu");
  const [navState, SetNavState] = useState(true);

  const navToggle = (event) => {
    if (navState == true) {
      buttonRef.current.classList.add("active");
      navRef.current.classList.add("active");
      SetNavState(false);
    } else if (navState == false) {
      buttonRef.current.classList.remove("active");
      navRef.current.classList.remove("active");
      SetNavState(true);
    }
  };

  return (
    <>
      <div className="header">
        <button onClick={navToggle} className="header__brand" ref={buttonRef}>
          <img src="./JO.png" alt="Menu Burger" />
        </button>
        <button className="logoCenter">
          <img src="./ressource/logoCenter.png"/>
        </button>
        <ul className={active}>
          <button className="header__item">
            <img src="./calendrier.png" alt="Calendrier" />
          </button>
          <Link to={"/account"} className="header__item">
            <img src="./profil.png" alt="Profil" />
          </Link>
        </ul>
      </div>

      <div className="nav" ref={navRef}>
        <Navbar />
      </div>
    </>
  );
}

export default Header;
