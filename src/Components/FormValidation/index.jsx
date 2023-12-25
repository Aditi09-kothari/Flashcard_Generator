import * as Yup from "yup";

//Validation of form using yup.
export const formSchema = Yup.object({
  cardName: Yup.string().min(3, "Group Name must contain atleast 3 chars long").max(15).required("Please enter a Title"), // group name must contain at least 3 chars and max 15 chars, and it is required field.
  cardDesc: Yup.string().min(3, "Card Description Should be atleast 3 chars long").max(500).required("Please enter a Description"), //  Description must contain  at least 3 chars and max 15 chars, and it is required field.
  cardImg: Yup.mixed().required(" Required"), //it required field.
  terms: Yup.array( //this valididation for term 
   
    Yup.object({
      termName: Yup.string().min(3, "Term Name must be atleast 3 chars long").max(15).required("Please enter a Term Name"), //term name must contain atleast 3 chars and max 15 chars and it is required field
      termDef: Yup.string().min(3, "Term Definition must be atleast 3 Chars long").max(500).required("Please enter a Term definition"), 
      termImg: Yup.mixed(), // it excepts image bt it is not required field.
    })
  ),
});
