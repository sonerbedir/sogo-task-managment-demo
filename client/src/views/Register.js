import React from "react";
import Join from "../assets/svg/join.svg";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Register() {
  return (
    <div className="register-container">
      <div className="container">
        <div className="register-illustration">
          <img src={Join} alt="join" />
        </div>
        <div className="register-form">
          <Input placeholder="Name Surname" type="text" className="register-input"/>
          <Input placeholder="email" type="email" className="register-input"/>
          <Input placeholder="password" type="password" className="register-input"/>
          <Button className="primary-button" text="Register"/>
        </div>
      </div>
    </div>
  );
}
