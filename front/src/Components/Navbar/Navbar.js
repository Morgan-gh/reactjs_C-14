import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const buttonRef = useRef();
  const navRef = useRef();
  const navNav = useNavigate();
  const [active, setActive] = useState("header__menu");
  const [navState, SetNavState] = useState(true);
  const [isLogged, setIsLogged] = useState(true);

  function logoutHandler() {
    localStorage.removeItem("userToken", "userId");
  }

  let userId;

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

  const profils = () => {
    userId = window.localStorage.getItem("userId");
    navNav("/account/"+userId);
  }

  useEffect(() => {
    if (window.localStorage.getItem("userToken")){
      setIsLogged(true);
    }
  });

  return (
      <nav className="navbar" ref={navRef}>
        <ul>
          <Link to={`/sports`}>
            <li>Discipline</li>
          </Link>
          <Link to={"/delegation"}>
            <li>Délégations</li>
          </Link>
          <button onClick={profils}>
            <li>Profil</li>
          </button>
          <Link to={"/"} onClick={logoutHandler}>
            <li>Déconnexion</li>
          </Link>
        </ul>
      </nav>
  );
}

export default Navbar;
