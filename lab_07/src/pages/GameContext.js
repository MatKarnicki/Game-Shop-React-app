import {createContext, useContext, useReducer} from "react";
import { gameReducer } from "./GameReducer";


export const GameContext = createContext(null);
export const DispatchContext = createContext(null);

export function useGame() {
    return useContext(GameContext);
}
export function useGameDispatch() {
    return useContext(DispatchContext);
}

const initialGames = [
    {
        name: "Bloodborne",
        yearOfRelease: 2013,
        platform: "Playstation",
        myScore: 10,
        finished : false
    },
    {
        name: "Hi-Fi Rush",
        yearOfRelease: 2023,
        platform: "PC/XBOX",
        myScore: 8,
        finished: true
    }
];

export function GameProvider({children}) {
    const [games, dispatch] = useReducer(gameReducer, initialGames);

    return (
        <GameContext.Provider value={games}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </GameContext.Provider>
    );
}
