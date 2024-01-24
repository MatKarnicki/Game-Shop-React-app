import { useContext, useEffect, useState } from "react";
import { DeveloperPageContext } from "./DeveloperPageContextProvider";
// import GameElement from "./GameElement";
// import GameFilterMenu from "./GameFilterMenu";

const DeveloperList = () => {
  const { developers } = useContext(DeveloperPageContext);
  const [developerList, setDeveloperList] = useState(developers);
  useEffect(() => setDeveloperList(developers), [developers]);
  return (
    <div>
      {/* <GameFilterMenu setGameList={setGameList} /> */}
      <ul style={{ listStyleType: "none" }}>
        {developerList?.map((developer) => (
          <li key={developer.id}>
            {/* <GameElement game={developer} /> */}
            {developer.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DeveloperList;
