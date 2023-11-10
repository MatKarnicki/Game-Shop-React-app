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
      }
  };
  export default counterReducer;