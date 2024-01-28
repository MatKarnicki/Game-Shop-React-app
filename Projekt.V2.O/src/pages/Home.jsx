import { useState } from "react";
import DeveloperList from "./developer/DeveloperList";
import GameList from "./game/GameList";

const Home = () => {
  const [showDeveloperPage, setShowDeveloperPage] = useState(false);

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: 520,
          justifyContent: "space-between",
          marginLeft: "2em",
          marginBottom: "1em",
        }}
      >
        <button
          style={{ width: "250px", height: 50 }}
          onClick={() => setShowDeveloperPage(false)}
        >
          Game List
        </button>
        <button
          style={{ width: "250px" }}
          onClick={() => setShowDeveloperPage(true)}
        >
          Developer List
        </button>
      </div>
      <div>{showDeveloperPage ? <DeveloperList /> : <GameList />}</div>
    </div>
  );
};
export default Home;
