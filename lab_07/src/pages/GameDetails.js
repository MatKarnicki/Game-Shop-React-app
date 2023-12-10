import GameFormFormikYup from "./GameFormFormik";

const GameDetails = ({game}) => {

    return (
        <>
            <div>Selected game: {game.name} </div>
            <GameFormFormikYup selectedGame={game}/>
        </>
    );
};

export default GameDetails;