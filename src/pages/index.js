import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Eye from '@/components/Eye/Eye'
import DustParticles from '@/components/DustParticles/DustParticles'
import EyeContainer from '@/components/EyeContainer/EyeContainer'
import BuildingMarquee from '@/components/BuildingMarquee/BuildingMarquee'
import FirstQuote from '@/components/FirstQuote/FirstQuote'
import About from '@/components/About/About'
import AboutBackground from '@/components/AboutBackground/AboutBackground'
import Projects from '@/components/Projects/Projects'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sewa - Portfolio </title>
        <meta name="description" content="Portfolio of osunkalu oluwasewa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='h-screen'>
       <Navbar />
       <Hero />
       <EyeContainer />
       <BuildingMarquee />
       <FirstQuote />
       <About />
       <AboutBackground />
       <Projects />
       <FirstQuote />
       <Footer />
       {/* <Eye /> */}
       {/* <DustParticles /> */}
      </main>
    </>
  )
}
