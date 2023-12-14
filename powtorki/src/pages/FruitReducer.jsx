export function fruitReducer(state, action) {
  switch (action.type) {
    case "MODIFY_FRUIT": {
      return state.map((fruit) => {
        console.log(action);
        if (fruit.name === action.payload.name) {
          return { name: fruit.name, color: action.payload.color };
        }
        return fruit;
      });
    }
    default:
      return state;
  }
}
