import Image, { StaticImageData } from "next/image"

const shopItem = ({ product, price, img}: { product: string, price: number, img: StaticImageData }) => (
    <div className="flex flex-col text-white cursor-pointer hover:scale-110">
        <div className='relative w-[300px] h-[300px] items-center'>
            <Image src={img} alt={product} layout="fill" objectFit='contain' />
        </div>
        <div>
            <p>{product}</p>
            <p>${price}</p>
        </div>
    </div>
  )

  export default shopItem;