const WhatWeDo = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      className="grid lg:grid-cols-3 grid-cols-1 max-w-6xl gap-10 mx-auto my-16 pb-16"
    >
      <div className="card  shadow-md border hover:shadow-2xl">
        <figure className="px-10 pt-8">
          <img
            src="https://templatekit.tokomoo.com/gaveall/wp-content/uploads/sites/20/2021/01/Our-mission-03.png"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center my-5">
          <h2 className="card-title text-2xl pb-5">
            Help each <br /> other
          </h2>
        </div>
      </div>
      <div className="card   shadow-md border hover:shadow-2xl">
        <figure className="px-10 pt-8">
          <img
            src="https://templatekit.tokomoo.com/gaveall/wp-content/uploads/sites/20/2021/01/Our-mission-02.png"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center my-5">
          <h2 className="card-title text-2xl pb-5">
            Provide better <br /> medical supply
          </h2>
        </div>
      </div>
      <div className="card   shadow-md border hover:shadow-2xl">
        <figure className="px-10 pt-8">
          <img
            src="https://templatekit.tokomoo.com/gaveall/wp-content/uploads/sites/20/2021/01/Our-mission-01.png"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center my-5">
          <h2 className="card-title text-2xl pb-5">
            Give happiness <br /> to others
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
