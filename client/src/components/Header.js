import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="main-header">
        <div className="container">
          <div className="navbar">
              <Link to="/login" className="logo">
                <h1>SOGO</h1>
              </Link>
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
