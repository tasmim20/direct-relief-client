import { useCreateTestimonialMutation } from "@/redux/features/testimonial/testimonialApi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const CreateTestimonial = () => {
  const { register, handleSubmit, reset } = useForm();

  const [CreateTestimonial, { data, error }] = useCreateTestimonialMutation();
  console.log(error);
  console.log(data);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const body = {
      name: data.name,
      profession: data.profession,
      image: data.image,
      description: data.description,
    };
    console.log(body);

    const res = await CreateTestimonial(body).unwrap();
    reset();
    toast.success("Testimonial successfully created");

    console.log(res);
  };
  return (
    <div className="flex py-20 justify-center  font-semibold mx-auto text-black max-h-full">
      <form
        className="border  p-10 my-10 card shadow-blue-900 shadow-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="md:text-4xl font-semibold text-black md:mb-6 text-center text-3xl p-6">
          Create Testimonial
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="mb-4">
            <label htmlFor="Donor" className="block font-bold">
              Donor Name
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              name="name"
              className="input input-bordered border-gray-500 bg-transparent pr-10 "
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="profession" className="block font-bold">
              Profession
            </label>
            <input
              {...register("profession")}
              type="text"
              id="profession"
              name="profession"
              className="input input-bordered border-gray-500 bg-transparent pr-10 "
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="pictureUrl" className="block font-bold">
            Image of the Donor
          </label>
          <input
            {...register("image")}
            type="text"
            id="image"
            name="image"
            className="input input-bordered border-gray-500 bg-transparent w-full pr-10 "
            required
          />
        </div>
        <div className="mb-4 ">
          <label htmlFor="description" className="block font-bold">
            Description of donation
          </label>
          <textarea
            {...register("description")}
            id="description"
            name="description"
            className="input input-bordered border-gray-500 bg-transparent pr-10 w-full h-20"
            required
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <input
            style={{ backgroundColor: "#0c2b64" }}
            className="btn text-white w-3/4 mx-auto uppercase"
            type="submit"
            value="Create"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateTestimonial;
