import { useForm } from "react-hook-form";

import { useCreateSuppliesMutation } from "../../redux/features/supply/supplyApi";
import toast from "react-hot-toast";

const CreateSupply = () => {
  const { register, handleSubmit, reset } = useForm();

  const [createSupplies, { data, error }] = useCreateSuppliesMutation();
  console.log(error);
  console.log(data);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const body = {
      image: data.image,
      category: data.category,
      title: data.title,
      amount: data.amount,
      description: data.description,
    };
    console.log(body);

    const res = await createSupplies(body).unwrap();
    reset();
    toast.success("Your Supply is added in list");

    console.log(res);
  };

  return (
    <div className="flex py-20 justify-center  font-semibold mx-auto text-black max-h-full">
      <form
        className="border  p-10 my-10 card shadow-blue-900 shadow-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="md:text-4xl font-semibold text-black md:mb-6 text-center text-3xl p-6">
          Add Supply
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="mb-4">
            <label htmlFor="pictureUrl" className="block font-bold">
              Image of the donation
            </label>
            <input
              {...register("image")}
              type="text"
              id="image"
              name="image"
              className="input input-bordered border-gray-500 bg-transparent pr-10 "
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block font-bold">
              Title
            </label>
            <input
              {...register("title")}
              type="text"
              id="title"
              name="title"
              className="input input-bordered border-gray-500 bg-transparent pr-10 "
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block font-bold">
              Category
            </label>
            <select
              {...register("category")}
              id="category"
              name="category"
              className="input input-bordered border-gray-500 bg-transparent pr-10 "
              required
            >
              <option value="">Select Category</option>
              <option value=" Medical Supplies"> Medical Supplies</option>
              <option value="First Aid Kits">First Aid Kits</option>
              <option value="Medications">Medications</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block font-bold">
              Amount
            </label>
            <input
              {...register("amount")}
              type="number"
              id="amount"
              name="amount"
              className="input input-bordered border-gray-500 bg-transparent pr-10 "
              required
            />
          </div>
        </div>

        <div className="mb-4 text-center">
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
            className="btn text-white w-3/4 mx-auto"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateSupply;
