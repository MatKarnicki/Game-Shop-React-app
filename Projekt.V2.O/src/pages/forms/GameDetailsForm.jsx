import { Field, Formik, ErrorMessage } from "formik";
import { object, string } from "yup";
import { useContext, useState } from "react";
import { PageContext } from "../contexts/PageContextProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GameDetailsSchema = object().shape({
  platform: string().ensure().nullable(),
  genre: string().ensure().nullable(),
  developer: string().ensure().nullable(),
});

const GameDetailsForm = ({ gameDetail }) => {
  const [addGameDetails, setAddGameDetails] = useState(false);
  const { gamesDispatch, developersDispatch, developers } =
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
          style={{ width: "250px", height: 50 }}
          onClick={() => setAddGameDetails(false)}
        >
          Add game details
        </button>
        <button
          style={{ width: "250px" }}
          onClick={() => setAddGameDetails(true)}
        >
          Remove game details
        </button>
      </div>
      <div style={{ marginLeft: "30px" }}>
        {addGameDetails ? (
          <h2>DELETE GAME DETAILS</h2>
        ) : (
          <h2>ADD GAME DETAILS</h2>
        )}
        <Formik
          initialValues={{
            platform: "",
            genre: "",
            developer: "",
          }}
          validationSchema={GameDetailsSchema}
          onSubmit={(values) => {
            if (!addGameDetails) {
              if (values.platform !== "") {
                if (
                  !gameDetail.platforms.some((platform) => {
                    return platform.platform.name === values.platform;
                  })
                ) {
                  gamesDispatch({
                    type: "ADD_PLATFORM_TO_GAME",
                    payload: {
                      gameid: gameDetail.id,
                      platform: values.platform,
                    },
                  });
                } else {
                  toast.error("This game contains that platform");
                }
              }
              if (values.genre !== "") {
                if (
                  !gameDetail.genres.some((genre) => {
                    return genre.name === values.genre;
                  })
                ) {
                  gamesDispatch({
                    type: "ADD_GENRE_TO_GAME",
                    payload: {
                      gameid: gameDetail.id,
                      genre: values.genre,
                    },
                  });
                } else {
                  toast.error("This game contains this genre");
                }
              }
              if (values.developer !== "") {
                if (
                  !gameDetail.my_developers.some((developer) => {
                    return developer.name === values.developer;
                  })
                ) {
                  const developerid = developers.find(
                    (developer) => developer.name === values.developer
                  ).id;
                  gamesDispatch({
                    type: "ADD_DEVELOPER_TO_GAME",
                    payload: {
                      gameid: gameDetail.id,
                      developer: values.developer,
                      developerid: developerid,
                    },
                  });
                  developersDispatch({
                    type: "ADD_GAME_TO_DEVELOPER_GAMES",
                    payload: {
                      developerid: developerid,
                      id: gameDetail.id,
                      name: gameDetail.name,
                      metacritic: gameDetail.metacritic,
                      released: gameDetail.released,
                      background_image: gameDetail.background_image,
                    },
                  });
                } else {
                  toast.error("This game is already made by that developer");
                }
              }
            } else {
            }
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
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

              <br />
              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default GameDetailsForm;
