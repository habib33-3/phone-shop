import { Outlet } from "react-router-dom";
import NavBar from "../components/Header/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <NavBar />
      <div className="py-5">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
