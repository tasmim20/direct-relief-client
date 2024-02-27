import { Link, NavLink, useNavigate } from "react-router-dom";
import who from "../../assets/images/who1.png";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, useCurrentToken } from "@/redux/features/auth/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const token = useAppSelector(useCurrentToken);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <header
      style={{ backgroundColor: "#0c2b64" }}
      className="h-20  fixed z-[999] w-full text-white font-extrabold"
    >
      <nav className="w-full h-full max-w-[1230px] px-[20px] mx-auto flex justify-between items-center ">
        <div className="flex justify-start">
          <img className=" w-16 sm:w-12 rounded-full" src={who} />

          <h2 className="text-xl pl-2 pt-2 ">Direct-Relief</h2>
        </div>

        <ul className=" space-x-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="supplies">All Supplies</NavLink>
          {token ? (
            <>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <button onClick={handleLogout}>
                <Link
                  className="btn text-white bg-red-700 rounded-sm text-sm"
                  to="/logout"
                >
                  Logout
                </Link>
              </button>
            </>
          ) : (
            <NavLink to="login">Login</NavLink>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
