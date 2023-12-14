import { useContext, useState } from "react";
import { DispatchContext } from "./FruitContext";

const FruitForm = ({ selectedFruit }) => {
  const [fruitColor, setFruitColor] = useState("");
  const dispatch = useContext(DispatchContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "MODIFY_FRUIT",
      payload: { name: selectedFruit, color: fruitColor },
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        Color:{" "}
        <input
          type="text"
          onChange={(e) => setFruitColor(e.target.value)}
        ></input>
        <button type="submit">Modify Current Fruit</button>
      </form>
    </>
  );
};

export default FruitForm;
