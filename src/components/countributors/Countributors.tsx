import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

interface Props {
  name: string
  title: string
  img: StaticImageData
}

const Countributors: FC<Props> = ({ name, title, img }) => {
  return (
    <section>
      <article className="flex flex-col flex-wrap justify-center items-center ">
        <Image className="w-20 h-20 rounded-full" src={img} alt={'contribuitor'} />
        <h3 className="mt-2 max-w-2xl text-md font-extrabold leading-none md:text-5xl xl:text-xl text-white">
          {name}
        </h3>
        <h4 className="mb-4 max-w-2xl font-light lg:mb-8 md:text-sm lg:text-lg text-gray-400">
          {title}
        </h4>
      </article>
    </section>
  )
}

export default Countributors
