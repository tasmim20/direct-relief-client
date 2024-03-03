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
    <div className="">
      <h2 className="text-4xl font-bold text-black text-center pt-32 pb-10 ">
        Our Volunteers
      </h2>
      {isLoading && <p>Loading...</p>}
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
    </div>
  );
};

export default AboutUs;
