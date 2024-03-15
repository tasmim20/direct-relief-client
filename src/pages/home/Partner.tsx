const Partner = () => {
  return (
    <div
      className=" pt-20 pb-16"
      style={{
        backgroundImage:
          "linear-gradient(to right top, #0c2b64, #0c2f70, #0d337c, #0f3788, #133b94)",
      }}
    >
      <h2
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="text-5xl font-bold text-center text-white"
      >
        Our Partner
      </h2>
      <div className=" py-16">
        <div className="hero text-white  mx-auto ">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-20 ">
            <div>
              <img
                src="https://templatekit.tokomoo.com/gaveall/wp-content/uploads/sites/20/2021/01/Partner-05.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://templatekit.tokomoo.com/gaveall/wp-content/uploads/sites/20/2021/01/Partner-04.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://templatekit.tokomoo.com/gaveall/wp-content/uploads/sites/20/2021/01/Partner-03.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://templatekit.tokomoo.com/gaveall/wp-content/uploads/sites/20/2021/01/Partner-02.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://templatekit.tokomoo.com/gaveall/wp-content/uploads/sites/20/2021/01/Partner-01.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
