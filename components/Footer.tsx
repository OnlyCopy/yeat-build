import Image from 'next/image'
import React from 'react'
import { Twizzy } from '../public/images'

function Footer() {
  return (
    <footer className="w-full py-10">
        <div className='max-w-[1440px] mx-auto flex flex-col items-center'>
            <div className='relative w-24 h-24 mb-2'>
                <Image draggable='false' className='hover:scale-125 hover:rotate-45 transition-all' src={Twizzy} layout="fill" objectFit="contain"/>
            </div>
            <div>
                <h1 className='text-3xl font-bold text-green-700'>A Caip Year Website &copy; 2022</h1>
            </div>
        </div>
    </footer>
  )
}

export default Footer