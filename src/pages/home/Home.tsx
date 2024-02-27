import Container from "@/components/Container";
import About from "./About";
import Header from "./Header";
import HeroSection from "./HeroSection";

import Gallery from "./Gallery";
import Testimonial from "./testimonial/Testimonial";
import RecentDonation from "./RecentDonation";

const Home = () => {
  return (
    <div className="text-white">
      <Header />
      <Container>
        <RecentDonation />

        <Testimonial />

        <Gallery />

        <div className="divider divider-primary  font-bold text-5xl text-black">
          What We Do
        </div>
        <About />
        <div className="divider divider-primary  font-bold text-5xl text-black"></div>
        <HeroSection />
      </Container>
    </div>
  );
};

export default Home;
