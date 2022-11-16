import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import LogRegAPI from "../../Services/LogRegAPI";
import axios from "axios";
import "./LogReg.css";

export default function LogReg() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [profil, setProfil] = useState();
  const LogNav = useNavigate();
  const onglets = document.querySelectorAll("onglets");
  const emailLogRef = useRef();
  const passwordLogRef = useRef();
  const emailRegRef = useRef();
  const passwordRegRef = useRef();

  const submitLog = async (event) => {
    event.preventDefault();

    const Email = emailLogRef.current.value;
    const Password = passwordLogRef.current.value;

    //Controle input Email + Mdp
    if (Email.trim().length === 0 || Password.trim().length === 0) {
      return <p>Insert a valid Mail or Password</p>;
    }
    //Controle Validité Email
    const regExEmail = (value) => {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    };

    if (!regExEmail(Email)) {
      return;
    }

    //Login Formulaire

    try {
      await LogRegAPI.login(Email, Password).then((response) => {
        const data = window.localStorage.setItem(
          "userToken",
          response.data.jwt
        );
        window.localStorage.setItem('userId', response.data.user.id);

        console.log(response);
        alert("Login Successful");
        LogNav("/");
        setProfil(response.data.user);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const submitReg = async (event) => {
    event.preventDefault();

    const Email = emailRegRef.current.value;
    const Password = passwordRegRef.current.value;

    //Controle input Email + Mdp
    if (Email.trim().length === 0 || Password.trim().length === 0) {
      return <p>Insert a valid Mail or Password</p>;
    }
    //Controle Validité Email
    const regExEmail = (value) => {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    };

    if (!regExEmail(Email)) {
      return;
    }

    //Register Formulaire

    try {
      await LogRegAPI.register(Email, Password).then((response) => {
        const data = window.localStorage.setItem(
          "userToken",
          response.data.jwt
        );
        console.log("Registered");
        alert("Register Successful");
        LogNav("/");
        setProfil(response.data.user);
      });
    } catch (e) {
      if (e.response.status == 400) {
        alert("Déjà Enregistrer");
      }
    }
  };

  const Login = (event) => {
    if (document.getElementById("reg").classList.contains("active")) {
      document.getElementById("reg").classList.remove("active");
      document.getElementById("log").classList.add("active");
      document.getElementById("regContent").classList.remove("activeContenu");
      document.getElementById("logContent").classList.add("activeContenu");
    }
  };

  const Register = (event) => {
    if (document.getElementById("log").classList.contains("active")) {
      document.getElementById("log").classList.remove("active");
      document.getElementById("reg").classList.add("active");
      document.getElementById("logContent").classList.remove("activeContenu");
      document.getElementById("regContent").classList.add("activeContenu");
    }
  };

  return (
    <div className="container">
      <div className="container-onglets">
        <button id="log" className="onglets active" onClick={Login}>
          Login
        </button>
        <button id="reg" className="onglets" onClick={Register}>
          Register
        </button>
      </div>

      <div
        id="logContent"
        className="contenu activeContenu"
        onSubmit={submitLog}
      >
        <form onSubmit={submitLog}>
          <input type="email" placeholder="email" ref={emailLogRef} required />

          <input
            type="password"
            placeholder="password"
            ref={passwordLogRef}
            required
          />
          <button type="submit">
            <p>Login</p>
          </button>
        </form>
        {isLogged && <p>Login Successful</p>}
      </div>

      <div id="regContent" className="contenu">
        <form onSubmit={submitReg}>
          <input type="email" placeholder="email" ref={emailRegRef} required />

          <input
            type="password"
            placeholder="password"
            ref={passwordRegRef}
            required
          />
          <button type="submit">
            <p>Register</p>
          </button>
        </form>
        {isRegister && <p>Register Successful</p>}
      </div>
    </div>
  );
}
