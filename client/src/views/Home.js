// import List from "../components/List/List";
import LeftNavigatiponMenu from "../components/LeftNavigationMenu";
import SearchHeader from "../components/SearchHeader";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Projects from "./Projects";

export default function Home() {
  return (
    <div className="wrapper">
      <LeftNavigatiponMenu />
      <div className="dashboard-container-item">
        <SearchHeader />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}
