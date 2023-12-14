import { Field, Formik } from "formik";
import { usePlaceholderDispatch } from "@/pages/placeholderContext";
import * as Yup from "yup";

// definicja schematu, według którego przy submicie zostanie wykonana walidacja (Yup)
const PlaceholderSchema = Yup.object().shape({
  string: Yup.string()
    .min(3, "String is too short")
    .max(50, "String is too long")
    .required("String is required")
    .matches(/^[a-zA-Z ]*$/),
  boolean: Yup.boolean(),
  number: Yup.number()
    .min(0, "Number is too low")
    .round()
    .max(999, "Number is too high"),
  date: Yup.date()
    .min("1970-01-01", "Invalid date")
    .max(new Date(), "Date can't be in the future"),
});

// definicja komponentu formularza
const PlaceholderFormFormikYup = () => {
  const dispatch = usePlaceholderDispatch();
  return (
    <>
      <Formik
        // początkowe wartości
        initialValues={{
          string: "",
          boolean: false,
          select: "",
          number: 0,
          date: "",
          dispatchType: "MODIFY",
        }}
        // przekazujemy schemat
        validationSchema={PlaceholderSchema}
        // definiujemy co się stanie przy submicie
        onSubmit={(values) => {
          dispatch({
            type: values.dispatchType,
            payload: {
              string: values.placeholderString,
              boolean: values.placeholderBoolean === true,
              number: values.placeholderNumber,
              select: values.placeholderSelect,
              date: values.placeholderDate
                ? new Date(values.placeholderDate)
                : values.placeholderDate,
            },
          });
        }}
      >
        {({ handleSubmit }) => (
          // formularz z użyciem <Field>
          // gdy korzystamy z <Field> nie trzeba podawać wszystkich wartości (onChange, onBlur),
          // ponieważ formik zrobi to sam
          <form onSubmit={handleSubmit}>
            <label>String: </label>
            <Field name="placeholderString" as="input" />
            <br />
            <label>Boolean: </label>
            <Field name="placeholderBoolean" as="input" type="checkbox" />
            <br />
            <label>Number: </label>
            <Field name="placeholderNumber" as="input" />
            <br />
            <label>Select one: </label>
            <Field name="placeholderSelect" as="select">
              <option value="RED">Red</option>
              <option value="YELLOW">Yellow</option>
              <option value="BLUE">Blue</option>
            </Field>
            <br />
            <label>Date: </label>
            <Field name="placeholderDate" as="input" type="date" />
            <br />
            <label>What do you want to do? </label>
            <Field name="dispatchType" as="select">
              <option value="ADD">Add</option>
              <option value="MODIFY">Modify</option>
              <option value="DELETE">Delete</option>
            </Field>
            <br />
            <button type="submit">OK</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default PlaceholderFormFormikYup;
