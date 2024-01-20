import { useContext } from "react";
import { GamePageContext } from "./GamePageContextProvider";
import GameElement from "./GameElement";
const GameList = () => {
  const { games } = useContext(GamePageContext);
  return (
    <ul>
      {games?.map((game) => (
        <li key={game.id}>
          <GameElement game={game} />
        </li>
      ))}
    </ul>
  );
};
export default GameList;
