import { Pencil } from "lucide-react";
import { useState } from "react";

interface UpdateServiceProps {
  event: {
    _id: number;
    title: string;
  };
  handleUpdate: (eventId: number, updateValue: string) => void;
}

const UpdateSupply: React.FC<UpdateServiceProps> = ({
  event,
  handleUpdate,
}) => {
  const [update, setUpdate] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <label htmlFor="my-modal" onClick={handleOpen}>
        <Pencil />
      </label>

      <input
        type="checkbox"
        id="my-modal"
        className="modal-toggle"
        checked={open}
        onChange={handleClose}
      />
      <div className={`modal ${open ? "open" : ""}`}>
        <div className="modal-box bg-white shadow-xl text-black">
          <h3 className="font-bold text-lg py-4">Update Service</h3>

          <input
            defaultValue={event.title}
            onChange={(e) => setUpdate(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-lg border-2 shadow-md rounded-none input-lime bg-gray-200 w-full max-w-xs"
          />

          <div className="modal-action">
            <label
              htmlFor="my-modal"
              className="btn btn-outline text-red-500  hover:bg-red-800 hover:text-white  rounded-none"
              onClick={handleClose}
            >
              Cancel
            </label>
            <label
              htmlFor="my-modal"
              className="btn bg-black hover:text-white rounded-none border-none"
              onClick={() => {
                handleUpdate(event._id, update);
                handleClose();
              }}
            >
              Done
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSupply;
