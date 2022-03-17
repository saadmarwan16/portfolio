import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Marwan</title>
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
      </Box></>
  )
}

export default Home
