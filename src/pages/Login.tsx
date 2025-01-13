import { useForm } from "react-hook-form";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { verifyToken } from "@/utils/verifyToken";
import login1 from "../assets/images/Tablet login.gif";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();

  const [login, { data, error }] = useLoginMutation();
  console.log("data=>", data);
  console.log(error);
  // console.log(data);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    const res = await login(userInfo).unwrap();

    console.log(res);

    const user = verifyToken(res.token);
    console.log(user);
    dispatch(setUser({ user: user, token: res.token }));
    toast.success("Successfully Login");
    navigate("/");
  };

  return (
    <div className="pt-32  flex justify-evenly flex-col-reverse lg:flex-row-reverse">
      <div className="mb-20">
        <h1 className="font-bold text-lime text-4xl text-center my-6 pb-4">
          Login Now
        </h1>
        <form
          className=" border  p-16 shadow-blue-900  shadow-sm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-control mb-7">
            <label className="label">
              <span className="label-text text-black font-bold">
                Your Email
              </span>
            </label>
            <input
              {...register("email")}
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered rounded-none  bg-white border-blue-900"
              required
            />
          </div>
          <div className="form-control mb-7">
            <label className="label">
              <span className="label-text text-black font-bold">Password</span>
            </label>
            <input
              {...register("password")}
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered rounded-none  bg-white border-blue-900"
              required
            />
          </div>
          <input
            style={{ backgroundColor: "#0c2b64" }}
            className="btn w-full rounded-none text-white"
            type="submit"
            value="Login"
          />
          <div className="flex justify-around mt-6 ">
            <p>Need an account..?</p>
            <p>
              <Link
                to="/register"
                className=" font-semibold hover:link-hover text-blue-900"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div>
        {" "}
        //image <img className="   rounded-lg" src={login1}></img>
      </div>
    </div>
  );
};

export default Login;
