import React, { useContext } from "react";
import { GamePageContext } from "./GamePageContextProvider";

const GameFilterMenu = ({ setGameList }) => {
  const { sortGames } = useContext(GamePageContext);

  return (
    <div>
      <button
        onClick={() => {
          setGameList(sortGames((a, b) => a.name.localeCompare(b.name)));
        }}
      >
        Sort Games Alphabetically Rising
      </button>

      <button
        onClick={() => {
          setGameList(sortGames((a, b) => b.name.localeCompare(a.name)));
        }}
      >
        Sort Games Alphabetically Decreasing
      </button>
      <br />
      <button
        onClick={() => {
          setGameList(sortGames((a, b) => b.metacritic - a.metacritic));
        }}
      >
        Sort Games by Score Increasing
      </button>

      <button
        onClick={() => {
          setGameList(sortGames((a, b) => a.metacritic - b.metacritic));
        }}
      >
        Sort Games by Score Decreasing
      </button>
    </div>
  );
};

export default GameFilterMenu;
