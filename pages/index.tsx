import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Marwan Sa-ad | Portfolio</title>
        <meta
          name="description"
          property="description"
          content="Hi there, I am a full stack flutter mobile app and web app
        developer. I have been building small and medium sized mobile and
        web apps for over 3 years now. I can help you build your mobile or
        web apps from a simple to-do list app to a whole e-commerce store."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Header />
        <Navbar />
        <About />
        <Experience />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </Box>
    </>
  );
};

export default Home;
