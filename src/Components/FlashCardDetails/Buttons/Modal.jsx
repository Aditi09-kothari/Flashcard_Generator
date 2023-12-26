import React from "react";
import DynamicLinkBar from "./DynamicLinkBar";
import SocialButtons from "./SocialButtons";

export default function Modal() {
  //modal for displaying the Link and the related share buttons
  return (
    <div
      className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5
              className="text-xl font-medium leading-normal text-gray-800"
              id="exampleModalLabel"
            >
              Share Flashcard
            </h5>
            <button
              type="button"
              className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body relative p-4">
            <div>
              {/* the Dynamic link bar that will generate the current page link for sharing with a copy button */}
              <DynamicLinkBar />
            </div>
            <div>
              {/* the social buttons component to share the link to the specified social media */}
              <SocialButtons />
            </div>
          </div>
          <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button
              type="button"
              className="inline-block px-6 py-2.5 text-[var(--color-red)] border-2 border-solid border-[var(--color-red)] font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[var(--color-red)] hover:shadow-lg focus:bg-[var(--color-red)] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[var(--color-red)] active:shadow-lg transition duration-150 ease-in-out hover:text-white focus:text-white active:text-white"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
