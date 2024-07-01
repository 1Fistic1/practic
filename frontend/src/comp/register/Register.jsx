import React, { useState } from "react";
import axios from "axios";

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import cl from "../register/Register.module.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        { email, password }
      );
      console.log("User registered:", response.data);
    } catch (error) {
      console.error("Error registering user:", error.response.data);
    }
  };

  return (
    <div className={cl.registerForm}>
      <div className={cl.container}>
        <form onSubmit={handleSubmit}>
          <div className={cl.bigTitle}>
            <h2>Регистрация</h2>
          </div>
          <div className={cl.inputs}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className={cl.inputs}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <div className={cl.titles}>
            <p>У вас есть аккаунт?</p>
            <NavLink to="/login">Вход</NavLink>
          </div>
          <button type="submit">Зарегестрироваться</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
