import React from "react";
import GameElement from "../GameElement";

const gridStyle = {
  listStyle: "none",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "16px",
};

const GameGrid = ({ games }) => {
  return (
    <>
      <ul style={gridStyle}>
        {games?.map((game) => (
          <li key={game.id}>
            <GameElement game={game} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
