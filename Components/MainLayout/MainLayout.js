import React from "react";
import Footer from "../Home/Footer";
import Navbar from "../nav";
import Head from "next/head";

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Super Hostel</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
