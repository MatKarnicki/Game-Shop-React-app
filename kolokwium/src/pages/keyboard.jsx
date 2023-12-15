import { useState } from "react";
import { KeyboardProvider } from "./keyboardContext";
import { KeyboardList } from "./keyboardList";

const Keyboard = () => {
  const [selectedKeyboard, setSelectedKeyboard] = useState(null);

  return (
    <>
      <KeyboardProvider>
        <div>
          <KeyboardList
            setSelectedKeyboard={setSelectedKeyboard}
          ></KeyboardList>
        </div>
      </KeyboardProvider>
    </>
  );
};

export default Keyboard;
