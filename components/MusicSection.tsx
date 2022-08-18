import Image from 'next/image'
import React from 'react'
import { music } from '../public/const'
import MusicCard from '../components/MusicCard'


const  MusicSection = () => {
  return (
   <section id="music" className='pt-10'>
    <div className="w-full flex justify-between mb-4 px-8">
      <h2 className="text-2xl font-bold text-white">Latest Music</h2>
      <span className="text-lg text-gray-400 cursor-pointer">View all</span>
    </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-y-8 px-8'>
            {music.map((music) => (
                <MusicCard key={music.id} {...music} />
            ))}
        </div>
   </section>
  )
}

export default MusicSection