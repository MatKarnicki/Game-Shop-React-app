import {Formik} from "formik";
import { useGameDispatch } from "./GameContext";

const GameFormFormik = ({selectedGame}) => {

    const dispatch = useGameDispatch();


    return (
        <>
        <Formik
            initialValues={{
                gameName : 'unknown',
                gameYear : 1970,
                gamePlatform : 'unknown',
                gameScore : 0,
                gameFinished : false
            }}

            validate={values => {
                const errors = {};

                if (!values.gameName) {
                    errors.gameName = 'Game name is required';
                } else if (!/^[0-9]+$/.test(values.gameYear)) {
                    errors.fruitColor = 'Use only numbers';
                } else if (!values.gamePlatform) {
                    errors.fruitColor = 'Game platform is required';
                } else if (!/^[0-9]+$/.test(values.gameScore)) {
                    errors.fruitColor = 'Use only numbers';
                }
                return errors;
            }}

            onSubmit={(values, {isSubmitting}) => {
                console.log("Values:", values);
                dispatch({
                    type: 'MODIFY_FRUIT',
                    payload: {
                        color: values.fruitColor,
                        name: values.fruitName
                    }
                });
            }}>
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
                  /*....*/

              }) => (
                <form onSubmit={handleSubmit}>
                        <input type='text' gameName='fruitName' onChange={handleChange} onBlur={handleBlur}
                               value={values.gameName}/>
                        {errors.gameName && touched.gameName && errors.gameName}
                        <br/>
                        <input type='number' name='gameYear' onChange={handleChange} onBlur={handleBlur}
                               value={values.gameYear}/>
                        {errors.gameYear && touched.gameYear && errors.gameYear}
                        <br/>
                        <input type='text' name='gamePlatform' onChange={handleChange} onBlur={handleBlur}
                               value={values.gamePlatform}/>
                        {errors.gamePlatform && touched.gamePlatform && errors.gamePlatform}
                        <br/>
                        <input type='number' name='gameScore' onChange={handleChange} onBlur={handleBlur}
                               value={values.gameScore}/>
                        {errors.gameScore && touched.gameScore && errors.gameScore}
                        <br/>
                        <input type='checkbox' name='gameFinished' onChange={handleChange} onBlur={handleBlur}
                               value={values.gameFinished}/>
                        {errors.gameFinished && touched.gameFinished && errors.gameFinished}
                        <br/>
                        <button type='submit' disabled={isSubmitting}> OK</button>
                    </form>
                )}

        </Formik>
            {/* Name: <input type="text" onChange={(e) => setGameName(e.target.value)}/> <br />
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
                    finished: selectedGame.finished
                }
            }) }>MODIFY CURRENT GAME</button>
            <button onClick={() => dispatch({
                type: 'DELETE_GAME',
                payload: {
                    name: selectedGame.name
                }
            }) }>DELETE CURRENT GAME</button>
*/}
        </>
    );
};

export default GameFormFormik;