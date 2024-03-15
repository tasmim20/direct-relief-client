import Container from "@/components/Container";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import {
  useCreateCommentMutation,
  useGetCommentQuery,
} from "@/redux/features/comment/commentApi";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface User {
  email: string;
}
interface CommentType {
  _id: string;
  message: string;
  name: string;
  date: string;
}
const Community: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const [createComment, { error }] = useCreateCommentMutation();
  const { data, isLoading } = useGetCommentQuery("");

  const currentUser = useAppSelector(useCurrentUser);
  const user: User | null = currentUser !== null ? (currentUser as User) : null;
  console.log(error);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const date = new Date().toDateString();
    const body = {
      date: date,
      name: data.name,
      email: data.email,
      message: data.message,
    };
    console.log(body);

    const res = await createComment(body).unwrap();
    reset();
    toast.success("comment done");

    console.log(res);
  };

  console.log(data);
  if (isLoading) {
    return <div>loading...</div>;
  }

  //style
  const inputStyle: React.CSSProperties = {
    border: "none",
    borderBottom: "1px solid blue",
    outline: "none",
    backgroundColor: "white",
  };
  return (
    <Container className="pt-20">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div className=" col-span-1"></div>
        <div className=" col-span-2">
          {isLoading && <p>Loading...</p>}
          {data && data.result && (
            <div>
              {data.result.map((item: CommentType) => (
                <div className="flex justify-between my-10 ">
                  <div className="flex  lg:flex-row ">
                    <div className="">
                      <div className="w-20  rounded-full">
                        <img
                          className=""
                          src="https://cdn-icons-png.freepik.com/256/3033/3033143.png?ga=GA1.1.154320969.1678957845&"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div className=" mt-3 ms-3">
                        <h1 className=" font-bold mb-1 ">{item.name}</h1>
                        <h1 className=" text-sm">{item.message}</h1>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-blue-900">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="">
            <h1 className="text-3xl font-bold mt-10 mb-5">
              Share your gratitude
            </h1>
            <div
              className="grid lg:grid-cols-2 sm:grid-cols-1
         gap -10"
            >
              <input
                {...register("name")}
                name="name"
                type="text"
                className="sm:my-10 mb-10"
                placeholder="Name"
                style={inputStyle}
              />
              <input
                defaultValue={user?.email ?? ""}
                {...register("email")}
                name="email"
                type="text"
                className=" lg:ms-10 sm:my-10"
                placeholder="Email"
                style={inputStyle}
              />
            </div>
            <div>
              <textarea
                {...register("message")}
                name="message"
                style={inputStyle}
                className="textarea w-full  bg-white textarea-info rounded"
                placeholder="Message"
              />
            </div>
            <div className="flex justify-center items-center my-8">
              <input
                style={{
                  background:
                    "linear-gradient(135deg, #0c2b64 50%, #4facfe 100%)",
                }}
                className="btn rounded-none  text-white"
                type="submit"
                value="Post Comment "
              />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Community;
