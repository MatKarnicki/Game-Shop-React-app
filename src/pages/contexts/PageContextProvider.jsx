import { useReducer, createContext, useEffect, useRef } from "react";
import gamePageReducer from "../../componets/reducers/GamePageReducer";
import gameAssignment from "../../componets/functions/gameAssignment";
import developerPageReducer from "../../componets/reducers/DevolperPageReducer";

export const PageContext = createContext(null);
const PageContextProvider = ({ children }) => {
  const didRun = useRef(false);
  const [games, gamesDispatch] = useReducer(gamePageReducer, []);
  const [developers, developersDispatch] = useReducer(developerPageReducer, []);

  useEffect(() => {
    const fetchGameData = async () => {
      const response = await fetch(
        "https://api.rawg.io/api/games?key=a4c87b39e1604b10b3897e51bd906f88&page=7&page_size=40"
      );
      const result = await response.json();
      gamesDispatch({ type: "SET_GAME_LIST", payload: result.results });
    };
    fetchGameData();
  }, []);

  useEffect(() => {
    const fetchDeveloperData = async () => {
      const response = await fetch(
        "https://api.rawg.io/api/developers?key=a4c87b39e1604b10b3897e51bd906f88&page=1&page_size=15"
      );
      const result = await response.json();
      developersDispatch({
        type: "SET_DEVELOPERS_LIST",
        payload: result.results,
      });
    };
    fetchDeveloperData();
  }, []);

  const sortGames = (sortingFunction) => {
    const sortedGames = [...games].sort(sortingFunction);
    return sortedGames;
  };
  const sortDevelopers = (sortingFunction) => {
    const sortedDevelopers = [...developers].sort(sortingFunction);
    return sortedDevelopers;
  };
  useEffect(() => {
    if (games?.length > 0 && developers.length > 0 && !didRun.current) {
      gameAssignment(games, developers);
      didRun.current = true;
    }
  });
  return (
    <PageContext.Provider
      value={{
        games,
        developers,
        gamesDispatch,
        developersDispatch,
        sortGames,
        sortDevelopers,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
export default PageContextProvider;
