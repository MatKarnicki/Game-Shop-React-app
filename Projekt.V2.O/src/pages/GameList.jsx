import { useContext, useEffect, useState } from "react";
import { PageContext } from "./PageContextProvider";
import GameElement from "./GameElement";
import GameFilterMenu from "./GameFilterMenu";

const GameList = () => {
  const { games } = useContext(PageContext);
  const [gameList, setGameList] = useState(games);
  useEffect(() => setGameList(games), [games]);
  return (
    <div>
      <GameFilterMenu setGameList={setGameList} />
      <ul style={{ listStyleType: "none" }}>
        {gameList?.map((game) => (
          <li key={game.id}>
            <GameElement game={game} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default GameList;
