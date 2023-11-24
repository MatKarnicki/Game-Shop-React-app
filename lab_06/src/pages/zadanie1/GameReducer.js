const gameReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_GAME': {
            return [...state,
                {
                    name: action.payload.name,
                    yearOfRelease: action.payload.year,
                    platform: action.payload.platform,
                    myScore: action.payload.score,
                    finished: action.payload.finished
                }
            ];
        }
        case 'MODIFY_GAME': {
            return state.map(game => {
                if (game.name === action.payload.name) {
                    return {
                        name: action.payload.name || game.name,
                        yearOfRelease: action.payload.year || game.yearOfRelease,
                        platform: action.payload.platform || game.platform,
                        myScore: action.payload.score || game.myScore,
                        finished: action.payload.finished
                    };
                }
                return game;
            });
        }
        case 'FINISH_GAME': {
            return state.map(game => {
                if (game.name === action.payload.name) {
                    return {
                        ...game,
                        finished: true
                    };
                }
                return game;
            });
        }
        case 'DELETE_GAME': {
            return state.filter(game => {
                return game.name !== action.payload.name;
            });
        }
        default:
            return state;
    }
};
export default gameReducer