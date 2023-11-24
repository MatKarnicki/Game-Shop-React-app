import {useReducer, useState} from "react";
import GameList from "./GameList";
import GameDetails from "./GameDetails";
import gameReducer from "./GameReducer"

const Game = () => {

const initialGames = [
    {
        name: "Bloodborne",
        yearOfRelease: 2013,
        platform: "Playstation",
        myScore: 10,
        finished : true
    },
    {
        name: "Hi-Fi Rush",
        yearOfRelease: 2023,
        platform: "PC/XBOX",
        myScore: 8,
        finished: true
    }
];


const [games, dispatch] = useReducer(gameReducer, initialGames);
const [selectedGame, setSelectedGame] = useState(null);

return (
    <>
                    <GameList selectGame={setSelectedGame} games={games}/>
                    {selectedGame ? <GameDetails game={selectedGame} dispatch={dispatch}/> :
                        <span>No Game selected</span>}
    </>
);
};

export default Game;

