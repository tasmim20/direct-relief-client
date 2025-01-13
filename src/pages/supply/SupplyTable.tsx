import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Trash2 } from "lucide-react";

import { Link } from "react-router-dom";

import {
  useDeleteSupplyMutation,
  useGetSuppliesQuery,
  useUpdateSupplyMutation,
} from "@/redux/features/supply/supplyApi";
import UpdateSupply from "./UpdateSupply";

interface EventType {
  image: string;
  category: string;
  title: string;
  _id: number;
  amount: number;
}

const SupplyTable = () => {
  const { data, isLoading } = useGetSuppliesQuery("");
  const [deleteSupply] = useDeleteSupplyMutation();
  const [updateSupply] = useUpdateSupplyMutation();
  console.log(data);
  if (isLoading) {
    return <div>loading...</div>;
  }

  // //triggering a update
  const handleUpdate = async (id: number, body: string) => {
    try {
      await updateSupply({ id, body });
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="">
      <div className="mx-auto max-w-4xl">
        <div className="max-w-4xl flex justify-between lg:flex-row  pt-32">
          <h2 className="text-3xl sm:text-center  font-bold ">All Supplies</h2>
          <Button
            className="flex  uppercase items-end  text-center"
            style={{
              background: "linear-gradient(135deg, #0c2b64 50%, #4facfe 100%)",
            }}
          >
            <Link to="/dashboard/create-supply" className="text-center px-10">
              Create Service
            </Link>
          </Button>
        </div>

        {isLoading && (
          <div className="py-20">
            <span className="loading loading-spinner loading-lg text-info"></span>
          </div>
        )}
        {data && data.result && (
          <div className="mt-10 border p-0 rounded-2xl ">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Supply Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Edit Supply</TableHead>
                  <TableHead className="text-right">Remove Supply</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.result.map((item: EventType) => (
                  <TableRow key={item._id}>
                    <TableCell>{item.title}</TableCell>
                    <TableCell className="font-medium">
                      {item.category}
                    </TableCell>
                    <TableCell>{item.amount}</TableCell>
                    <TableCell>
                      <Button>
                        <UpdateSupply
                          handleUpdate={handleUpdate}
                          event={item}
                        ></UpdateSupply>
                      </Button>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteSupply(item._id);
                        }}
                        className="bg-red-700"
                      >
                        <Trash2 className="" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupplyTable;
