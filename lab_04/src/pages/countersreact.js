import { useReducer } from 'react';
import { useState } from 'react';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': {
        return state.map(counter => {
            if(counter.counterName === action.payload.counterName){
                return {
                    ...counter,
                    value: counter.value + counter.changeValue
                };
            }
            return counter;
        });
    }
      case 'DECREMENT': {
        return state.map(counter => {
            if(counter.counterName === action.payload.counterName){
                return {
                    ...counter,
                    value: counter.value - counter.changeValue
                };
            }
            return counter;
        });
    }
      case 'NEWCOUNTER': {
        return [...state, {value: 0, counterName: action.payload.counterName, changeValue:1}];
    }
      case 'DELETECOUNTER': {
        return state.filter(counter => {
            return counter.counterName !== action.payload.counterName;
        });
    }
      case 'CHANGEVALUE': {
        return state.map(counter => {
            if(counter.counterName === action.payload.counterName){
                return {
                    ...counter,
                    value: counter.value,
                    changeValue: action.payload.changeValue
                };
            }
            return counter;
        });
    }
      default:
        return [{
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
    }
};

const CounterApp = () => {

    const [state, dispatch] = useReducer(counterReducer, counterReducer([], {}));

    const [text, setText] = useState("");

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const [value, setValue] = useState(1);

    const handleValueChange = (event) => {
        setValue(parseInt(event.target.value));
    };

    const increment = () => {
        dispatch({ type: 'INCREMENT', payload: {counterName: text } });
    };

    const decrement = () => {
        dispatch({ type: 'DECREMENT', payload: {counterName: text } });
    };

    const changeValue = () => {
        dispatch({ type: 'CHANGEVALUE', payload: {counterName: text, changeValue: value } });
    };

    const newCounter = () => {
        dispatch({ type: 'NEWCOUNTER', payload: {counterName: text } });
    };

    const deleteCounter = () => {
        dispatch({ type: 'DELETECOUNTER', payload: {counterName: text } });
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
            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
        </>
    );
};

export default CounterApp;