const WhatTheySay = () => {
  return (
    <div className="pb-5 pt-20">
      <h1 className="text-5xl  font-bold pb-10">What they say</h1>
      <div className="grid mx-auto gap-10 lg:grid-cols-2 grid-cols-1 ">
        <div className="card  border shadow-md rounded-md">
          <div className="card-body pt-10">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam
            </p>
            <div className="flex mt-3">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src="https://templatekit.tokomoo.com/gaveall/wp-content/uploads/sites/20/2021/01/Testi-01.jpg" />
                </div>
              </div>
              <div className="mt-3 ms-3">
                <h2 className="font-bold">Sarah Doe</h2>
                <p className="text-sm">Volunteer from Australia</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card border  shadow-md rounded-md">
          <div className="card-body pt-10">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam
            </p>
            <div className="flex mt-3">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src="https://templatekit.tokomoo.com/gaveall/wp-content/uploads/sites/20/2021/01/Testi-02.jpg" />
                </div>
              </div>
              <div className="mt-3 ms-3">
                <h2 className="font-bold">Angelina Nathan</h2>
                <p className="text-sm">Volunteer from Ireland</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatTheySay;
