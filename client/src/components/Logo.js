import React from "react";
import { Link } from "react-router-dom";
export default function Logo({className}) {
  return (
    <>
      <Link to="/login" className={className}>
        <h1>SOGO</h1>
      </Link>
    </>
  );
}
