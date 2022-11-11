import React from "react";
import List from "../components/List/List";
import Date from "../components/Date/Date"

export default function Dashboard() {
  return (
    <>
      <Date/>
      <div className="dashboard-list-container">
        <div className="list-box">
          <List />
        </div>
        <div className="list-box">
          <List />
        </div>
      </div>
    </>
  );
}
