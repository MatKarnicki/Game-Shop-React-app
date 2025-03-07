import { useContext, useEffect, useState } from "react";
import { PageContext } from "../contexts/PageContextProvider";
import GameElement from "./GameElement";
import GameFilterMenu from "./GameFilterMenu";
import ModifyGameButton from "../buttons/ModifyGameButton";
import AddGameButton from "../buttons/AddGameButton";

const GameList = () => {
  const { games } = useContext(PageContext);
  const [gameList, setGameList] = useState(games);
  useEffect(() => setGameList(games), [games]);
  return (
    <div>
      <GameFilterMenu setGameList={setGameList} />
      <div
        style={{
          display: "flex",
          width: "500px",
          justifyContent: "space-between",
          marginLeft: "30px",
        }}
      >
        <AddGameButton />
        <ModifyGameButton />
      </div>
      <ul style={{ listStyleType: "none" }}>
        {gameList?.map((game) => (
          <li key={game.id}>
            <GameElement game={game} width={500} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default GameList;
