import { useState } from "react";
import { KeyboardProvider } from "./keyboardContext";
import { KeyboardList } from "./keyboardList";
import { keyboardForm } from ".keyboardForm";
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
        <keyboardForm></keyboardForm>
      </KeyboardProvider>
    </>
  );
};

export default Keyboard;
