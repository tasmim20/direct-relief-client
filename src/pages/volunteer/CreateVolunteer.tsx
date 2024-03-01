import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useCreateVolunteerMutation } from "@/redux/features/volunteer/volunteerApi";
import { useAppSelector } from "@/redux/hooks";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface User {
  email: string;
}
const CreateVolunteer = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const [createVolunteer, { data, error }] = useCreateVolunteerMutation();

  const currentUser = useAppSelector(useCurrentUser);
  const user: User | null = currentUser !== null ? (currentUser as User) : null;
  console.log(error);
  console.log(data);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const body = {
      email: data.email,
      number: data.number,
      location: data.location,
    };
    console.log(body);

    const res = await createVolunteer(body).unwrap();
    reset();
    toast.success("Volunteer successfully created");
    navigate("/about-us");

    console.log(res);
  };

  return (
    <div className="pt-28 flex justify-center items-center">
      <div>
        <h1 className="font-bold text-lime text-4xl text-center my-6 pb-4">
          Work as a Volunteer
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
              defaultValue={user?.email ?? ""}
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
              <span className="label-text text-black font-bold">
                Phone Number
              </span>
            </label>
            <input
              {...register("number")}
              name="number"
              type="number"
              placeholder="number"
              className="input input-bordered rounded-none  bg-white border-blue-900"
              required
            />
          </div>
          <div className="form-control mb-7">
            <label className="label">
              <span className="label-text text-black font-bold">location</span>
            </label>
            <input
              {...register("location")}
              name="location"
              type="location"
              placeholder="location"
              className="input input-bordered rounded-none  bg-white border-blue-900"
              required
            />
          </div>
          <input
            style={{ backgroundColor: "#0c2b64" }}
            className="btn w-full rounded-none text-white"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateVolunteer;
