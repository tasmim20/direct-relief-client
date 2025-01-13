import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" py-16 ">
      <div className="hero   mx-auto ">
        <div className="grid lg:grid-cols-2 grid-cols-1 ">
          <div className=" lg:text-left mt-12 lg:mr-20">
            <h1 className="text-5xl font-bold">Let's make a change </h1>
            <h1 className="text-5xl font-bold mt-2 ">become a volunteer</h1>

            <div className="grid justify-start mt-4 mb-8">
              <Link to="/volunteer">
                {" "}
                <input
                  style={{
                    background:
                      "linear-gradient(135deg, #0c2b64 50%, #4facfe 100%)",
                  }}
                  className="btn w-full rounded-md px-10 text-white"
                  type="submit"
                  value="Join With Us"
                />
              </Link>
            </div>
          </div>
          <div className="card shrink-0 max-w-lg relative">
            <div className="relative">
              <img
                src="https://templatekit.tokomoo.com/gaveall/wp-content/uploads/sites/20/2021/01/Become-Volunteer.jpg"
                className="rounded-lg"
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
                alt="Your image alt text"
              />

              <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-10 rounded-lg"></div>
            </div>

            <div className="absolute -bottom-16  bg-white rounded-lg -left-20 hidden md:block">
              <img
                src="https://templatekit.tokomoo.com/gaveall/wp-content/uploads/sites/20/2021/01/Become-a-volunteer.png"
                className="rounded-lg  h-48 border shadow-2xl"
              />
              <div className="absolute top-0 left-0 w-full h-full p-3  rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
