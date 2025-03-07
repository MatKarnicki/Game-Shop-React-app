import { useContext } from "react";
import { PageContext } from "../contexts/PageContextProvider";

const GameFilterMenu = ({ setGameList }) => {
  const { sortGames } = useContext(PageContext);

  const createSortButton = (label, sortingFunction) => (
    <button
      style={{ marginBottom: "0.5em", width: "150px", cursor: "pointer" }}
      onClick={() => {
        setGameList(sortGames(sortingFunction));
      }}
    >
      {label}
    </button>
  );

  return (
    <div
      style={{
        width: 555,
        marginLeft: "2em",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        {createSortButton("A - Z", (a, b) => a.name.localeCompare(b.name))}
        {createSortButton("Z - A", (a, b) => b.name.localeCompare(a.name))}
      </div>

      <div>
        {createSortButton("Score ↑", (a, b) => b.metacritic - a.metacritic)}
        {createSortButton("Score ↓", (a, b) => a.metacritic - b.metacritic)}
      </div>
      <div>
        {createSortButton(
          "Release Date ↑",
          (a, b) => new Date(a.released) - new Date(b.released)
        )}
        {createSortButton(
          "Release Date ↓",
          (a, b) => new Date(b.released) - new Date(a.released)
        )}
      </div>
    </div>
  );
};

export default GameFilterMenu;
