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
    <article className="bg-indigo-950">
      <div className="grid py-8 4 mx-auto grid-flow-row-dense max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div
          className={
            order
              ? 'hidden lg:mt-0 lg: col-start-7 col-end-12 lg:flex'
              : 'hidden lg:mt-0 lg: col-start-1 col-end-6 lg:flex'
          }
        >
          <Image src={img} alt="mockup" />
        </div>
        <div
          className={
            order
              ? 'place-self-center mr-auto lg: col-start-1 col-end-6'
              : 'place-self-center mr-auto lg:col-start-7 col-end-12'
          }
        >
          <h1 className="mb-20 max-w-2xl text-3xl font-extrabold leading-none md:text-5xl xl:text-6xl text-white">
            {title}
          </h1>
          <p className="mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            {text1}
            <br></br>
            <br></br>
            {text2}
            <br></br>
            <br></br>
            {text3}
          </p>
          <br></br>
        </div>
      </div>
    </article>
  )
}

export default FeatureSections
