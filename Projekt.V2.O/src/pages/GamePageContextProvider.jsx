import { useReducer, createContext, useEffect } from "react";
import gamePageReducer from "./GamePageReducer";

export const GamePageContext = createContext(["value"]);
const GamePageContextProvider = ({ children }) => {
  const [games, dispatch] = useReducer(gamePageReducer, []);
  useEffect(() => {
    const fetchGameData = async () => {
      const response = await fetch(
        "https://api.rawg.io/api/games?key=a4c87b39e1604b10b3897e51bd906f88&page=1&page_size=40"
      );
      const result = await response.json();
      dispatch({ type: "SET_GAME_LIST", payload: result.results });
    };
    fetchGameData();
  }, []);

  const sortGames = (sortingFunction) => {
    const sortedGames = [...games].sort(sortingFunction);
    console.log(sortedGames);
    return sortedGames;
  };

  return (
    <GamePageContext.Provider
      value={{
        games,
        dispatch,
        sortGames,
      }}
    >
      {children}
    </GamePageContext.Provider>
  );
};
export default GamePageContextProvider;
