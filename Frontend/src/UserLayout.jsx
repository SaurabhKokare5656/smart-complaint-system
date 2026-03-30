import { Outlet } from "react-router-dom";
import Navbr from "./pages/Navbr";

function UserLayout() {
  return (
    <>
      <Navbr />
      <Outlet />
    </>
  );
}

export default UserLayout;