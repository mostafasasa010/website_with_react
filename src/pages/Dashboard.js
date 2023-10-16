import DashHeader from "../components/DashHeader";
import DashSide from "../components/DashSide";
import Users from "./Users";

function Dashboard() {
  return (
    <>
      <DashHeader />
      <div className="dashboard">
        <DashSide />
        <main className="main">
          <Users />
        </main>
      </div>
    </>
  );
}

export default Dashboard;
