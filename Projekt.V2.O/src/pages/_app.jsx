import React from "react";
import PageContextProvider from "./PageContextProvider";

const MyApp = ({ Component, pageProps }) => {
  return (
    <PageContextProvider>
      <Component {...pageProps} />
    </PageContextProvider>
  );
};
export default MyApp;
