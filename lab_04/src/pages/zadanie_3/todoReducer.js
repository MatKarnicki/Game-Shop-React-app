const todoReducer = (state, action) => {
    switch (action.type) {
      case 'EXPIRED': {
          return state.map(task => {
              if(task.text === action.payload.text && task.status === "TODO"){
                  return {
                      ...task,
                        status : 'EXPIRED'
                  };
              }
              return task;
          });
        }
        case 'ADDTODO': {
                return [...state, {text:`${action.payload.text}`, date: `${action.payload.date}`, status: 'TODO'}];
        }
        case 'DONE': {
            return state.map(task => {
                if(task.text === action.payload.text && task.status !== "EXPIRED"){
                    return {
                        ...task,
                          status : 'DONE'
                    };
                }
                return task;
            });
        }
        case 'SEARCH': {
            const state_copy = state;
            return state_copy.filter(searchResult => {
                return searchResult.status === action.payload.searchQuery;
            });
    }
        default: {
            console.log("dziala?");
        }
      }
  };
  export default todoReducer;