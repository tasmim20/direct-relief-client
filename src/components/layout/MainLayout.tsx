import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "@/pages/home/Footer";
import WelcomeModal from "../Modal/WelcomeModal";

const MainLayout = () => {
  return (
    <div>
      <div className="">
        <WelcomeModal />
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
