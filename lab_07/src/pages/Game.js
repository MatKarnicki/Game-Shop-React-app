import {useState} from "react";
import GameList from "./GameList";
import GameDetails from "./GameDetails";
import { GameProvider } from "./GameContext";

const Game = () => {

const [selectedGame, setSelectedGame] = useState(null);

return (
    <>
       <GameProvider>
            <div>
                <GameList selectGame={setSelectedGame}/>
                {selectedGame ? <GameDetails game=
                {selectedGame}/> :
                    <span> no game selected</span>}
            </div>
       </GameProvider>
    </>
);
};

export default Game;

