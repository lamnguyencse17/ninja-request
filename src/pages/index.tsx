import { type NextPage } from "next";
import Head from "next/head";
import Favicon from "../components/shared/Favicon";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ninja Request</title>
        <meta name="description" content="Ninja Request" />
        <Favicon />
      </Head>
      <main></main>
    </>
  );
};

export default Home;
