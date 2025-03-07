import { Field, Formik, ErrorMessage } from "formik";
import { date, number, object, string } from "yup";
import { useContext } from "react";
import { PageContext } from "../contexts/PageContextProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GameFormContext } from "../contexts/GameFormContextProvider";

const GameSchema = object().shape({
  name: string()
    .min(1, "Game title is too short")
    .max(250, "Game title is too long")
    .required("Game title is required")
    .trim(),
  metacritic: number()
    .required("Game Score is required")
    .min(1, "Score is too low")
    .round()
    .max(100, "Score is too high"),
  released: date()
    .required("Date is required")
    .min("1960-01-01", "Invalid date")
    .max(new Date(), "Date can't be in the future"),

  background_image: string().url().required("Please enter image url").trim(),
  platform: string().ensure().required("Please select a platform"),
  genre: string().ensure().required("Please select a genre"),
  developer: string().ensure().required("Please select a developer"),
});
const modifyGameSchema = object().shape({
  name: string()
    .min(1, "Game title is too short")
    .max(250, "Game title is too long")
    .required("Game title is required")
    .trim(),
  newname: string()
    .min(1, "Game title is too short")
    .max(250, "Game title is too long")
    .nullable()
    .trim(),
  newscore: number()
    .nullable()
    .min(1, "Score is too low")
    .round()
    .max(100, "Score is too high"),
  newreleased: date()
    .nullable()
    .min("1960-01-01", "Invalid date")
    .max(new Date(), "Date can't be in the future"),
  newbackground_image: string().url().nullable().trim(),
});
const GameForm = () => {
  const { setModifyGame, modifyGame } = useContext(GameFormContext);
  const { gamesDispatch, developersDispatch, developers, games } =
    useContext(PageContext);
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
          onClick={() => setModifyGame(false)}
        >
          Add game
        </button>
        <button
          style={{ width: "250px", height: 50, cursor: "pointer" }}
          onClick={() => setModifyGame(true)}
        >
          Modify Game
        </button>
      </div>
      <div style={{ marginLeft: "30px" }}>
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
            newname: "",
            newscore: "",
            newreleased: "",
            newbackground_image: "",
          }}
          validationSchema={modifyGame ? modifyGameSchema : GameSchema}
          onSubmit={(values) => {
            if (
              (!modifyGame &&
                games.some(
                  (game) =>
                    game.name.toLowerCase() === values.name.toLowerCase()
                )) ||
              (modifyGame &&
                games.some(
                  (game) =>
                    game.name.toLowerCase() === values.newname.toLowerCase()
                ))
            ) {
              toast.error("This game already exists");
              return;
            }
            const gameid = parseInt(
              Math.floor(Math.random() * 1000) * games.length
            );
            modifyGame
              ? toast.success("Succesfully modified game")
              : toast.success("Succesfully added game");
            if (modifyGame) {
              gamesDispatch({
                type: "MODIFY_GAME",
                payload: {
                  id: gameid,
                  name: values.name.trim(),
                  newname: values.newname.trim(),
                  newscore: values.newscore,
                  newreleased: values.newreleased,
                  newbackground_image: values.newbackground_image.trim(),
                },
              });
              developersDispatch({
                type: "MODIFY_DEVELOPERS_GAME_INFO",
                payload: {
                  id: gameid,
                  name: values.name.trim(),
                  newname: values.newname.trim(),
                  newscore: values.newscore,
                  newreleased: values.newreleased,
                  newbackground_image: values.newbackground_image.trim(),
                },
              });
            } else {
              gamesDispatch({
                type: "ADD_GAME",
                payload: {
                  id: gameid,
                  name: values.name.trim(),
                  metacritic: values.metacritic,
                  released: values.released,
                  background_image: values.background_image.trim(),
                  platform: values.platform,
                  genre: values.genre,
                  developer: values.developer,
                  developerid: developers.find(
                    (developer) => developer.name === values.developer
                  ).id,
                },
              });
              developersDispatch({
                type: "ADD_GAME_TO_DEVELOPER_GAMES",
                payload: {
                  developerid: developers.find(
                    (developer) => developer.name === values.developer
                  ).id,
                  id: gameid,
                  name: values.name.trim(),
                  metacritic: values.metacritic,
                  released: values.released,
                  background_image: values.background_image.trim(),
                },
              });
            }
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <br />
              <label>Game Name: </label>
              <br />
              {modifyGame ? (
                <>
                  <Field style={fieldStyle} name="name" as="select">
                    <option value="">Select a game to modify</option>
                    {games?.map((game) => (
                      <option key={game.name} value={game.name}>
                        {game.name}
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
              <label>{modifyGame ? "New Score:" : "Score:"}</label>
              <br />
              <Field
                style={fieldStyle}
                name={modifyGame ? "newscore" : "metacritic"}
                as="input"
                type="number"
              />
              <ErrorMessage
                name={modifyGame ? "newscore" : "metacritic"}
              ></ErrorMessage>
              <br />
              <label>
                {modifyGame ? "New Release Date:" : "Release Date:"}
              </label>
              <br />
              <Field
                style={fieldStyle}
                name={modifyGame ? "newreleased" : "released"}
                as="input"
                type="date"
              />
              <ErrorMessage
                name={modifyGame ? "newreleased" : "released"}
              ></ErrorMessage>
              <br />
              <label>
                {modifyGame ? "New Background image URL" : "Background image"}:{" "}
              </label>
              <br />
              <Field
                style={fieldStyle}
                name={modifyGame ? "newbackground_image" : "background_image"}
                as="input"
              />
              <ErrorMessage
                name={modifyGame ? "newbackground_image" : "background_image"}
              ></ErrorMessage>
              <br />
              {!modifyGame && (
                <div>
                  <label>Platform: </label>
                  <br />
                  <Field style={fieldStyle} name="platform" as="select">
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
                  <br />
                  <Field style={fieldStyle} name="genre" as="select">
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
                  <br />
                  <Field style={fieldStyle} name="developer" as="select">
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

export default GameForm;
