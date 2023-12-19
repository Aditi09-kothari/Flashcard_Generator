import * as Yup from "yup";

export const Flashcardvalidation = Yup.object({
    creategroup: Yup.string().min(2).max(25).required("Please enter your group name"),

  adddescription: Yup.string().required("Please enter description"),

  inputs: Yup.string().required("Please enter your team name"),

 // adddefinition: Yup.string().required("Please enter definition"),
  
});