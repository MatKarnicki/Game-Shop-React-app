import { Field, Formik, ErrorMessage } from "formik";
import { date, object, string } from "yup";
import { useContext } from "react";
import { PageContext } from "../contexts/PageContextProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DeveloperFormContext } from "../contexts/DeveloperFormContextProvider";

const DeveloperSchema = object().shape({
  name: string()
    .min(1, "Developer name is too short")
    .max(250, "Developer name is too long")
    .required("Developer name is required")
    .trim(),
  formed_in: date()
    .required("Date is required")
    .min("1960-01-01", "Invalid date")
    .max(new Date(), "Date can't be in the future"),

  background_image: string().url().required("Please enter image url"),
});
const modifyDeveloperSchema = object().shape({
  name: string()
    .min(1, "Developer name is too short")
    .max(250, "Developer name is too long")
    .required("Developer name is required")
    .trim(),
  newname: string()
    .min(1, "Developer name is too short")
    .max(250, "Developer name is too long")
    .nullable()
    .trim(),
  newformed_in: date()
    .nullable()
    .min("1960-01-01", "Invalid date")
    .max(new Date(), "Date can't be in the future"),
  newbackground_image: string().url().nullable(),
});
const DeveloperForm = () => {
  const { setModifyDeveloper, modifyDeveloper } =
    useContext(DeveloperFormContext);
  const { gamesDispatch, developersDispatch, developers, games } =
    useContext(PageContext);
  const fieldStyle = {
    marginBottom: "0.5em",
    width: "350px",
    height: "30px",
    fontSize: "18px",
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          width: 520,
          justifyContent: "space-between",
          marginLeft: "2em",
          marginBottom: "1em",
        }}
      >
        <button
          style={{ width: "250px", height: 50, cursor: "pointer" }}
          onClick={() => setModifyDeveloper(false)}
        >
          Add Developer
        </button>
        <button
          style={{ width: "250px", height: 50, cursor: "pointer" }}
          onClick={() => setModifyDeveloper(true)}
        >
          Modify Developer
        </button>
      </div>
      <div style={{ marginLeft: "30px" }}>
        {modifyDeveloper ? <h2>MODIFY DEVELOPER</h2> : <h2>ADD DEVELOPER</h2>}
        <Formik
          initialValues={{
            name: "",
            formed_in: "1960-01-01",
            background_image: "",
            newname: "",
            newformed_in: "",
            newbackground_image: "",
          }}
          validationSchema={
            modifyDeveloper ? modifyDeveloperSchema : DeveloperSchema
          }
          onSubmit={(values) => {
            if (
              (!modifyDeveloper &&
                developers.some(
                  (developer) =>
                    developer.name.toLowerCase() === values.name.toLowerCase()
                )) ||
              (modifyDeveloper &&
                developers.some(
                  (developer) =>
                    developer.name.toLowerCase() ===
                    values.newname.toLowerCase()
                ))
            ) {
              toast.error("This developer already exists");
              return;
            }
            modifyDeveloper
              ? toast.success("Succesfully modified developer")
              : toast.success("Succesfully added developer");
            const developerid = parseInt(
              Math.floor(Math.random() * 1000) * games.length
            );
            if (modifyDeveloper) {
              developersDispatch({
                type: "MODIFY_DEVELOPER",
                payload: {
                  id: developerid,
                  name: values.name.trim(),
                  newname: values.newname.trim(),
                  newformed_in: values.newformed_in,
                  newbackground_image: values.newbackground_image.trim(),
                },
              });
              gamesDispatch({
                type: "MODIFY_GAMES_DEVELOPER_INFO",
                payload: {
                  name: values.name.trim(),
                  newname: values.newname.trim(),
                },
              });
            } else {
              developersDispatch({
                type: "ADD_DEVELOPER",
                payload: {
                  id: developerid,
                  name: values.name.trim(),
                  formed_in: values.formed_in,
                  background_image: values.background_image.trim(),
                },
              });
            }
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <br />
              <label>Developer Name: </label>
              <br />
              {modifyDeveloper ? (
                <>
                  <Field style={fieldStyle} name="name" as="select">
                    <option value="">Select a developer to modify</option>
                    {developers?.map((developer) => (
                      <option key={developer.name} value={developer.name}>
                        {developer.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="name"></ErrorMessage>
                  <br />
                  <label>New name:</label>
                  <br />
                  <Field style={fieldStyle} name="newname" as="input" />
                  <ErrorMessage name="newname"></ErrorMessage>
                </>
              ) : (
                <>
                  <Field style={fieldStyle} name="name" as="input" />
                  <ErrorMessage name="name"></ErrorMessage>
                </>
              )}
              <br />
              <label>
                {modifyDeveloper ? "New Formed in Date:" : "Formed in Date:"}
              </label>
              <br />
              <Field
                style={fieldStyle}
                name={modifyDeveloper ? "newformed_in" : "formed_in"}
                as="input"
                type="date"
              />
              <ErrorMessage
                name={modifyDeveloper ? "newformed_in" : "formed_in"}
              ></ErrorMessage>
              <br />
              <label>
                {modifyDeveloper
                  ? "New Background image URL"
                  : "Background image"}
              </label>
              <br />
              <Field
                style={fieldStyle}
                name={
                  modifyDeveloper ? "newbackground_image" : "background_image"
                }
                as="input"
              />
              <ErrorMessage
                name={
                  modifyDeveloper ? "newbackground_image" : "background_image"
                }
              ></ErrorMessage>
              <br />
              <button style={{ cursor: "pointer" }} type="submit">
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default DeveloperForm;
