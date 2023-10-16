import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import "./css/main.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import EditUsers from "./pages/EditUsers";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<EditUsers />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
