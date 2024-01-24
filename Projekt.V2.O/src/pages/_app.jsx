import React from "react";
import GamePageContextProvider from "./GamePageContextProvider";
import DeveloperPageContextProvider from "./DeveloperPageContextProvider";

const MyApp = ({ Component, pageProps }) => {
  return (
    <DeveloperPageContextProvider>
      <GamePageContextProvider>
        <Component {...pageProps} />
      </GamePageContextProvider>
    </DeveloperPageContextProvider>
  );
};
export default MyApp;
