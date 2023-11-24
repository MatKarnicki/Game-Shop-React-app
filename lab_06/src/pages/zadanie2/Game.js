import {useReducer, useState} from "react";
import GameList from "./GameList";
import GameDetails from "./GameDetails";
import { DispatchContext, GameContext } from "./GameContext";


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

const gameReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_GAME': {
            return [...state,
                {
                    name: action.payload.name,
                    yearOfRelease: action.payload.year,
                    platform: action.payload.platform,
                    myScore: action.payload.score,
                    finished: action.payload.finished
                }
            ];
        }
        case 'MODIFY_GAME': {
            return state.map(game => {
                if (game.name === action.payload.name) {
                    return {
                        name: action.payload.name || game.name,
                        yearOfRelease: action.payload.year || game.yearOfRelease,
                        platform: action.payload.platform || game.platform,
                        myScore: action.payload.score || game.myScore,
                        finished: action.payload.finished
                    };
                }
                return game;
            });
        }
        case 'FINISH_GAME': {
            return state.map(game => {
                if (game.name === action.payload.name) {
                    return {
                        ...game,
                        finished: true
                    };
                }
                return game;
            });
        }
        case 'DELETE_GAME': {
            return state.filter(game => {
                return game.name !== action.payload.name;
            });
        }
        default:
            return state;
    }
};
const [games, dispatch] = useReducer(gameReducer, initialGames);
const [selectedGame, setSelectedGame] = useState(null);

return (
    <>
        <GameContext.Provider value={games}>
            <DispatchContext.Provider value={dispatch}>
                <div>
                    <GameList selectGame={setSelectedGame} games={games}/>
                    {selectedGame ? <GameDetails game={selectedGame}/> :
                        <span>No Game selected</span>}
                </div>
            </DispatchContext.Provider>
        </GameContext.Provider>
    </>
);
};

export default Game;

