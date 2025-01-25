import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (loginData.username === "admin" && loginData.password === "password") {
      console.log("Login successful:", loginData);
      setIsLoggedIn(true);
      setLoginError(false);
    } else {
      console.log("Login failed");
      setIsLoggedIn(false);
      setLoginError(true);
    }

    // Reset form after submission
    setLoginData({
      username: "",
      password: "",
    });
  };

  return (
    <div className="login-page">
      <h1>Logowanie</h1>
      
      {isLoggedIn && <p className="success-message">Zalogowano pomyślnie!</p>}
      {loginError && <p className="error-message">Nieprawidłowe dane logowania</p>}
      
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nazwa użytkownika:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={loginData.username}
            onChange={handleChange}
            required
            placeholder="Wpisz nazwę użytkownika"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Hasło:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
            placeholder="Wpisz hasło"
          />
        </div>
        
        <button type="submit" className="login-button">
          Zaloguj się
        </button>
      </form>
    </div>
  );
};

export default Login;