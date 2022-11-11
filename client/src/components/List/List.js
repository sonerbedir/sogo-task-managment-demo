import React from "react";
import { AiOutlineFolder } from "react-icons/ai";

export default function List() {
  return (
    <div className="list-main-container">
      <div className="list-title">
        <h2>Projects</h2>
      </div>
      <div className="list-container">
        <ul className="list">
          <li className="list-item">
            <AiOutlineFolder className="folder-icons" />
            Project 1
          </li>
          <li className="list-item">
            <AiOutlineFolder className="folder-icons" />
            Project 1
          </li>
          <li className="list-item">
            <AiOutlineFolder className="folder-icons" />
            Project 1
          </li>
          <li className="list-item">
            <AiOutlineFolder className="folder-icons" />
            Project 1
          </li>
          <li className="list-item">
            <AiOutlineFolder className="folder-icons" />
            Project 1
          </li>
          <li className="list-item">
            <AiOutlineFolder className="folder-icons" />
            Project 1
          </li>
          <li className="list-item">
            <AiOutlineFolder className="folder-icons" />
            Project 1
          </li>
          <li className="list-item">
            <AiOutlineFolder className="folder-icons" />
            Project 1
          </li>
        </ul>
      </div>
    </div>
  );
}
