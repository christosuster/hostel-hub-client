import AuthProvider from "../Components/contexts/AuthProvider";
import { RoomProvider } from "../Components/contexts/RoomContext";
import Footer from "../Components/Home/Footer";
import Navbar from "../Components/nav";
import "../styles/globals.css";
import swal from "sweetalert";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Super Hostel Portal</title>
        <link rel="icon" href="/favicon3.ico" />
      </Head>
      <AuthProvider>
        <RoomProvider>
          <Component {...pageProps} />
        </RoomProvider>
      </AuthProvider>
    </>
  );
}
