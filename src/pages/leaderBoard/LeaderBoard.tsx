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
    <div className="py-20 max-w-4xl mx-auto">
      {isLoading && <p>Loading...</p>}
      {topTenDonors.length > 0 && (
        <div className=" border p-0 rounded-2xl">
          <h2 className="text-5xl ml-4 text-blue-950 font-semibold  my-10">
            Leader Board
          </h2>
          <Container>
            <Table className=" border-none ">
              <TableHeader
                style={{
                  background:
                    "linear-gradient(135deg, #0c2b64 40%, #4facfe 100%)",
                }}
                className="border-4 border-blue-800 "
              >
                <TableRow>
                  <TableHead className="border-4 border-blue-900 text-white">
                    Donor's Name
                  </TableHead>
                  <TableHead className="border-4 border-blue-900 text-white">
                    Donation Amount
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className=" border-2 border-blue-900">
                {topTenDonors.map((donor: Donor) => (
                  <TableRow
                    className=" border-2 border-blue-900"
                    key={donor._id}
                  >
                    <TableCell className="bg-blue-50 border border-blue-900   ">
                      {donor.name}
                    </TableCell>
                    <TableCell className="bg-blue-50 border border-blue-900">
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
