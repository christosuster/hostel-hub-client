import Head from "next/head";
import MainLayout from "../../Components/MainLayout/MainLayout";
import MainHome from "../../Components/Home/MainHome/MainHome";

export default function Home() {
  return (
    <>
      <Head>
        <title>Super Hostel</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainLayout>
          <MainHome></MainHome>
        </MainLayout>
      </main>
    </>
  );
}
