import { createContext, useContext, useReducer } from "react";
import { keyboardReducer } from "./keyboardReducer";

export const KeyboardContext = createContext(null);
export const DispatchContext = createContext(null);

export function useKeyboard() {
  return useContext(KeyboardContext);
}

export function useKeyboardDispatch() {
  return useContext(DispatchContext);
}

const initialKeyboards = [
  {
    name: "HP keyboard",
    isGamingKeyboard: false,
    dateOfProduction: "2000-01-01",
    price: 50,
    color: "black",
  },
  {
    name: "Razor Pentium 5 idk",
    isGamingKeyboard: true,
    dateOfProduction: "2023-02-24",
    price: 450,
    color: "rainbow",
  },
];

export function KeyboardProvider({ children }) {
  const [keyboards, dispatch] = useReducer(keyboardReducer, initialKeyboards);
  return (
    <>
      <KeyboardContext.Provider value={keyboards}>
        <DispatchContext.Provider value={dispatch}>
          {children}
        </DispatchContext.Provider>
      </KeyboardContext.Provider>
    </>
  );
}
