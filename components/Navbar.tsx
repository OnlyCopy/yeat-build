import Image from 'next/image'
import React, { useState } from 'react'
import { Logo } from '../public/images'
import { MenuIcon,  XIcon } from '@heroicons/react/solid'

function Navbar() {
const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full py-8'>
        <div className='flex max-w-[1440px] justify-between px-3 mx-auto items-center'>
            <div className='relative w-[60px] h-[60px] cursor-pointer'>
                <Image src={Logo} alt='Yeat' layout='fill' objectFit='contain' />
            </div>
            <div>
                {/* Web navigation */}
                <ul className='space-x-8 hidden lg:flex'>
                    <li className='text-white font-semibold text-xl hover:text-green-300'>
                        <a href="/">Home</a>
                    </li>
                    <li className='text-white font-semibold text-xl hover:text-green-300'>
                        <a href="#music">Music</a>
                    </li>
                    <li className='text-white font-semibold text-xl hover:text-green-300'>
                        <a href="#shop">Shop</a>
                    </li>
                    <li className='text-white font-semibold text-xl hover:text-green-300'>
                        <a href="#about">About</a>
                    </li>
                </ul>
                {/* Mobile navigation */}
                <div onClick={() => setToggle((prev) => !prev)}>
                    <MenuIcon className={`${toggle ? 'hidden' : 'block'} w-8 h-8 text-white lg:hidden cursor-pointer`}/>
                    <XIcon className={`${!toggle ? 'hidden' : 'block'} w-8 h-8 text-white lg:hidden cursor-pointer`}/>
                </div>

                <div className={`${toggle ? 'flex' : 'hidden'} z-10 p-6 lg:hidden bg-gradient-to-b from-black to-gray-700 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                        <ul className='flex flex-col justify-end items-center flex-1'>
                            <li className='text-white font-semibold text-xl hover:text-green-300'>
                                <a href="/">Home</a>
                            </li>
                            <li className='text-white font-semibold text-xl hover:text-green-300'>
                                <a href="#music">Music</a>
                            </li>
                            <li className='text-white font-semibold text-xl hover:text-green-300'>
                                <a href="#shop">Shop</a>
                            </li>
                            <li className='text-white font-semibold text-xl hover:text-green-300'>
                                <a href="#about">About</a>
                            </li>
                        </ul>
                    </div>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar