import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useCreateVolunteerMutation } from "@/redux/features/volunteer/volunteerApi";
import { useAppSelector } from "@/redux/hooks";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import WhatTheySay from "./WhatTheySay";
import Container from "@/components/Container";
import Benefit from "./Benefit";
import HeroSection from "./HeroSection";

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
      name: data.name,
      profession: data.profession,
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
    <div className=" pt-10">
      <div className="mt-32 mb-16">
        <HeroSection />
      </div>
      <div className="mt-32 mb-16">
        <Benefit />
      </div>
      <Container className="mx-auto max-w-6xl">
        <WhatTheySay />
      </Container>
      <div className=" text-black py-20 ">
        <div className=" lg:flex-row-reverse">
          <div className=" max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <div className=" text-black">
              <h1 className="text-5xl  font-bold pb-10">
                Interested in becoming <br /> our volunteer?
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 pb-5 text-black">
                  <input
                    {...register("name")}
                    type="text"
                    placeholder=" Your Name"
                    name="name"
                    className="input input-ghost rounded-md sm:max-w-full bg-transparent   border-gray-500  w-full"
                  />

                  <input
                    defaultValue={user?.email ?? ""}
                    {...register("email")}
                    type="text"
                    placeholder=" Your Email"
                    name="email"
                    className="input input-ghost bg-transparent  w-full rounded-md border border-gray-500  "
                  />
                  <input
                    {...register("profession")}
                    type="text"
                    placeholder=" Your Profession"
                    name="profession"
                    className="input input-ghost bg-transparent  w-full rounded-md border border-gray-500  "
                  />
                  <input
                    {...register("number")}
                    type="number"
                    placeholder=" Phone Number"
                    name="number"
                    className="input input-ghost bg-transparent  w-full rounded-md border border-gray-500  "
                  />
                </div>

                <textarea
                  {...register("location")}
                  name="location"
                  className="textarea rounded-md textarea-ghost bg-transparent    border-gray-500 w-full h-40"
                  placeholder=" Your Location"
                ></textarea>

                <div className="grid justify-start mt-4">
                  <input
                    style={{
                      background:
                        "linear-gradient(135deg, #0c2b64 50%, #4facfe 100%)",
                    }}
                    className="btn w-full rounded-md px-10 text-white"
                    type="submit"
                    value="Submit Now"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateVolunteer;
