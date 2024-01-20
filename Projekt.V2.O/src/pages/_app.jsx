import React from "react";
import GamePageContextProvider from "./GamePageContextProvider";

const MyApp = ({ Component, pageProps }) => {
  return (
    <GamePageContextProvider>
      <Component {...pageProps} />
    </GamePageContextProvider>
  );
};
export default MyApp;
