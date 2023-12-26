import React from "react";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { successToast } from "../../ToastifyNotification";
import { useSelector } from "react-redux";

export default function DynamicLinkBar() {
  const { link } = useSelector((state) => state.link); // state for handling Links in the Link bar
  const handleCopy = () => {
    window.navigator.clipboard.writeText(link); // copy the link in the state to the browser clipboard
    successToast("Link Copied", "top-center"); // toast the link copied message on top
  };
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg inline-flex justify-around w-[100%]">
      <div className="py-[4%] px-4 inline-block text-md rounded-l-lg text-slate-500">
        Link:
      </div>
      <div className="m-1 inline-block overflow-auto w-[80%] text-center py-[2.5%] shadow-inner shadow-gray rounded-r-md text-black">
        {link}
      </div>
      <div
        className="mx-2 w-6 text-blue-500 grid place-content-center cursor-pointer"
        onClick={handleCopy}
      >
        <HiOutlineClipboardDocumentCheck size={30} />
      </div>
    </div>
  );
}
