import {useState, useContext} from "react";
import { DispatchContext } from "./GameContext";

const GameForm = ({selectedGame}) => {

    const [gameName, setGameName] = useState("unknown");
    const [gameYear, setGameYear] = useState("unknown");
    const [gamePlatform, setGamePlatform] = useState("unknown");
    const [gameScore, setGameScore] = useState("unknown");
    const [gameFinished, setGameFinished] = useState(false);
    const dispatch = useContext(DispatchContext);


    return (
        <>
            Name: <input type="text" onChange={(e) => setGameName(e.target.value)}/> <br />
            YearOfRelease: <input type="number" onChange={(e) => setGameYear(e.target.value)}/> <br />
            Platform: <input type="text" onChange={(e) => setGamePlatform(e.target.value)}/> <br />
            MyScore: <input type="number" onChange={(e) => setGameScore(e.target.value)}/> <br />
            Finished: <input type="checkbox" onChange={(e) => setGameFinished(e.target.checked)}/> <br />
            <button onClick={() => dispatch({
                type: 'FINISH_GAME',
                payload: {
                    name: selectedGame.name
                }
            }) }>FINISH SELECTED GAME</button>
            <button onClick={() => dispatch({
                type: 'ADD_GAME',
                payload: {
                    name: gameName,
                    year : gameYear,
                    platform: gamePlatform,
                    score: gameScore,
                    finished: gameFinished
                }
            }) }>ADD NEW GAME</button>
            <button onClick={() => dispatch({
                type: 'MODIFY_GAME',
                payload: {
                    name: selectedGame.name,
                    year : gameYear,
                    platform: gamePlatform,
                    score: gameScore,
                    finished: gameFinished
                }
            }) }>MODIFY CURRENT GAME</button>
            <button onClick={() => dispatch({
                type: 'DELETE_GAME',
                payload: {
                    name: selectedGame.name
                }
            }) }>DELETE CURRENT GAME</button>

        </>
    );
};

export default GameForm;