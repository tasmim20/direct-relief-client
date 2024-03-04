import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "@/pages/home/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
