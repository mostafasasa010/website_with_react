import { Outlet } from "react-router-dom";
import DashHeader from "../components/DashHeader";
import DashSide from "../components/DashSide";

function Dashboard() {
  return (
    <>
      <DashHeader />
      <div className="dashboard">
        <DashSide />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Dashboard;
