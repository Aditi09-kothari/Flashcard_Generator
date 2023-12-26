import React from "react";
import PrintButton from "./Buttons/PrintButton";
import DownloadButton from "./Buttons/DownloadButton";
import ShareButton from "./Buttons/ShareButton";
export default function Buttons() {
  // component to handle all the buttons - share, print and download
  return (
    <div>
      <div className="min-w-[150px]  max-w-[300px] p-4 pt-0 rounded-md grid place-content-center md:mt-5 md:bottom-0 xl:relative">
        <div className="flex flex-col space-y-4 font-semibold">
          <div className="bg-white">
            {/* calling the share button component */}
            <ShareButton />
          </div>
          <div className="bg-white">
            {/* calling the print button component */}
            <PrintButton />
          </div>
          <div>
            <div className="bg-white">
              {/* calling the download button component */}
              <DownloadButton />
            </div>
            <span className="text-xs text-slate-500 grid place-content-center ">
              Images other than JPG not supported
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
