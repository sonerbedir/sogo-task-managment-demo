import React from 'react';
import Input from "./Input";
import {BsSearch} from "react-icons/bs"

export default function SearchHeader() {
  return (
    <div className="search-header">
        <div className="title">
          <h2>Dashboard</h2>
        </div>
        <div className="search">
          <Input
            type="text"
            className="search-input"
            placeholder="Search project"
          />
          <BsSearch className="search-svg" />
        </div>
      </div>
  )
}
