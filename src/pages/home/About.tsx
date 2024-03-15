import donation1 from "../../assets/images/d1.webp";

import { MoveRight } from "lucide-react";
import WhatWeDo from "./WhatWeDo";
import WhoWeAre from "./WhoWeAre";

const About = () => {
  return (
    <div className="text-black">
      <div>
        <WhoWeAre />
      </div>
      <div className=" text-center  font-bold text-5xl text-black pt-10">
        What We Do ?
      </div>
      <WhatWeDo />

      <div className="hero mb-10 py-20">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <img
            data-aos="fade-left"
            className="   rounded-lg lg:w-1/2 sm:w-full"
            src={donation1}
          ></img>

          <div data-aos="fade-right" className="lg:pr-20 ">
            <h1 className="lg:text-5xl text-3xl font-bold">Disaster Relief</h1>

            <p className="py-6 mt-3">
              Every day, Direct Relief prepares the most vulnerable communities
              <br /> worldwide for frequent, more destructive emergencies. And
              when disaster strike Direct Relief responds fast, effectively, and
              efficiently to get medical resources where they need to be to save
              lives.
              <div className="flex mt-3">
                {" "}
                <span className="font-bold">Learn More</span>
                <span>
                  <MoveRight className="text-blue-900" />
                </span>
              </div>
              <div className="flex">
                {" "}
                <span className="font-bold">
                  Principle of Emergency Response
                </span>
                <span>
                  <MoveRight className="text-blue-900" />
                </span>
              </div>
              <div className="flex">
                {" "}
                <span className="font-bold">Active Emergencies</span>
                <span>
                  <MoveRight className="text-blue-900" />
                </span>
              </div>
              <div className="flex">
                {" "}
                <span className="font-bold">Global operations</span>
                <span>
                  <MoveRight className="text-blue-900" />
                </span>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
