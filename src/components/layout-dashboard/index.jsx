import { Outlet } from "react-router-dom";
import DashboardHeader from "../dashboard/dashboard-header";
import Sidebar from "../dashboard/dashboard-sidebar";

function LayoutDashboard() {
  return (
    <div className="max-w-[1600px] mx-auto">
      <DashboardHeader />
      <div className="grid grid-cols-[300px_minmax(0,1fr)] gap-x-10 p-10">
        <Sidebar />
        <div className="dashboard-children">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default LayoutDashboard;
