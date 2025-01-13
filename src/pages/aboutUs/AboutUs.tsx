import Container from "@/components/Container";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useGetVolunteerQuery } from "@/redux/features/volunteer/volunteerApi";
import HeroSection from "../home/HeroSection";
import Hero from "./Hero";
import OurMission from "./OurMission";

interface VolunteerType {
  _id: string;
  email: string;
  number: number;
  location: string;
}

const AboutUs = () => {
  const { data, isLoading } = useGetVolunteerQuery("");

  console.log(data);
  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="pt-10 mb-20">
      <div className="pt-16">
        <HeroSection />
      </div>
      <div className="pb-20">
        <h2 className="text-4xl font-bold text-center my-14">Our Mission</h2>
        <OurMission />
      </div>
      <h2 className="text-4xl font-bold text-black text-center pt-8 pb-16 ">
        Our Volunteers
      </h2>
      {isLoading && (
        <div className="py-20">
          <span className="loading loading-spinner loading-lg text-info"></span>
        </div>
      )}
      {data && data.result && (
        <div className=" border p-0 rounded-2xl">
          <Container>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Volunteer's Email</TableHead>
                  <TableHead>phone number</TableHead>
                  <TableHead>Location</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.result.map((item: VolunteerType) => (
                  <TableRow key={item._id}>
                    <TableCell>{item.email}</TableCell>
                    <TableCell className="font-medium">{item.number}</TableCell>
                    <TableCell>{item.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Container>
        </div>
      )}

      <div className="py-10">
        <Hero />
      </div>
    </div>
  );
};

export default AboutUs;
