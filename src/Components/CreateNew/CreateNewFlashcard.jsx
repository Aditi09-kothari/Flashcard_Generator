import React from "react";
import CardImage from "./CardImage";
import Terms from "./Terms";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { formSchema } from "../FormValidation";
import { useDispatch } from "react-redux";
import { cardAdd } from "../../redux/flashcards";
import { successToast } from "../ToastifyNotification";

//component for creating new flashcard
export default function CreateNewFlashcard() {
  const dispatch = useDispatch(); // dispatch to update state using redux.

  //defining initialvalues.
  const initialValues = {
    cardName: "",
    cardDesc: "",
    cardImg: "",
    terms: [{ id: 0, termName: "", termDef: "", termImg: "" }],
  };
  return (
    <div className="md:mt-10 px-5 2xl:pl-44 2xl:pr-[20%] xl:px-20 my-5">
      <div>
        {/* use formik to handle form data */}
        <Formik
          initialValues={initialValues}
          validationSchema={formSchema} // form validation using yup
          onSubmit={(values, actions) => {
            actions.resetForm(); // after submiting the values it resetting the form to no values
            dispatch(cardAdd({ values })); // dispatching the value to store
            successToast("Flashcard Created", "top-center"); // this will display the success messaage
          }}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <div className=" bg-white p-4 rounded-md space-y-4 border-none box-content">
                <div className="grid md:flex">
                  <div
                    className={`flex flex-col md:order-first ${props.values.cardImg === "" ? "order-1" : "order-2"
                      }`}
                  >
                    {/* CGroup name for the card */}
                    <h1 className="font-semibold text-slate-500 mt-2">
                      Create Group*
                    </h1>
                    <Field
                      className="w-80  mt-2 px-2 py-1 border rounded bg-whitesmoke border-gray-500 rounded focus:outline-none"
                      type="text"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.cardName}
                      name="cardName"
                      placeholder="Please enter Group Name."
                    />
                    {/* display error message  */}
                    {
                      <p className="mx-auto text-sm text-[var(--color-red)]">
                        <ErrorMessage name={`cardName`} />
                      </p>
                    }
                  </div>
                  <div
                    className={`grid place-content-center md:inline-block md:mx-20 ${props.values.cardImg === "" ? "order-2" : "order-1"
                      } `}
                  >
                    {/* Card image component - for image & errors related to Image */}
                    <CardImage />
                  </div>
                </div>
                {/* Card description Field - for Card description & errors related to description */}
                <div className="flex flex-col">
                  <span className="font-semibold text-slate-500">
                    Add Description*
                  </span>
                  <Field
                    as="textarea"
                    className="w-full border-slate-400 resize-none   rounded-md md:w-3/4 md:h-40 p-2 bg-gray-100 border text-md"
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.cardDesc}
                    name="cardDesc"
                    placeholder={
                      "Please enter Group Description"
                    }
                  />
                  <div>
                    <span className="mx-5 text-sm text-[var(--color-red)]">
                      <ErrorMessage name={`cardDesc`} />
                    </span>
                  </div>
                </div>
              </div>
              {/*when cardName and carddesc is not filled term component is remain disable.  */}
              <div className={`bg-white ${props.values.cardName && props.values.cardDesc ? '' : 'opacity-50 pointer-events-none'}`}  >
                {/*terms component for handling all the terms details */}
                <Terms values={props.values} />
              </div>
              {/* submit button for the form */}
              <div className="grid place-content-center">
                <button
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  data-testid="create"
                  className="mt-6 border-[var(--color-red)]  border w-32  p-2  text-white rounded-lg shadow-md hover:-translate-y-px  bg-[var(--color-red)] hover:text-white transition-all ease-in-out grid place-content-center font-semibold"
                  type="submit"
                >
                  Create
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
