import React from "react";
import { useFormikContext } from "formik";
import { MdOutlineDeleteForever } from "react-icons/md";
import { errorToast } from "../ToastifyNotification";

export default function TermImage(props) {
  const formikProps = useFormikContext(); // formik context cause handling formik values via a child component
  
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
    !IMAGE_FORMATS.includes(e.target.files[0].type) // if image type is not supported, toast file not supported
  ) {
    errorToast("Image format not supported", "top-center");
  } else if (IMAGE_FORMATS.includes(e.target.files[0].type)) {
    // else set the termImg to data blob
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = () => {
      formikProps.setFieldValue(
        `terms[${props.index}].termImg`,
        fileReader.result
      );
    };
  }
}
  return (
    <div>
      {props.term.termImg === "" ? (
        // in case the termImg is a empty string, then show the select img button
        <label htmlFor={`img${props.index}`}>
          <div
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="mt-7 mb-[4px] border-blue-600  border mx-auto w-32  p-2  text-blue-600 rounded-lg shadow-md  bg-white grid place-content-center font-semibold"
          >
            Select Image
          </div>
        </label>
      ) : (
        // else show the  image with delete button to reset the img to empty
        <div className="grid place-content-center md:flex  md:space-x-4 md:space-y-4 md:my-5 ">
          <div className="w-[130px] relative p-4 overflow-hidden flex">
            <MdOutlineDeleteForever
              className="absolute top-4 -right-0.5 cursor-pointer"
              color="slate-500"
              size={"1.2rem"}
              onClick={() =>
                formikProps.setFieldValue(`terms[${props.index}].termImg`, "")
              }
            />
            <label htmlFor={`img${props.index}`}>
              <img
                className="border-2 border-slate-500 border-solid rounded-md min-w-[95px] min-h-[90px]  max-w-[120px] max-h-[95px]"
                src={props.term.termImg}
                alt={props.term.termName}
              />
            </label>
          </div>
        </div>
      )}
      {/*input field for the image */}
      <input
        type="file"
        name={`terms.${props.index}.termImg`}
        id={`img${props.index}`}
        className="hidden"
        onChange={handleImageUpload}
      />
    </div>
  );
}
