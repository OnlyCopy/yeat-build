import Image from 'next/image'
import React from 'react'
import { merch } from '../pages/const'
import ShopItem from './ShopItem'


function Merch() {
  return (
    <section id='shop' className='py-10'>
      <div className="w-full flex justify-between mb-4 px-8">
        <h2 className="text-2xl font-bold text-white">Twizzy Rich</h2>
        <span className="text-lg text-gray-400 cursor-pointer">View all</span>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-around items-center">
          {merch.map((merch) => (
                  <ShopItem key={merch.id} {...merch} />
              ))}
      </div>
      <div></div>
    </section>
  )
}

export default Merch