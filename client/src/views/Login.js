import React from "react";
import { Link } from "react-router-dom";
import Pomodro from "../assets/svg/pomodro.svg";
import Button from "../components/Buttons/Button";
import Input from "../components/Input";

export default function Login() {
  return (
    <div className="login-container">
      <div className="container">
        <div className="text-content">
          <h1>Sign in to manage your tasks</h1>
          <p>
            if you don’t an account you can{" "}
            <Link to="/register" className="link">
              Register here!
            </Link>
          </p>
        </div>
        <div className="illustration">
          <img src={Pomodro} alt="pomodro" />
        </div>
        <div className="form">
          <Input
            className="primary-input"
            placeholder="Enter email"
            type="email"
          />
          <Input
            className="primary-input"
            placeholder="password"
            type="password"
          />
          <Link to="/register" className="recover">
            I forgot my password
          </Link>
          <Button className="primary-button" text="Sing in"/>
        </div>
      </div>
    </div>
  );
}
