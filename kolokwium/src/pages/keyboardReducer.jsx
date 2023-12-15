export function keyboardReducer(state, action) {
  switch (action.type) {
    case "ADD_KEYBOARD": {
      return [
        ...state,
        {
          name: action.payload.name,
          isGamingKeyboard: action.payload.gaming,
          dateOfProduction: action.payload.date,
          price: action.payload.price,
          color: action.payload.color,
        },
      ];
    }
    case "DELETE_KEYBOARD": {
      return state.filter((keyboard) => {
        return keyboard.name !== action.payload.name;
      });
    }
    case "MODIFY_KEYBOARD": {
      return state.map((keyboard) => {
        if (keyboard.name === action.payload.name) {
          return {
            name: action.payload.name,
            isGamingKeyboard:
              action.payload.gaming || keyboard.isGamingKeyboard,
            dateOfProduction: action.payload.date || keyboard.dateOfProduction,
            price: action.payload.price || keyboard.price,
            color: action.payload.color || keyboard.color,
          };
        }
      });
    }
    case "SEARCH_KEYBOARD": {
      return state.filter((keyboard) => {
        return keyboard.name !== action.payload.name;
      });
    }
    default:
      return state;
  }
}
