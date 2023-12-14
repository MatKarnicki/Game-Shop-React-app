const { useContext } = require("react");
import { FruitContext } from "./FruitContext";

const FruitList = ({ setSelectedFruit }) => {
  const FruitList = useContext(FruitContext);
  return (
    <>
      <ul>
        {FruitList.map((fruit) => (
          <li key={fruit.name} onClick={() => setSelectedFruit(fruit.name)}>
            {fruit.name}, {fruit.color}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FruitList;
