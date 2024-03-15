import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, useCurrentToken } from "@/redux/features/auth/authSlice";
import who from "../../assets/images/who1.png";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.style.setProperty("--foreground-rgb", "var(--foreground-rgb-dark)");
      root.style.setProperty(
        "--background-start-rgb",
        "var(--background-start-rgb-dark)"
      );
      root.style.setProperty(
        "--background-end-rgb",
        "var(--background-end-rgb-dark)"
      );
    } else {
      root.style.setProperty("--foreground-rgb", "var(--foreground-rgb-light)");
      root.style.setProperty(
        "--background-start-rgb",
        "var(--background-start-rgb-light)"
      );
      root.style.setProperty(
        "--background-end-rgb",
        "var(--background-end-rgb-light)"
      );
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  const navigate = useNavigate();
  const token = useAppSelector(useCurrentToken);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    // <header
    //   style={{ backgroundColor: "#0c2b64" }}
    //   className="h-20 fixed z-[999] w-full text-white font-extrabold"
    // >
    //   <nav className="w-full h-full max-w-[1230px] px-[20px] mx-auto flex justify-between items-center">
    //     <div className="flex justify-start">
    //       <img className="w-16 sm:w-12 rounded-full" src={who} alt="Logo" />
    //       <h2 className="text-xl pl-2 pt-2">Direct-Relief</h2>
    //     </div>

    //     <ul className="space-x-5">
    //       <NavLink to="/">Home</NavLink>
    //       <NavLink to="supplies">All Supplies</NavLink>
    //       {token ? (
    //         <>
    //           <NavLink to="/volunteer">Volunteer</NavLink>
    //           <NavLink to="/about-us">About Us</NavLink>
    //           <NavLink to="/community">Community</NavLink>
    //           <NavLink to="/leader-board">Leaderboard</NavLink>
    //           <NavLink to="/dashboard">Dashboard</NavLink>
    //           <button
    //             onClick={handleLogout}
    //             className="btn text-white bg-red-700 rounded-sm text-sm"
    //           >
    //             Logout
    //           </button>
    //         </>
    //       ) : (
    //         <NavLink to="login">Login</NavLink>
    //       )}
    //       <button
    //         className="theme-toggle m-3 mr-6"
    //         onClick={toggleTheme}
    //         aria-label={isDarkMode ? "Light Mode" : "Dark Mode"}
    //       >
    //         {isDarkMode ? <FaSun /> : <FaMoon />}
    //       </button>
    //     </ul>
    //   </nav>
    // </header>
    <div
      style={{ backgroundColor: "#0c2b64" }}
      className=" navbar uppercase h-20  fixed z-[999] w-full text-white font-bold text-sm"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-slate-400"
          >
            <li>
              {" "}
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="supplies">All Supplies</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/volunteer">Volunteer</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/community">Community</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/leader-board">Leaderboard</NavLink>
            </li>
            {token ? (
              <>
                <li>
                  {" "}
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li onClick={handleLogout} className=" bg-red-900 ">
                  <p>Logout</p>
                </li>
              </>
            ) : (
              <li>
                <NavLink to="login">Login</NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="flex lg:ps-5 justify-start">
          <img className="w-16 sm:w-12 rounded-full" src={who} alt="Logo" />
          <h2 className="text-xl ps-2 pt-2">Direct-Relief</h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ps-10">
          <li>
            {" "}
            <NavLink
              className={({ isActive }) =>
                cn(
                  "p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-blue-800 transition-all flex items-center gap-2",
                  {
                    "bg-blue-950 text-blue-800": isActive,
                  }
                )
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className={({ isActive }) =>
                cn(
                  "p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-blue-800 transition-all flex items-center gap-2",
                  {
                    "bg-blue-950 text-blue-800": isActive,
                  }
                )
              }
              to="supplies"
            >
              All Supplies
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className={({ isActive }) =>
                cn(
                  "p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-blue-800 transition-all flex items-center gap-2",
                  {
                    "bg-blue-950 text-blue-800": isActive,
                  }
                )
              }
              to="/volunteer"
            >
              Volunteer
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className={({ isActive }) =>
                cn(
                  "p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-blue-800 transition-all flex items-center gap-2",
                  {
                    "bg-blue-950 text-blue-800": isActive,
                  }
                )
              }
              to="/about-us"
            >
              About Us
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className={({ isActive }) =>
                cn(
                  "p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-blue-800 transition-all flex items-center gap-2",
                  {
                    "bg-blue-950 text-blue-800": isActive,
                  }
                )
              }
              to="/community"
            >
              Community
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className={({ isActive }) =>
                cn(
                  "p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-blue-800 transition-all flex items-center gap-2",
                  {
                    "bg-blue-950 text-blue-800": isActive,
                  }
                )
              }
              to="/leader-board"
            >
              Leaderboard
            </NavLink>
          </li>
          {token ? (
            <>
              <li>
                {" "}
                <NavLink
                  className={({ isActive }) =>
                    cn(
                      "p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-blue-800 transition-all flex items-center gap-2",
                      {
                        "bg-blue-950 text-blue-800": isActive,
                      }
                    )
                  }
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
              <li onClick={handleLogout} className=" bg-red-900 ">
                <p>Logout</p>
              </li>
            </>
          ) : (
            <li>
              <NavLink
                className={({ isActive }) =>
                  cn(
                    "p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-blue-800 transition-all flex items-center gap-2",
                    {
                      "bg-blue-950 text-blue-800": isActive,
                    }
                  )
                }
                to="login"
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <button
          className="theme-toggle mr-6"
          onClick={toggleTheme}
          aria-label={isDarkMode ? "Light Mode" : "Dark Mode"}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
