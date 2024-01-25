import { useContext } from "react";
import { PageContext } from "./PageContextProvider";

const DeveloperFilterMenu = ({ setDeveloperList }) => {
  const { sortDevelopers } = useContext(PageContext);

  const createSortButton = (label, sortingFunction) => (
    <button
      style={{ marginBottom: "0.5em", width: "150px" }}
      onClick={() => {
        setDeveloperList(sortDevelopers(sortingFunction));
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
        {createSortButton(
          "Games ↑",
          (a, b) => b.my_games_count - a.my_games_count
        )}
        {createSortButton(
          "Games ↓",
          (a, b) => a.my_games_count - b.my_games_count
        )}
      </div>
      {/* <div>
        {createSortButton(
          "Release Date ↑",
          (a, b) => new Date(a.released) - new Date(b.released)
        )}
        {createSortButton(
          "Release Date ↓",
          (a, b) => new Date(b.released) - new Date(a.released)
        )}
      </div> */}
    </div>
  );
};

export default DeveloperFilterMenu;
