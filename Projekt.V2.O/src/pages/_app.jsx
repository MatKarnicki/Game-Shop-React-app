import React from "react";
import PageContextProvider from "./PageContextProvider";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.jpg";
import "./style.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <PageContextProvider>
      <Link href="/Home">
        <Image src={logo} alt="GameVault" width={100} height={100}></Image>
      </Link>
      <br />
      <br />
      <br />
      <Component {...pageProps} />
    </PageContextProvider>
  );
};
export default MyApp;
