import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import "./css/main.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
