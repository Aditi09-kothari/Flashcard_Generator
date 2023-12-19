import React, { useState } from 'react'
import { useFormik } from "formik";
import { AiOutlineFile } from 'react-icons/ai';
import { Flashcardvalidation } from "../Flashcardvalidation";
//import { FaPlus } from 'react-icons/fa';
//import { useDispatch } from 'react-redux';
//import { saveFormData } from '../redux/action';

const initialValues = {
  creategroup: "",
  titleimage: "",
  adddescription: "",
  enterteam: "",  // Provide a default value for enterteam
  adddefinition: "",  // Provide a default value for adddefinition
  teamimage: "",
};
export default function CreateNew() {
  const [previewImage, setPreviewImage] = useState(null);
  //const dispatch = useDispatch();
  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      // Use FileReader to read the selected image and set it as preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      // Clear the preview if no file is selected
      setPreviewImage(null);
    }

    // Additional logic, if needed
    // setFieldValue('teamimage', file);
    // handleBlur();
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues,
      validationSchema: Flashcardvalidation,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        action.resetForm();
      },

    });

  const isUpperFieldsFilled = values.creategroup && values.adddescription;
  return (

    <form onSubmit={handleSubmit} className='bg-whitesmoke p-4 mx-4 md:mx-8 lg:mx-20 mt-4 border-none box-content formbox'>
      <div className=" bg-whitesmoke flex">
        <div className=" bg-whitesmoke mr-4 " >
          <label htmlFor="creategroup" className="  block text-gray-500 bg-whitesmoke" >Create Group <span className="text-red-500 bg-whitesmoke ">*</span>
          </label>
          <input type="text" id="creategroup" name="creategroup" className="w-80  mt-2 px-2 py-1 border rounded bg-whitesmoke border-gray-500 rounded focus:outline-none " value={values.creategroup}
            onChange={handleChange}
            onBlur={handleBlur} />
          {errors.creategroup && touched.creategroup ? (
            <p className="bottom-0 left-0 h-0 overflow-hidde text-red-500 bg-whitesmoke text-xs">{errors.creategroup}</p>
          ) : null}
          {/* <ErrorMessage name="creategroup" component="div" className=" bottom-0 left-0 h-0 overflow-hidde text-red-500 bg-whitesmoke text-xs" /> */}
        </div>
        <div className="bg-whitesmoke p-4 rounded flex items-center box-content w-64 mt-5 border-gray-500 rounded focus:outline-none">
          <label
            htmlFor="titleimage"
            className="flex items-center flex-row-reverse cursor-pointer text-blue-600 bg-whitesmoke px-1 py-2 rounded"
          >
            <AiOutlineFile className="mr-2 bg-whitesmoke" />
            <span></span>
            <input
              type="file"
              id="titleimage"
              name="titleimage"
              className="hidden"
              //value={values.titleimage}
              onChange={(event) => {
                setFieldValue('titleimage', event.currentTarget.files[0]);
              }}
              onBlur={handleBlur}
            />


          </label>
          <label htmlFor="titleimage" className="text-blue-600 bg-whitesmoke text-center">Upload Image</label>

        </div>
      </div>
      <div className='bg-whitesmoke'>
        <label htmlFor="adddescription" className="block text-gray-500 mt-3 bg-whitesmoke" > Add description <span className="text-red-500 bg-whitesmoke ">*</span></label>
        <input as="textarea" id="adddescription" name="adddescription" className="w-3/4 h-20 px-2 py-1  mt-1 border border-gray-500 rounded focus:outline-none bg-whitesmoke" placeholder="Describe the roles,responsibility, skills required for the job and help candidate understand role better." value={values.adddescription} onChange={handleChange}
          onBlur={handleBlur} />
        {errors.adddescription && touched.adddescription ? (
          <p className="bottom-0 left-0 h-0 overflow-hidde text-red-500 bg-whitesmoke text-xs">{errors.adddescription}</p>
        ) : null}

      </div>

      <div className={`box-content custombox p-4 mt-16 bg-whitesmoke ${isUpperFieldsFilled ? '' : 'opacity-50 pointer-events-none'}`}>

        <div className="flex flex-row bg-whitesmoke">
          {/* Serial Number Circle */}
          {/* <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white mr-4">
                        {index + 1}
                      </div> */}
          {/* Team Field */}
          <div className="bg-whitesmoke">
            <label htmlFor=" enterteam" className="block text-gray-500 my-1 bg-whitesmoke">
              Enter Team <span className="text-red-500 bg-whitesmoke">*</span>
            </label>
            <input
              type="text"
              id='enterteam'
              name='enterteam'
              className="w-80 px-2 py-1 border border-gray-500 rounded focus:outline-none bg-whitesmoke"
              value={values.enterteam}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.enterteam && touched.enterteam ? (
              <p className="bottom-0 left-0 h-0 overflow-hidde text-red-500 bg-whitesmoke text-xs">{errors.enterteam}</p>
            ) : null}
          </div>

          {/* Definition Field */}
          <div className="bg-whitesmoke">
            <label htmlFor="adddefinition" className="block text-gray-500 ml-4 bg-whitesmoke">
              Add Definition <span className="text-red-500 bg-whitesmoke">*</span>
            </label>
            <input
              as="textarea"
              id="adddefinition"
              name="adddefinition"
              className="w-80 h-auto px-2 py-1 ml-4 border border-gray-500 rounded focus:outline-none bg-whitesmoke"
              value={values.adddefinition}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.adddefinition && touched.adddefinition ? (
              <p className="bottom-0 left-0 h-0 overflow-hidde text-red-500 bg-whitesmoke text-xs">{errors.adddefinition}</p>
            ) : null}
          </div>
          {/* Image Field */}
          <div className="bg-whitesmoke p-4 rounded flex items-center box-content w-64 mt-5 border-gray-500 rounded focus:outline-none">
            <label
              htmlFor="teamimage"
              className="flex items-center flex-row-reverse cursor-pointer text-blue-600 bg-whitesmoke px-1 py-2 rounded"
            >
              <input
                type="file"
                id="teamimage"
                name="teamimage"
                className="hidden"
                onChange={handleImageChange}
              />

            </label>
            <label htmlFor="teamimage" className="text-blue-600 bg-whitesmoke text-center ml-5">
              Select Image
            </label>

            {/* Display the image preview */}
            {previewImage && (
              <div>
                <img src={previewImage} alt="Preview" style={{ maxWidth: '70px', maxHeigh: '70px' }} />
              </div>
            )}
          </div>
        </div>

        {/* Add more button */}
        {/*                 
        <button
          type="button"
          className="bg-whitesmoke border-none text-blue-500 py-2 px-4 rounded flex items-center"
          onClick={() => {
            setFieldValue('teams', [
              ...values.teams,
              { team: '', definition: '', image: null },
            ]);
          }}
          disabled={!isUpperFieldsFilled}
        >
          <FaPlus className="mr-1 bg-whitesmoke text-xs" />
          Add more
        </button>
       */}
      </div>

      <div className="flex items-center justify-center mt-5">
        <button type="submit" className="bg-red-700 text-white py-2 px-4 rounded"  >
          Create
        </button>
      </div>
    </form>

  )
}

