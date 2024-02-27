import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "@/pages/home/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
