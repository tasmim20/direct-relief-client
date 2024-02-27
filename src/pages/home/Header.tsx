const Header = () => {
  return (
    <div>
      <div
        className=" text-white max-h-full   w-full"
        style={{
          backgroundImage: `url("https://cdn.who.int/media/images/default-source/who_homepage/displaced-palestinians-gaza-2024.tmb-1920v.jpg?sfvrsn=1e2e7777_1")`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="lg:pt-96 sm:pt-72 md:pt-72 text-center  ">
          <h2 className="btn rounded-none  hover:bg-blue-900 text-white text-2xl lg:text-5xl font-bold bg-blue-900 ">
            Direct Relief now works for the people who was suffered in
          </h2>
          <p className="btn rounded-none hover:bg-blue-900 text-white  text-2xl lg:text-5xl text-center font-bold bg-blue-900 mt-4 ">
            flood
          </p>
        </div>
        <div className="text-center mt-4">
          <h2 className="btn bg-blue-900 border-none rounded-none font-bold text-xl text-white text-center">
            Read more
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
