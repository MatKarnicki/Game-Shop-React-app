import React from "react";
import PageContextProvider from "./contexts/PageContextProvider";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.jpg";
import "./style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GameFormContextProvider from "./contexts/GameFormContextProvider";
import DeveloperFormContextProvider from "./contexts/DeveloperFormContextProvider";

const MyApp = ({ Component, pageProps }) => {
  return (
    <PageContextProvider>
      <DeveloperFormContextProvider>
        <GameFormContextProvider>
          <Link href="/Home">
            <Image src={logo} alt="GameVault" width={250} height={150}></Image>
          </Link>
          <br />
          <Component {...pageProps} />
          <ToastContainer />
        </GameFormContextProvider>
      </DeveloperFormContextProvider>
    </PageContextProvider>
  );
};
export default MyApp;
