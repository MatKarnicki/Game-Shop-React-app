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

  const sortGamesByName = () => {
    const sortedGames = [...games].sort((a, b) => a.name.localeCompare(b.name));
    console.log(sortedGames);
    return sortedGames;
  };

  return (
    <GamePageContext.Provider value={{ games, dispatch, sortGamesByName }}>
      {children}
    </GamePageContext.Provider>
  );
};
export default GamePageContextProvider;
