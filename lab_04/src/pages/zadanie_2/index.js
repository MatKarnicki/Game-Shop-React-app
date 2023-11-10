import { useReducer } from 'react';
import { useState } from 'react';
import CounterList from "./counterList";
import counterReducer from "./counterReducer";
const CounterApp = () => {

    const startingCounters = [{
        value: 0,
        counterName: "First",
        changeValue: 1
    },
        {
            value: 0,
            counterName: "Second",
            changeValue: 1
        },
        {
            value: 0,
            counterName: "Third",
            changeValue: 1
        }];


    const [state, dispatch] = useReducer(counterReducer, startingCounters);

    //zapamietywanie nazwy i wybieranie licznika
    const [text, setText] = useState("");
    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    //zapamietywanie wartosci liczbowej o ile bedziemy zmieniac licznik
    const [value, setValue] = useState(1);
    const handleValueChange = (event) => {
        setValue(parseInt(event.target.value));
    };

    //funkcje dla buttonow
    const increment = () => {
        dispatch({ type: 'INCREMENT', payload: {counterName: text}});
    };
    const decrement = () => {
        dispatch({ type: 'DECREMENT', payload: {counterName: text}});
    };
    const changeValue = () => {
        dispatch({ type: 'CHANGEVALUE', payload: {counterName: text, changeValue: value}});
    };
    const newCounter = () => {
        dispatch({ type: 'NEWCOUNTER', payload: {counterName: text}});
    };
    const deleteCounter = () => {
        dispatch({ type: 'DELETECOUNTER', payload: {counterName: text}});
    };

    return (
        <>
        <input type="text" onChange={handleTextChange}></input>
        <br/><br/>
        <input type="number" onChange={handleValueChange}></input>
        <br/><br/>
        <div>
            <div>
                <button onClick={() => increment()}>Increment</button>
                <button onClick={() => decrement()}>Decrement</button>
            </div>
            <br/>
            <div>
                <button onClick={() => newCounter()}>New Counter</button>
                <button onClick={() => deleteCounter()}>Delete</button>
            </div>
            <br/>
            <div>
                <button onClick={() => changeValue()}>Change Value</button>
            </div>
            <CounterList counterList={state}></CounterList>
        </div>
        </>
    );
};

export default CounterApp;