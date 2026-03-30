import { Outlet } from "react-router-dom";
import NavbrAdmin from "./pagesAdmin/NavbrAdmin";

function AdminLayout() {
  return (
    <>
      <NavbrAdmin />
      <Outlet />
    </>
  );
}

export default AdminLayout;