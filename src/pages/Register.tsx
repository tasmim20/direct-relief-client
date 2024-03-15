import { useForm } from "react-hook-form";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { useSignUpMutation } from "../redux/features/auth/authApi";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import register1 from "../assets/images/Sign up.gif";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();

  const [signUp, { error }] = useSignUpMutation();
  console.log(error);
  // console.log(data);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    const res = await signUp(userInfo).unwrap();

    console.log(res);
    dispatch(setUser({ user: {}, token: res.token }));
    toast.success("Successfully Registered");
    navigate("/login");
  };

  return (
    <div className="pt-28 flex justify-evenly flex-col-reverse lg:flex-row-reverse">
      <div className="mt-16">
        {" "}
        <img className="   rounded-lg" src={register1}></img>
      </div>
      <div className="mb-20">
        <h1 className="font-bold text-lime text-4xl text-center my-6 pb-4">
          Register Now
        </h1>
        <form
          className=" border  p-16 shadow-blue-900  shadow-sm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-black font-bold">Your Name</span>
            </label>
            <input
              {...register("name")}
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered rounded-none  bg-white border-blue-900"
              required
            />
          </div>
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
            value="Register"
          />
          <div className="flex justify-around mt-6 ">
            <p>Already have an account..?</p>
            <p>
              <Link
                to="/login"
                className=" font-semibold hover:link-hover text-blue-900"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
