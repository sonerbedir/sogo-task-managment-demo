import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
// import Dashboard from "./views/Dashboard";
// import Projects from "./views/Projects";

// const user = [
//   {
//     name: "Soner",
//     surname: "Bedir",
//   },
// ];

function App() {
  // const navigate = useNavigate();
  return (
    <>
      {/* <Home/> */}
      {/* {user.length ? navigate("/") : navigate("/login")}
      {!user.length && <Header />} */}
      {/* <Header/> */}
      <Routes>
        <Route exact path="/*" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
