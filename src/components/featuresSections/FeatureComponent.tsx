import { FC } from 'react'
import Image from 'next/image'

interface Props {
  title: string
  text1: string
  text2?: string
  text3?: string
  img: string
  order: boolean
}

const FeatureSections: FC<Props> = ({ title, text1, text2, text3, img, order }) => {
  return (
    <article>
      <div
        className={
          order
            ? ' flex flex-row-reverse mr-auto flex-wrap justify-center justify-items-center py-8 mx-auto  '
            : ' flex flex-row mr-auto flex-wrap justify-center justify-items-center py-8 mx-auto '
        }
      >
        <div>
          <Image src={img} alt="mockup" />
        </div>
        <div>
          <h1 className="mb-10 lg:mb-20 max-w-2xl text-3xl font-extrabold leading-none md:text-5xl xl:text-6xl text-white">
            {title}
          </h1>
          <p className="mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            {text1}
          </p>
          <p className="mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            {text2}
          </p>
          <p className="mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            {text3}
          </p>

          <br></br>
        </div>
      </div>
    </article>
  )
}

export default FeatureSections
