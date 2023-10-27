const createStore = (reducer) => {

    let state;
    const getState = () => state;
    const listeners = [];

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    }

    const subscribe = (listener) => {
        listeners.push(listener);
        // TODO: return unsubscribe function
    };
    dispatch({});
    return {getState, subscribe, dispatch};
}

const counterReducer = (state, action) => {
        switch (action.type) {
            case 'INCREMENT': {
                return state.map(counter =>{
                    if(counter.counterName == action.payload.counterName){
                        return {
                            ...counter,
                            value: counter.value + action.payload.value
                        }
                    }
                    return counter
            })
            }
            case 'DECREMENT': {
                return state.map(counter =>{
                    if(counter.counterName == action.payload.counterName){
                        return {
                            ...counter,
                            value: counter.value - action.payload.value
                        }
                    }
                    return counter
            });

            }
            case 'NEWCOUNTER': {
                return [...state, {value: 0, counterName: action.payload.counterName}]
            }
            case 'DELETECOUNTER': {
                return state.filter(counter => {
                    return counter.counterName !== action.payload.counterName
                })
            }
            default:
                return [{
                    value: 0,
                    counterName: "First"
                },
                    {
                        value: 0,
                        counterName: "Second"
                    },
                    {
                        value: 0,
                        counterName: "Third"
                    }]
        }
        ;
    };

const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch({
        type: 'INCREMENT', payload: {
        counterName:"Third",
        value: 2
    }
});
store.dispatch({
        type: 'INCREMENT', payload: {
        counterName:"First",
        value: 5
    }
});
store.dispatch({
    type: 'DECREMENT', payload: {
        counterName:"Third",
        value: 9
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
    value: 5
}
});
store.dispatch({
    type: 'DELETECOUNTER', payload: {
    counterName:"Third"
}
});
