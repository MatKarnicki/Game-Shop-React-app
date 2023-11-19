import GameForm from "./GameForm";

const GameDetails = ({game, dispatch}) => {

    return (
        <>
            <div>Selected game: {game.name} </div>
            <GameForm dispatch={dispatch} selectedGame={game}/>
        </>
    );
};

export default GameDetails;