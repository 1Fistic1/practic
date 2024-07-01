import React, { useState } from "react";
import axios from "axios";

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import cl from "../login/Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        { email, password }
      );
      navigate("/");
    } catch (error) {}
  };

  return (
    <div className={cl.loginForm}>
      <div className={cl.container}>
        <form onSubmit={handleSubmit}>
          <div className={cl.bigTitle}>
            <h2>Вход</h2>
          </div>
          <div className={cl.inputs}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Почта"
              required
            />
          </div>
          <div className={cl.inputs}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль"
              required
            />
          </div>
          <div className={cl.titles}>
            <p>У вас нет аккаунта?</p>
            <NavLink to="/register">Регистрация</NavLink>
          </div>
          <button type="submit">Вход</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
