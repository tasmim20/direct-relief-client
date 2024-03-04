const Header = () => {
  return (
    <div className="">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://cdn.who.int/media/images/default-source/who_homepage/displaced-palestinians-gaza-2024.tmb-1920v.jpg?sfvrsn=1e2e7777_1)",
        }}
      >
        <div className=" text-center text-neutral-content">
          <div className="">
            <div className="pt-20 ">
              <h2 className=" rounded-none  hover:bg-blue-900 text-white text-4xl  lg:text-5xl font-bold bg-blue-900 ">
                Direct Relief now works for the people who was suffered in
              </h2>
              <p className="btn rounded-none hover:bg-blue-900 text-white  text-2xl lg:text-5xl text-center font-bold bg-blue-900 my-5">
                flood
              </p>
            </div>
            <div className="text-center ">
              <h2 className="btn bg-blue-900 border-none rounded-none font-bold text-xl text-white text-center">
                Read more
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
