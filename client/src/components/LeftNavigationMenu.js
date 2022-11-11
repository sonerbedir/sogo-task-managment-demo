import React from "react";
import {useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { BiTask } from "react-icons/bi";

export default function LeftNavigatiponMenu() {
  const navigate = useNavigate();
  return (
    <div className="left-navigation-menu">
      <div className="navigation-logo">
        <Logo className="navigation-logo-title" />
      </div>
      <div className="navigation-menu-list">
        <ul>
          <li className="navigation-menu-list-item" onClick={() => {
            navigate("/dashboard")
          }}>
            <MdSpaceDashboard className="list-icon" />
            Dashboard
          </li>
          <li className="navigation-menu-list-item" onClick={() => {
            navigate("/projects")
          }}>
            <AiFillProject className="list-icon" />
            Project
          </li>
          <li className="navigation-menu-list-item" onClick={() => {
            navigate("/task")
          }}>
            <BiTask className="list-icon" />
            Task
          </li>
        </ul>
      </div>
    </div>
  );
}
