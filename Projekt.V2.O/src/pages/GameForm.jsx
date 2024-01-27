import { Field, Formik, ErrorMessage } from "formik";
import { date, number, object, string } from "yup";
import { useContext, useState } from "react";
import { PageContext } from "./PageContextProvider";

const GameSchema = object().shape({
  name: string()
    .min(1, "Game title is too short")
    .max(250, "Game title is too long")
    .required("Game title is required")
    .matches(/^[a-zA-Z ]*$/),
  newname: string()
    .min(1, "Game title is too short")
    .max(250, "Game title is too long")
    .nullable()
    .matches(/^[a-zA-Z ]*$/),
  metacritic: number()
    .required("Game Score is required")
    .min(1, "Score is too low")
    .round()
    .max(100, "Score is too high"),
  released: date()
    .required("Date is required")
    .min("1960-01-01", "Invalid date")
    .max(new Date(), "Date can't be in the future"),
  background_image: string().url().required("Please enter image url"),
  platform: string().ensure().required("Please select a platform"),
  genre: string().ensure().required("Please select a genre"),
  developer: string().ensure().required("Please select a developer"),
});

// definicja komponentu formularza
const GameForm = () => {
  const [modifyGame, setModifyGame] = useState(false);
  const { gamesDispatch, developers, games } = useContext(PageContext);
  const genres = [
    { id: 0, name: "Action" },
    { id: 1, name: "Simulation" },
    { id: 2, name: "Casual" },
    { id: 3, name: "Indie" },
    { id: 4, name: "Adventure" },
    { id: 5, name: "Puzzle" },
    { id: 6, name: "Shooter" },
    { id: 7, name: "RPG" },
    { id: 8, name: "Platformer" },
    { id: 9, name: "Strategy" },
    { id: 10, name: "Arcade" },
    { id: 11, name: "Racing" },
  ];
  const platforms = [
    { id: 0, name: "Android" },
    { id: 1, name: "Dreamcast" },
    { id: 2, name: "GameCube" },
    { id: 3, name: "iOS" },
    { id: 4, name: "Linux" },
    { id: 5, name: "macOS" },
    { id: 6, name: "Nintendo 64" },
    { id: 7, name: "Nintendo Switch" },
    { id: 8, name: "PC" },
    { id: 9, name: "PlayStation" },
    { id: 10, name: "PlayStation 2" },
    { id: 11, name: "PlayStation 3" },
    { id: 12, name: "PlayStation 4" },
    { id: 13, name: "PlayStation 5" },
    { id: 14, name: "PS Vita" },
    { id: 15, name: "Web" },
    { id: 16, name: "Wii" },
    { id: 17, name: "Wii U" },
    { id: 18, name: "Xbox" },
    { id: 19, name: "Xbox 360" },
    { id: 20, name: "Xbox One" },
    { id: 21, name: "Xbox Series S/X" },
  ];
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
          style={{ width: "250px", height: 50 }}
          onClick={() => setModifyGame(false)}
        >
          Add game
        </button>
        <button style={{ width: "250px" }} onClick={() => setModifyGame(true)}>
          Modify Game
        </button>
      </div>
      {modifyGame ? <h2>MODIFY GAME</h2> : <h2>ADD GAME</h2>}
      <Formik
        initialValues={{
          name: "",
          metacritic: "",
          released: "1960-01-01",
          background_image: "",
          platform: "",
          genre: "",
          developer: "",
        }}
        validationSchema={GameSchema}
        onSubmit={(values) => {
          gamesDispatch({
            type: modifyGame ? "MODIFY" : "ADD",
            payload: { values },
          });
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <br />
            <label>Game Name: </label>
            {modifyGame ? (
              <>
                <Field name="genre" as="select">
                  {games.map((game) => (
                    <option key={game.name} value={game.name}>
                      {game.name}
                    </option>
                  ))}
                </Field>
                <br />
                <label>New Name(optional): </label>
                <Field name="newname" as="input" />
                <ErrorMessage name="newname"></ErrorMessage>
              </>
            ) : (
              <Field name="name" as="input" />
            )}
            <ErrorMessage name="name"></ErrorMessage>
            <br />
            <label>Score: </label>
            <Field name="metacritic" as="input" type="number" />
            <ErrorMessage name="metacritic"></ErrorMessage>
            <br />
            <label>ReleaseDate: </label>
            <Field name="released" as="input" type="date" />
            <ErrorMessage name="released"></ErrorMessage>
            <br />
            <label>Image URL: </label>
            <Field name="background_image" as="input" />
            <ErrorMessage name="background_image"></ErrorMessage>
            <br />
            {!modifyGame && (
              <div>
                <label>Platform: </label>
                <Field name="platform" as="select">
                  <option value="">Select a platform</option>
                  {platforms.map((platform) => (
                    <option key={platform.name} value={platform.name}>
                      {platform.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="platform"></ErrorMessage>
                <br />
                <label>Genre: </label>
                <Field name="genre" as="select">
                  <option value="">Select a Genre</option>
                  {genres.map((genre) => (
                    <option key={genre.name} value={genre.name}>
                      {genre.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="genre"></ErrorMessage>
                <br />
                <label>Developer: </label>
                <Field name="developer" as="select">
                  <option value="">Select a Developer</option>
                  {developers.map((developer) => (
                    <option key={developer.name} value={developer.name}>
                      {developer.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="developer"></ErrorMessage>
              </div>
            )}
            <br />
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default GameForm;
