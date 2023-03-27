import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import Authcontext from "../../context/Authcontext";

function Login() {
  const currentUser = useContext(Authcontext);
  console.log(currentUser);
  const [user, setUser] = useState("");
  console.log(user);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser.user) navigate("/home");
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user, password);
    currentUser.login(user, password);
  };

  return (
    <div id="login-app">
      <div className="box login">
        <form className="form" onSubmit={submitHandler}>
          <input
            type="text"
            tabIndex="1"
            name="username"
            onChange={(e) => setUser(e.target.value)}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            tabIndex="1"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <input type="submit" className="btn btn-login" value="Login" />
          <p className="signupNavigation">Don't have an account? Signup </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
