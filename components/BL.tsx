import Image from 'next/image'
import React from 'react'
import { Yeat } from '../public/images'

function BL() {
  return (
    <div className="relative w-[500px] lg:w-[550px] h-[275px]">
        <Image draggable="false" src={Yeat} objectFit="contain" layout='fill' />
    </div>
  )
}

export default BL