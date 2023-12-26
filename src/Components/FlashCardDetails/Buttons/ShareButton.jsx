import React from "react";
import Modal from "./Modal";
import { MdShare } from "react-icons/md";

function ShareButton() {
  // share button component to handle the sharing of the term page link
  return (
    <div
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
      className="hover:bg-[var(--color-red)] text-[var(--color-red)] rounded-md border-[var(--color-red)] border-2 px-6 py-1 w-[16rem] hover:text-white transition-all ease-in-out duration-500 focus:ring-4 shadow-md focus:ring-[var(--color-red)] grid place-content-center"
    >
      <div>
        <span>
          <MdShare size={`1rem`} className="inline-block mb-1 mr-2" />
        </span>
        <span>Share</span>
      </div>
      {/* calling the modal on click of share button */}
      <Modal />
    </div>
  );
}

export default ShareButton;
