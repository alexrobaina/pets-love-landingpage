import { FC } from 'react'
import Image from 'next/image'

interface Props {
  content: any
  img: string
  order: boolean
}

const FeatureSections: FC<Props> = ({ content, img, order }) => {
  return (
    <article
      className={
        order
          ? ' flex flex-row-reverse mr-auto flex-wrap justify-center items-center py-8 mx-auto  '
          : ' flex flex-row mr-auto flex-wrap justify-center items-center py-8 mx-auto '
      }
    >
      <div>
        <Image src={img} alt='mockup' width={650} />
      </div>
      <div>{content}</div>
      {/* <div className='text-primary-950'>
        <h1 className='mb-10 max-w-2xl text-2xl font-extrabold leading-none md:text-4xl xl:text-5xl'>
          {title}
        </h1>
        <h3 className='mb-3 lg:mb-5 max-w-2xl text-md font-bold leading-none md:text-xl xl:text-md'>
          {subtitle1}
        </h3>
        <p className='mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl'>
          {text1}
        </p>
        <h3 className='mb-3 lg:mb-5 max-w-2xl text-md font-bold leading-none md:text-xl xl:text-md'>
          {subtitle2}
        </h3>
        <p className='mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl '>
          {text2}
        </p>
        <h3 className='mb-3 lg:mb-5 max-w-2xl text-md font-bold leading-none md:text-xl xl:text-md'>
          {subtitle3}
        </h3>
        <p className='mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl '>
          {text3}
        </p>
      </div> */}
    </article>
  )
}

export default FeatureSections
