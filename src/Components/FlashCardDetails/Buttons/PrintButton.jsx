import React from "react";
import { MdOutlinePrint } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setPrint } from "../../../redux/print";
import { successToast } from "../../ToastifyNotification";

function PrintButton() {
  const dispatch = useDispatch();
  const printing = () => {
    dispatch(setPrint(1)); // changing the state to printing to change layout of the website to get a clean print
    setTimeout(() => {
      window.print(); // printing the current window
      dispatch(setPrint(0)); // resetting the state to not printing so that we get the default page layout
      successToast("Print Order Created", "bottom-left"); // toasting the print order created message
    }, 300);
  };
  return (
    <div
      onClick={printing}
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      className="hover:bg-[var(--color-red)] text-[var(--color-red)] rounded-md border-[var(--color-red)] border-2 px-6 py-1 hover:text-white transition-all ease-in-out duration-500 focus:ring-4 shadow-md focus:ring-[var(--color-red)] grid place-content-center"
    >
      <div>
        <div className="inline-block mr-2">
          <MdOutlinePrint size={`1rem`} className="grid place-content-center" />
        </div>
        <div className="inline-block">
          <span>Print</span>
        </div>
      </div>
    </div>
  );
}

export default PrintButton;
