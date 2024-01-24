import { useReducer, createContext, useEffect } from "react";
import developerPageReducer from "./DevolperPageReducer";

export const DeveloperPageContext = createContext(["value"]);
const DeveloperPageContextProvider = ({ children }) => {
  const [developers, dispatch] = useReducer(developerPageReducer, []);
  useEffect(() => {
    const fetchDeveloperData = async () => {
      const response = await fetch(
        "https://api.rawg.io/api/developers?key=a4c87b39e1604b10b3897e51bd906f88&page=1&page_size=15"
      );
      const result = await response.json();
      console.log(result);
      dispatch({ type: "SET_DEVELOPER_LIST", payload: result.results });
    };
    fetchDeveloperData();
  }, []);

  const sortDevelopers = (sortingFunction) => {
    const sortedGames = [...developers].sort(sortingFunction);
    console.log(sortedGames);
    return sortedGames;
  };

  return (
    <DeveloperPageContext.Provider
      value={{
        developers,
        dispatch,
        sortDevelopers,
      }}
    >
      {children}
    </DeveloperPageContext.Provider>
  );
};
export default DeveloperPageContextProvider;
