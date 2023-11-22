import * as Yup from "yup";
// import { addDays } from "date-fns";
export const taskShema = Yup.object({
  body: Yup.string()
    .trim()
    .matches(/.{2,64}/, "length 2...64")
    .required("required"),
  deadLine: Yup.date().min(new Date(), "wrong date").required("required"),
});
