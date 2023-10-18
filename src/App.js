import { Route, Routes } from "react-router-dom";
import "./css/main.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import EditUsers from "./pages/EditUsers";
import CreateUser from "./pages/CreateUser";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import RequierAuth from "./pages/auth/RequierAuth";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route element={<RequierAuth />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="users" element={<Users />} />
            <Route path="user/create" element={<CreateUser />} />
            <Route path="users/:id" element={<EditUsers />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
