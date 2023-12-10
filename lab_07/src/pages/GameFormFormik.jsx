import { Formik, Field, Form, ErrorMessage } from "formik";
import { boolean, date, number, object, string } from "yup";
import { useGameDispatch } from "./GameContext";

const GameFormFormikYup = ({ selectedGame }) => {
  const dispatch = useGameDispatch();
  let futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 30);
  const validationSchema = object({
    gameName: string()
      .required("Game name is required")
      .matches(/^[A-Z]+/, "Names must start uppercased"),
    gameYear: date()
      .max(futureDate, "date cant be larger than month into future")
      .min(new Date(), "You have to start today"),
    gamePlatform: string().required("Game platform is required"),
    myScore: number()
      .min(1, "Score cant be lower than 1")
      .max(10, "score cant be higher than 10"),
    gameFinished: boolean(),
  });
  const initialValues = {
    gameName: "",
    gameYear: "",
    gamePlatform: "",
    myScore: "",
    gameFinished: "",
  };
  const validate = (values) => {
    const errors = {};
    if (!values.gameName) {
      errors.gameName = "Game name is required";
    }
    if (!/^[0-9]+$/.test(values.gameYear)) {
      errors.gameYear = "Use only numbers";
    }
    if (!values.gamePlatform) {
      errors.gamePlatform = "Game platform is required";
    }
    if (!/^[0-9]+$/.test(values.myScore)) {
      errors.myScore = "Use only numbers";
    }
    return errors;
  };
  return (
    <Formik
      validate={validate}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ values }) => (
        <Form>
          <div>
            <label htmlFor="gameName">Name</label>
            <Field id="gameName" type="text" name="gameName"></Field>
            <ErrorMessage name="gameName"></ErrorMessage>
          </div>
          <div>
            <label htmlFor="gameYear">Date I will finish it</label>
            <Field id="gameYear" type="date" name="gameYear"></Field>
            <ErrorMessage name="gameYear"></ErrorMessage>
          </div>
          <div>
            <label htmlFor="gamePlatform">Platform</label>
            <Field id="gamePlatform" type="text" name="gamePlatform"></Field>
            <ErrorMessage name="gamePlatform"></ErrorMessage>
          </div>
          <div>
            <label htmlFor="myScore">Score</label>
            <Field id="myScore" type="number" name="myScore"></Field>
            <ErrorMessage name="myScore"></ErrorMessage>
          </div>
          <div>
            <label htmlFor="gameFinished">Finished</label>
            <Field
              id="gameFinished"
              type="checkbox"
              name="gameFinished"
            ></Field>
            <ErrorMessage name="gameFinished"></ErrorMessage>
          </div>
          <div>
            <button
              type="submit"
              onClick={() => {
                console.log(values);
                dispatch({
                  type: "FINISH_GAME",
                  payload: {
                    name: selectedGame.name,
                  },
                });
              }}
            >
              FINISH SELECTED GAME
            </button>
            <button
              type="submit"
              onClick={() =>
                dispatch({
                  type: "ADD_GAME",
                  payload: {
                    name: values.gameName,
                    year: values.gameYear,
                    platform: values.gamePlatform,
                    score: values.myScore,
                    finished: values.gameFinished,
                  },
                })
              }
            >
              ADD NEW GAME
            </button>
            <button
              type="submit"
              onClick={() =>
                dispatch({
                  type: "MODIFY_GAME",
                  payload: {
                    name: selectedGame.name,
                    year: values.gameYear,
                    platform: values.gamePlatform,
                    score: values.myScore,
                    finished: selectedGame.finished,
                  },
                })
              }
            >
              MODIFY CURRENT GAME
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: "DELETE_GAME",
                  payload: {
                    name: selectedGame.name,
                  },
                })
              }
            >
              DELETE CURRENT GAME
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default GameFormFormikYup;
