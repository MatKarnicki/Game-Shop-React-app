import { fruitReducer } from "./FruitReducer";
import FruitList from "./FruitList";
import { FruitContext, DispatchContext } from "./FruitContext";
import FruitDetails from "./FruitDetails";
const { useReducer, useState } = require("react");

const Fruit = () => {
  const initialFruits = [
    { name: "Banana", color: "Yellow" },
    { name: "Apple", color: "Red" },
  ];
  const [fruits, dispatch] = useReducer(fruitReducer, initialFruits);
  const [selectedFruit, setSelectedFruit] = useState();

  return (
    <>
      <FruitContext.Provider value={fruits}>
        <DispatchContext.Provider value={dispatch}>
          <FruitList setSelectedFruit={setSelectedFruit}></FruitList>
          <div>
            <FruitDetails fruit={selectedFruit}></FruitDetails>
          </div>
        </DispatchContext.Provider>
      </FruitContext.Provider>
    </>
  );
};

export default Fruit;
