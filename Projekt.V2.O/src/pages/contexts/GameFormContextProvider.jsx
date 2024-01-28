import { createContext, useState } from "react";

export const GameFormContext = createContext(null);
const GameFormContextProvider = ({ children }) => {
  const [modifyGame, setModifyGame] = useState(false);
  return (
    <GameFormContext.Provider value={{ modifyGame, setModifyGame }}>
      {children}
    </GameFormContext.Provider>
  );
};

export default GameFormContextProvider;
