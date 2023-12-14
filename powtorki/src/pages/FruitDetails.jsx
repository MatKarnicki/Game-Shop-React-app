import FruitForm from "./FruitForm";

const FruitDetails = ({ fruit }) => {
  return (
    <>
      <span>Selected Fruit : {fruit}</span>
      <FruitForm selectedFruit={fruit}></FruitForm>
    </>
  );
};

export default FruitDetails;
