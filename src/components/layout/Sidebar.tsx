import { cn } from "@/lib/utils";
import { CalendarDays, Home, NotebookPen } from "lucide-react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Sidebar = () => {
  return (
    <div>
      <Navbar />
      <aside
        className=" col-span-4 h-screen text-white font-bold sticky top-0 left-0 overflow-auto p-4 lg:p-5"
        style={{ backgroundColor: "#a2b5d7" }}
      >
        <nav className="flex flex-col gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-blue-800 pt-16 transition-all flex items-center gap-2",
                {
                  "bg-dark-gray text-blue": isActive,
                }
              )
            }
          >
            <Home className="shrink-0" />
            <span className="truncate"> Home</span>
          </NavLink>

          <NavLink
            to="/dashboard/supplies"
            className={({ isActive }) =>
              cn(
                "p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-blue-800 transition-all flex items-center gap-2",
                {
                  "bg-dark-gray text-blue": isActive,
                }
              )
            }
          >
            <CalendarDays className="shrink-0" />
            <span className="truncate">All Supply</span>
          </NavLink>
          <NavLink
            to="/dashboard/create-supply"
            className={({ isActive }) =>
              cn(
                "p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-blue-800 transition-all flex items-center gap-2",
                {
                  "bg-dark-gray text-blue": isActive,
                }
              )
            }
          >
            <NotebookPen className="shrink-0" />
            <span className="truncate">Create Supply</span>
          </NavLink>
          <NavLink
            to="/dashboard/create-testimonial"
            className={({ isActive }) =>
              cn(
                "p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-blue-800 transition-all flex items-center gap-2",
                {
                  "bg-dark-gray text-blue": isActive,
                }
              )
            }
          >
            <NotebookPen className="shrink-0" />
            <span className="truncate">Create Testimonial</span>
          </NavLink>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
