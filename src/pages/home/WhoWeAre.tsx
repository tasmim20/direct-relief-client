const WhoWeAre = () => {
  return (
    <div>
      <div className=" py-28 mb-10">
        <div className="hero  max-w-6xl mx-auto ">
          <div className="grid lg:grid-cols-2 grid-cols-1 ">
            <div className="card shrink-0 max-w-lg relative">
              <div className="relative">
                <img
                  src="https://img.freepik.com/free-photo/female-doctor-nurse-with-face-masks-walking-though-corridor-hospital_637285-9093.jpg?t=st=1709851251~exp=1709854851~hmac=fb224780d79da335359da9565b9b648198648ec4e428129a6f2168445ba677c9&w=996"
                  className="rounded-lg"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                  alt="Your image alt text"
                />

                <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-10 rounded-lg"></div>
              </div>

              <div className="absolute -bottom-10 p-2 bg-white rounded-lg left-32 hidden md:block">
                <img
                  src="https://templatekit.tokomoo.com/gaveall/wp-content/uploads/sites/20/2021/01/Who-we-are.png"
                  className="rounded-lg w-52 "
                />
                <div className="absolute top-0 left-0 w-full h-full p-3 shadow-md rounded-lg"></div>
              </div>
            </div>

            <div className=" lg:text-left mt-12 ">
              <h1 className="text-5xl font-bold">Who we are ? </h1>

              <p className="py-8">
                Direct Relief today announced the latest round of grants awarded
                from its Fund for Health Equity.Direct Relief Women is comprised
                of supporters in Santa Barbara, CA whose primary focus is on
                championing the Maternal Health programs of Direct Relief. The
                group has been instrumental in improving the lives of mothers
                and children globally.
              </p>
              <div className="grid justify-start mt-4">
                <input
                  style={{
                    background:
                      "linear-gradient(135deg, #0c2b64 50%, #4facfe 100%)",
                  }}
                  className="btn w-full rounded-md px-10 text-white"
                  type="submit"
                  value="Get Started"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
