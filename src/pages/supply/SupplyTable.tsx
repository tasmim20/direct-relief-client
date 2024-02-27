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

  // triggering a delete
  // const handleDelete = async (id: number) => {
  //   try {
  //     await deleteSupply(id);
  //   } catch (error) {
  //     console.error("Error deleting data:", error);
  //   }
  // };

  // //update function
  // const { mutateAsync: updateData, isSuccess: updateSuccess } = useMutation({
  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   mutationFn: async (dataToUpdate: any) => {
  //     const { id, data } = dataToUpdate;

  //     try {
  //       const response = await axios.put(
  //         `https://event360-two.vercel.app/services/${id}`,
  //         { title: data }
  //       );

  //       if (response.status === 200) {
  //         toast.success("update successfully");
  //         return response.data;
  //       }

  //       console.error("Unexpected status code:", response.status);
  //       throw new Error("Unexpected response from the server");
  //     } catch (error) {
  //       console.error("Error updating data:", error);
  //       throw error;
  //     }
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["services"] });
  //   },
  //   mutationKey: ["updateService"],
  // });

  // console.log(updateSuccess);

  // //triggering a update
  const handleUpdate = async (id: number, body: string) => {
    try {
      await updateSupply({ id, body });
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-between pt-32">
        <h2 className="text-3xl text-center font-bold ">All Supplies</h2>
        <Button
          className="flex justify-start uppercase items-start  text-center"
          style={{ backgroundColor: "#0c2b64" }}
        >
          <Link to="/dashboard/create-supply" className="text-center px-10">
            Create Service
          </Link>
        </Button>
      </div>
      {isLoading && <p>Loading...</p>}
      {data && data.result && (
        <div className="mt-10 border p-0 rounded-2xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Supply Title</TableHead>
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
                  <TableCell className="font-medium">{item.category}</TableCell>
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
  );
};

export default SupplyTable;
