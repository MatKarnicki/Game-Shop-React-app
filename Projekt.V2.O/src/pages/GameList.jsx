import { useContext, useEffect, useState } from "react";
import { GamePageContext } from "./GamePageContextProvider";
import GameElement from "./GameElement";

const GameList = () => {
  const { sortGamesByName, games } = useContext(GamePageContext);
  const [gameList, setGameList] = useState(games);
  useEffect(() => setGameList(games), [games]);
  return (
    <div>
      <button
        onClick={() => {
          setGameList(sortGamesByName());
        }}
      >
        Sort Games Alphabetically
      </button>
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
