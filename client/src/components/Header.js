import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Header() {
  return (
    <>
      <div className="main-header">
        <div className="container">
          <div className="navbar">
              <Logo className="logo"/>
            <div className="navbar-list">
              <select className="select-input">
                <option>English</option>
                <option>Türkçe</option>
              </select>
              <Link to="/login" className="signin">
                Sign in
              </Link>
              <Link to="/register" className="register">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
