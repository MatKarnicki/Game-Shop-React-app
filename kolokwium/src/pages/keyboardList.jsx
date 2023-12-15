import { useKeyboard } from "./keyboardContext";

const KeyboardList = ({ setSelectedKeyboard }) => {
  const keyboards = useKeyboard();

  return (
    <>
      <ul>
        {keyboards.map((keyboard) => (
          <li key={keyboard.name} onClick={() => setSelectedKeyboard(keyboard)}>
            {keyboard.name}, {keyboard.isGamingKeyboard.toString()},
            {keyboard.dateOfProduction} {keyboard.price} {keyboard.color}
          </li>
        ))}
      </ul>
    </>
  );
};

export default KeyboardList;
