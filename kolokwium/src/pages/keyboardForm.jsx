import { Formik, Field, Form, ErrorMessage } from "formik";
import { boolean, date, number, object, string } from "yup";
import { useKeyboardDispatch } from "./GameContext";

const KeyboardForm = () => {
  const dispatch = useKeyboardDispatch();
  const validateSchema = object({
    keyboardName: string()
      .required("Keyboard name is required")
      .matches(/^[A-Z]*/, "Names start with uppercase"),
    keyboardGaming: boolean(),
    dateOfProduction: date()
      .required("Please submit date")
      .max(new Date(), "Cant add keyboards that weren't released"),
    price: number()
      .min(1, "We cant give keyboards for free")
      .max(999, "Its too expensive"),
    color: string()
      .min(3, "use real names")
      .max(20, "This color is too long so its not real"),
  });
};
const initialValues = {
  keyboardName: "",
  keyboardGaming: "",
  dateOfProduction: "",
  price: "",
  color: "",
  dispatchType: "MODIFY_KEYBOARD",
};

<Formik validateSchema={validateSchema} initialValues={initialValues}>
  {({ values }) => {
    <Form>
      <div>
        <label htmlFor="keyboardName">Name</label>
        <Field id="keyboardName" type="text" name="keyboardName"></Field>
        <ErrorMessage name="keyboardName"></ErrorMessage>
      </div>
      <div>
        <label htmlFor="keyboardGaming">Name</label>
        <Field id="keyboardGaming" type="text" name="keyboardGaming"></Field>
        <ErrorMessage name="keyboardGaming"></ErrorMessage>
      </div>
      <div>
        <label htmlFor="dateOfProduction">Name</label>
        <Field
          id="dateOfProduction"
          type="text"
          name="dateOfProduction"
        ></Field>
        <ErrorMessage name="dateOfProduction"></ErrorMessage>
      </div>
      <div>
        <label htmlFor="price">Name</label>
        <Field id="price" type="text" name="price"></Field>
        <ErrorMessage name="price"></ErrorMessage>
      </div>
      <div>
        <label htmlFor="color">Name</label>
        <Field id="color" type="text" name="color"></Field>
        <ErrorMessage name="color"></ErrorMessage>
      </div>
      <label htmlFor="dispatchType">What Do You Want To Do?</label>
      <Field id="dispatchType" type="select" name="dispatchType">
        <option value="ADD_KEYBOARD">Add</option>
        <option value="MODIFY_KEYBOARD">Modify</option>
        <option value="DELETE_KEYBOARD">Delete</option>
        <option value="SEARCH_KEYBOARD">Search</option>
      </Field>
      <br />
      <button
        type="submit"
        onSubmit={(values) => {
          dispatch({
            type: values.dispatchType,
            payload: {
              name: values.keyboardName,
              gaming: values.keyboardGaming,
              date: values.dateOfProduction,
              price: values.price,
              color: values.color,
            },
          });
        }}
      >
        OK
      </button>
    </Form>;
  }}
</Formik>;
export default KeyboardForm;
