import { useContext } from "react";
import { PageContext } from "../contexts/PageContextProvider";

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
      <div>
        {createSortButton(
          "Formed in ↑",
          (a, b) => new Date(a.formed_in) - new Date(b.formed_in)
        )}
        {createSortButton(
          "Formed in ↓",
          (a, b) => new Date(b.formed_in) - new Date(a.formed_in)
        )}
      </div>
    </div>
  );
};

export default DeveloperFilterMenu;
