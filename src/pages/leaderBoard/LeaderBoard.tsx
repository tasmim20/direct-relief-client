import Container from "@/components/Container";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetSuppliesQuery } from "@/redux/features/supply/supplyApi";

interface Donor {
  _id: string;
  name: string;
  amount: number;
}

const LeaderBoard = () => {
  const { data, isLoading } = useGetSuppliesQuery("");

  if (isLoading) {
    return <div>loading...</div>;
  }

  // Sort the donors by amount in descending order
  const sortedDonors = [...(data?.result || [])].sort(
    (a, b) => b.amount - a.amount
  );
  const topTenDonors = sortedDonors.slice(0, 10);

  return (
    <div className="pt-20">
      <h2 className="text-4xl text-black font-bold text-center my-10">
        Top 10 Donors
      </h2>
      {isLoading && <p>Loading...</p>}
      {topTenDonors.length > 0 && (
        <div className=" border p-0 rounded-2xl">
          <Container>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Donor's Name</TableHead>
                  <TableHead>Donation Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topTenDonors.map((donor: Donor) => (
                  <TableRow key={donor._id}>
                    <TableCell>{donor.name}</TableCell>
                    <TableCell className="font-medium">
                      {donor.amount}$
                    </TableCell>
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

export default LeaderBoard;
