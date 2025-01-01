import { Outlet } from "react-router-dom";
import "./Layout.scss";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
