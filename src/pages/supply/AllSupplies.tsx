import { useGetSuppliesQuery } from "@/redux/features/supply/supplyApi";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface EventType {
  image: string;
  category: string;
  title: string;
  _id: number;
  amount: number;
  productId: string;
}

const AllSupplies = () => {
  const { data, isLoading } = useGetSuppliesQuery("");

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <Container>
      <div className="pt-32">
        <h2 className="text-3xl text-center font-bold mb-10">All Supplies</h2>
      </div>
      {isLoading && <p>Loading...</p>}
      {data && data.result && (
        <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {data.result.map((item: EventType, index: number) => (
            <Card
              key={index}
              className="border-none shadow-md"
              style={{ backgroundColor: "#f6f7f9" }}
            >
              <CardHeader className="flex justify-center items-center">
                <figure className="-m-6">
                  <img className="" src={item.image} alt="" />
                </figure>
              </CardHeader>

              <CardContent>
                <h2 className="flex justify-start items-start font-semibold mt-2 text-blue-900">
                  {item.title}
                </h2>
                <h2 className="flex justify-start items-start text-sm font-semibold mb-2 mt-1">
                  {item.category}
                </h2>
              </CardContent>
              <CardFooter className="flex justify-between">
                <h2 className="text-sm font-bold">Quantity: {item.amount}</h2>
                <Button
                  className="text-center"
                  style={{ backgroundColor: "#0c2b64" }}
                >
                  <Link
                    to={`/supplies/${item._id}`}
                    state={{ supply: item }}
                    className="text-center"
                  >
                    View Detail
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </Container>
  );
};

export default AllSupplies;
