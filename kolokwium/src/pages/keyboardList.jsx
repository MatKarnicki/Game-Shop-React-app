import { useKeyboard } from "./keyboardContext";
const keyboardList = ({ setSelectedKeyboards }) => {
  const keyboards = useKeyboard();

  return (
    <>
      <ul>
        {keyboards.map((keyboard) => (
          <li
            key={keyboard.name}
            onClick={() => setSelectedKeyboards(keyboard)}
          >
            {keyboard.name}, {keyboard.isGamingKeyboard},{" "}
            {keyboard.dateOfProduction} {keyboard.price} {keyboard.color}
          </li>
        ))}
      </ul>
    </>
  );
};
