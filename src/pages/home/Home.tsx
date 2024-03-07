import Container from "@/components/Container";
import About from "./About";
import Header from "./Header";
import Gallery from "./Gallery";
import Testimonial from "./testimonial/Testimonial";
import RecentDonation from "./RecentDonation";
import Hero from "../aboutUs/Hero";
import Partner from "./Partner";

const Home = () => {
  return (
    <div className="text-white">
      <Header />
      <Container>
        <RecentDonation />

        <Testimonial />

        <Gallery />

        <About />
      </Container>
      <div className="  font-bold text-5xl text-black">
        <Partner />
      </div>
      <Container>
        <div className="text-black my-20 pb-16">
          <Hero />
        </div>
      </Container>
    </div>
  );
};

export default Home;
