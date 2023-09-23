import { Outlet } from "react-router-dom";
import NavBar from "../components/Header/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
