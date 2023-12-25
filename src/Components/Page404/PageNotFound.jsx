//component for error 404 page not found when user enter wrong url

import React from "react";
import error from "../../assets/error404.png";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="md:mt-14 px-5 2xl:pl-44 2xl:pr-[20%] xl:px-20 my-5 h-[60vh] grid place-content-center">
      <div className="lg:ml-20">
        <div>
          <img
            src={error}
            alt="Error 404, Page not found"
            style={{ height: "50vh" }}
          />
        </div>
        <div className="grid place-content-center text-center">
          <span className="font-bold italic text-2xl">
            The Page you are looking for does not exist!
          </span>
          {/*link to the home page(createNew page ) */}
          <Link
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="mt-6 border-slate-500  border w-38  p-2  rounded-lg bg-[var(--color-red)] text-white grid place-content-center font-semibold"
            to="/"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
