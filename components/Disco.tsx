import Image from 'next/image'
import React from 'react'
import { Discover, 
    AppleMusic,
    Spotify,
    YouTube,
    Twitter,
    Facebook,
    Instagram } from '../public/images'

function Disco() {
  return (
    <section id="about" className="w-screen h-screen">
        <div className="relative w-full h-full">
            <div className='z-0'>
                <Image draggable="false" src={Discover} objectFit="contain" layout='fill'/>

                <div className=' text-white absolute z-10 bottom-20 lg:left-60 px-8'>
                    <div>
                        <h1 className='font-bold text-4xl'>Yeat</h1> <br />
                        <h2 className='font-bold text-2xl'>About Yeat</h2> <br />
                        <p className='text-lg max-w-md'>With viral songs like 2021’s “Sorry Bout That” and “Gët Busy,” Portland hip-hop artist Yeat leans into the more upbeat, animated side of rage-rap.</p> <br />
                        <div>
                            <h1 className='font-bold text-xl'>Follow Yeat</h1> <br />
                            <ul className='flex space-x-4'>
                                <li>
                                    <a href="https://www.instagram.com/yeat/?hl=en" target="_blank">
                                        <Image className="invert hover:rotate-90 hover:scale-110 transition-all" src={Instagram} alt="instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/yeatmusic/" target="_blank">
                                        <Image className="invert hover:rotate-90 hover:scale-110 transition-all" src={Facebook} alt="facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCV4UK9LNNLViFP4qZA_Wmfw" target="_blank">
                                        <Image className="invert hover:rotate-90 hover:scale-110 transition-all" src={YouTube} alt="youtube" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://music.apple.com/us/artist/yeat/1318094493" target="_blank">
                                        <Image className="invert hover:rotate-90 hover:scale-110 transition-all" src={AppleMusic} alt="apple" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://open.spotify.com/artist/3qiHUAX7zY4Qnjx8TNUzVx" target="_blank">
                                        <Image className="invert hover:rotate-90 hover:scale-110 transition-all" src={Spotify} alt="spotify" />
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Disco