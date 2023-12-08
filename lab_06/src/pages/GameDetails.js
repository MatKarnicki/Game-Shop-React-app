import GameForm from "./GameForm";

const GameDetails = ({game}) => {

    return (
        <>
            <div>Selected game: {game.name} </div>
            <GameForm selectedGame={game}/>
        </>
    );
};

export default GameDetails;