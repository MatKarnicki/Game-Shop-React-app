import GameFormFormik2 from "./GameFormFormik";

const GameDetails = ({game}) => {

    return (
        <>
            <div>Selected game: {game.name} </div>
            <GameFormFormik2 selectedGame={game}/>
        </>
    );
};

export default GameDetails;