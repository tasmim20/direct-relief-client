import { useState } from "react";
import { useGetSingleSupplyQuery } from "@/redux/features/supply/supplyApi";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentUser } from "@/redux/features/auth/authSlice";

const SupplyDetail = () => {
  const { id } = useParams<{ id: string }>(); // Retrieve the productId from the route params
  const { data, isLoading } = useGetSingleSupplyQuery(id);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const user = useAppSelector(useCurrentUser);
  console.log(user);

  const handleDonateNow = () => {
    // Logic to initiate donation process and open confirmation modal
    setShowConfirmationModal(true);
  };

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="py-20">
      <h2 className="text-center font-bold text-4xl mt-16 mb-8">
        Details about this Donation
      </h2>
      {isLoading && <p>Loading...</p>}
      {data && (
        <div className="hero mb-10 py-20">
          <div className="hero-content flex-col-reverse lg:flex-row-reverse">
            <img
              className="  rounded-lg lg:w-1/2 sm:w-full"
              alt="image"
              src={data.image}
            ></img>

            <div className="lg:pr-20 ">
              <p className="my-2 font-bold">{data.category}</p>
              <h1 className="lg:text-4xl text-2xl font-semibold">
                {data.title}
              </h1>

              <p className="py-6 mt-3">{data.description}</p>
              <p className="my-2 text-sm font-bold">Quantity: {data.amount}</p>
              <Button
                onClick={handleDonateNow}
                className="flex justify-start uppercase items-start  text-center"
                style={{ backgroundColor: "#0c2b64" }}
              >
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      )}
      {showConfirmationModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-sm">
            <p className="my-4">{data.category}</p>
            <p className="my-4">Quantity: {data.amount}</p>
            <h3 className="text-sm font-semibold mb-5">Your email:</h3>
            <div className="flex justify-end items-end">
              <button
                className="btn   text-white bg-red-800 text-sm rounded-none mr-2  text-center"
                onClick={() => setShowConfirmationModal(false)}
              >
                Cancel
              </button>
              <button
                className=" btn text-sm text-white bg-blue-900 rounded-none   text-center"
                onClick={() => {
                  setShowConfirmationModal(false);
                }}
              >
                <Link to="/dashboard" className="text-center">
                  Confirm
                </Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupplyDetail;
