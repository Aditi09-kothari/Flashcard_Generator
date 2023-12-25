import React from "react";
import { useFormikContext, ErrorMessage } from "formik";
import { MdOutlineDeleteForever, MdUploadFile } from "react-icons/md";
import { errorToast } from "../ToastifyNotification";

//component to upload card image, preview the card image and also check the formate of image.
export default function CardImage() {
  const formikProps = useFormikContext();

  //check the format of the image while uploading image by user.
  const IMAGE_FORMATS = [
    "image/gif",
    "image/webp",
    "image/svg+xml",
    "image/avif",
    "image/apng",
    "image/jpg",
    "image/jpeg",
    "image/png",
  ];
  //function for handling the image upload and display the preview
  const handleImageUpload = (e) => {
    if (
      e.target.files[0] &&
      !IMAGE_FORMATS.includes(e.target.files[0].type) // check for the file format, if the file format is not match then show the erroer
    ) {
      errorToast("Image format not supported", "top-center");
    } else if (IMAGE_FORMATS.includes(e.target.files[0].type)) {
      // else display tha image
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.onload = () => {
        formikProps.setFieldValue(`cardImg`, fileReader.result);
      };
    }
  }
  return (
    <div>
      {formikProps.values.cardImg === "" ? (
        //if cardImg is empty string, then display message that upload the image
        <label htmlFor={`cardImg`}>
          <div
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="mt-6 border border-black  border w-42  p-2  text-[var(--color-red)] rounded-lg shadow-md hover:-translate-y-px hover:bg-white hover:text-white transition-all ease-in-out grid place-content-center font-semibold"
          >
            <div>
              <div className="inline-block ml-3 text-blue-600">
                <MdUploadFile />
              </div>
              <span className="mx-3 text-blue-600 ">Upload Image</span>
            </div>
          </div>
          <div className="grid place-content-center text-sm text-[var(--color-red)]">
            <ErrorMessage name={`cardImg`} />
          </div>
        </label>
      ) : (
        //show the image with delete icon 
        <div className="grid place-content-center md:flex  md:space-x-4 md:space-y-4 md:my-5">
          <div className="w-[130px] relative px-4 overflow-hidden flex">
            <MdOutlineDeleteForever
              className="absolute top-0 -right-1.5 text-slate-500 cursor-pointer "
              size={"1.8rem"}
              onClick={() => formikProps.setFieldValue(`cardImg`, "")}
            />
            <label htmlFor={`cardImg`}>
              <img
                className="border-2 border-slate-500 border-solid rounded-md min-w-[95px] min-h-[95px]  max-w-[120px] max-h-[90px]"
                src={formikProps.values.cardImg}
                alt={formikProps.values.cardImg}
              />
            </label>
          </div>
        </div>
      )}
      {/* Input field for uploading/ reading the image */}
      <input
        type="file"
        name={`cardImg`}
        id={`cardImg`}
        className="hidden"
        onChange={handleImageUpload}
      />
    </div>
  );
}