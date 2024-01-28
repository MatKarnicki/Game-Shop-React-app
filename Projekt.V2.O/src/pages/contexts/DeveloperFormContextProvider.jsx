import { createContext, useState } from "react";

export const DeveloperFormContext = createContext(null);
const DeveloperFormContextProvider = ({ children }) => {
  const [modifyDeveloper, setModifyDeveloper] = useState(false);
  return (
    <DeveloperFormContext.Provider
      value={{ modifyDeveloper, setModifyDeveloper }}
    >
      {children}
    </DeveloperFormContext.Provider>
  );
};

export default DeveloperFormContextProvider;
