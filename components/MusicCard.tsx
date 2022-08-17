import Image, { StaticImageData } from "next/image"
import React from "react"

const MusicCard = ({ title, label, img }: {title: string, label: string, img: StaticImageData}) => (
    <div className="flex text-start items-end space-x-2">
        <div className="relative w-[100px] h-[100px]">
            <Image className="rounded-md cursor-pointer" src={img} alt={title} objectFit="contain" layout="fill" />
        </div>
        <div className='flex flex-col'>
            <h1 className="text-white font-bold text-xl md:text-2xl">{title}</h1>
            <p className="text-gray-400">{label}</p>
        </div>
    </div>
)

export default MusicCard