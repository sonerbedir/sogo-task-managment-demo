import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Task from "./views/Task";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tasks" element={<Task />} />
      </Routes>
    </>
  );
}

export default App;
