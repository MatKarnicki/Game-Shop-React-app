import React from "react";
import GameElement from "./gameElement";
import PageHandler from "./pageHandler";

const gridStyle = {
  listStyle: "none",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)", // Display as a 3x3 grid
  gap: "16px",
  padding: "0",
};

const GameList = ({ data, pageNumber, setPage, maxPages }) => {
  return (
    <>
      <PageHandler
        pageNumber={pageNumber}
        setPage={setPage}
        maxPages={maxPages}
      />
      <ul style={gridStyle}>
        {data.map((game) => (
          <li key={game.id}>
            <GameElement game={game} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameList;
