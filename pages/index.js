import Head from "next/head";
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Keikodevstudio </title>
        <link rel="icon" href="/assets/KEIKOLOGO.svg" />
      </Head>
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
