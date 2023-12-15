import { useState } from "react";
import { KeyboardProvider } from "./keyboardContext"
import { KeyboardList} from "./keyboardList"

const Keyboard = () => {
    const [selectedKeyboard, setSelectedKeyboard] = useState(null);

    return (
        <>
        <KeyboardProvider>
            <div>
                <
            </div>
        </KeyboardProvider>
        </>
    )
};


export default Keyboard;
