import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mas Rayfa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Hero />
        {/* <Projects /> */}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
