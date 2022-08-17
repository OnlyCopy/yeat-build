import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BL from '../components/BL'
import Disco from '../components/Disco'
import Footer from '../components/Footer'
import Merch from '../components/Merch'
import MusicSection from '../components/MusicSection'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden bg-black'>
      <Head>
        <title>Yeat | Official</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='max-w-[1440px] mx-auto'>

      {/* Navbar */}
      <Navbar />

      {/* Bl */}
      <div className="max-w-[600px] my-10 md:mx-auto z-0">
        <BL />
      </div>

      {/* Music Section */}
      <MusicSection />

      {/* Clothing */}
      <Merch />



      </div>

      {/* Description Section */}
      <Disco />
      {/* Footer */}
      <Footer />
      
    </div>
  )
}

export default Home
