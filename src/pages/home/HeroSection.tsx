import { Button } from "@/components/ui/button";
import donation from "../../assets/images/World Humanitarian Day (1).gif";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="text-black">
      <div className="hero">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <img className="   rounded-lg" src={donation}></img>

          <div className="lg:pr-10 ">
            <h1 className="lg:text-5xl text-3xl font-bold">Direct Relief</h1>

            <p className="py-6 mt-3">
              Direct Relief works in the Bangladesh and internationally to
              expand access to
              <br /> medicine and healthcare by equipping doctors and nurses
              with lifesaving <br /> medical resources Direct Relief supports
              communities in post disaster situation
              <br />
              disparities persist. Direct Relief extended more help to more
              people in post
              <br /> disaster in its 5-year history. voice.
            </p>
            <Button
              className="flex justify-start uppercase items-start  text-center"
              style={{ backgroundColor: "#0c2b64" }}
            >
              <Link to="/dashboard/create-supply" className="text-center">
                Donate Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
