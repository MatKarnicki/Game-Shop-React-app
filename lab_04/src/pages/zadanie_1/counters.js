const createStore = (reducer) => {

    let state;
    const getState = () => state;
    const listeners = [];

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        // TODO: return unsubscribe function
    };
    dispatch({});
    return {getState, subscribe, dispatch};
};

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
                            changeValue: action.payload.changeValue
                        };
                    }
                    return counter;
                });
            }
            case 'SHOWVALUE': {
                return state.map(counter => {
                    if(counter.counterName === action.payload.counterName){
                        console.log(`${counter.counterName}: ${counter.value}` );
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

const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch({
        type: 'SHOWVALUE', payload: {
        counterName:"Third",
    }
});
store.dispatch({
        type: 'INCREMENT', payload: {
        counterName:"First",
    }
});
store.dispatch({
    type: 'CHANGEVALUE', payload: {
    counterName:"Third",
    changeValue: 5
}
});
store.dispatch({
    type: 'DECREMENT', payload: {
        counterName:"Third",
    }
});
store.dispatch({
    type: 'NEWCOUNTER', payload: {
        counterName: "Forth"
    }
});
store.dispatch({
    type: 'INCREMENT', payload: {
    counterName:"Forth",
}
});
store.dispatch({
    type: 'DELETECOUNTER', payload: {
    counterName:"Thirds"
}
});
