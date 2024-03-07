import { Check } from "lucide-react";

const Benefit = () => {
  return (
    <div
      className=" pt-20 pb-16"
      style={{
        backgroundImage:
          "linear-gradient(to right top, #0c2b64, #0c2f70, #0d337c, #0f3788, #133b94)",
      }}
    >
      <div className="hero text-white max-w-6xl mx-auto ">
        <div className="grid lg:grid-cols-2 grid-cols-1 ">
          <div className="card shrink-0  max-w-lg ">
            <iframe
              className="h-72 mb-16 rounded-md"
              src="https://www.youtube.com/embed/rmUBJZBZMsA"
              title="Disaster Relief - Around the World. Across the Street."
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className=" lg:text-left ">
            <h1 className="text-5xl font-bold">What will you get</h1>
            <h1 className="text-5xl font-bold mt-2 ">(Benefit)</h1>
            <div className="grid grid-cols-[20px_1fr] mt-8 ">
              <Check className=" w-[25px] font-extrabold hover:text-orange-700  " />
              <div className="flex justify-start items-start ">
                <p className="ms-3 " style={{ color: "#FFFFFF94" }}>
                  Get new connections between volunteers
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[20px_1fr] mt-3 ">
              <Check className=" w-[25px] font-extrabold hover:text-orange-700  " />
              <div className="flex justify-start items-start ">
                <p className="ms-3" style={{ color: "#FFFFFF94" }}>
                  Take part in humanitarian matters
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[20px_1fr] mt-3 ">
              <Check className=" w-[25px] font-extrabold hover:text-orange-700  " />
              <div className="flex justify-start items-start ">
                <p className="ms-3" style={{ color: "#FFFFFF94" }}>
                  Study and work together
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[20px_1fr] mt-3">
              <Check className=" w-[25px] font-extrabold hover:text-orange-700  " />
              <div className="flex justify-start items-start ">
                <p className="ms-3" style={{ color: "#FFFFFF94" }}>
                  Match volunteers to the specific skills you need
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[20px_1fr] mt-3 ">
              <Check className=" w-[25px] font-extrabold hover:text-orange-700 " />
              <div className="flex justify-start items-start ">
                <p className="ms-3" style={{ color: "#FFFFFF94" }}>
                  Automatically send documents to potential volunteers
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[20px_1fr] mt-3 ">
              <Check className=" w-[25px] font-extrabold hover:text-orange-700 " />
              <div className="flex justify-start items-start ">
                <p className="ms-3" style={{ color: "#FFFFFF94" }}>
                  Recruit volunteers from our corporate partners
                </p>
              </div>
            </div>
            <p className="py-6 text-blue-950">
              {" "}
              ..................................................................................
              ...............................................................................................................................................
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
