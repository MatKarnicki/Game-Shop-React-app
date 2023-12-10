import { useGame } from "./GameContext";

const GameList = ({selectGame}) => {
    const games = useGame();

    return (
        <>
            <ul>
            {games.map(game => (
                <li key={game.name} onClick={() => selectGame(game)}>
                    {game.name}, {game.yearOfRelease}, {game.platform}, myScore: {game.myScore}, finished: {game.finished.toString()}
                </li>
                ))}
            </ul>
        </>
    );
};

export default GameList;