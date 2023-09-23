import { Outlet } from "react-router-dom";
import NavBar from "../components/Header/NavBar";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
