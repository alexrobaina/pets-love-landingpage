import { FC } from 'react'
import Image from 'next/image'

interface Props {
  title: string
  description1: string
  description2?: string
  description3?: string
  subtitle1?: string
  subtitle2?: string
  subtitle3?: string
  img: string
  order: boolean
}

const FeatureSections: FC<Props> = ({
  title,
  subtitle1,
  subtitle2,
  subtitle3,
  description1,
  description2,
  description3,
  img,
  order,
}) => {
  return (
    <article>
      <div
        className={
          order
            ? ' flex flex-row-reverse mr-auto flex-wrap justify-center items-center py-8 mx-auto  '
            : ' flex flex-row mr-auto flex-wrap justify-center items-center py-8 mx-auto '
        }
      >
        <div>
          <Image src={img} alt="mockup" width={650} />
        </div>
        <div className="text-primary-950">
          <h1 className="mb-10 lg:mb-20 max-w-2xl text-3xl font-extrabold leading-none md:text-5xl xl:text-6xl">
            {title}
          </h1>
          <h3 className="mb-3 lg:mb-5 max-w-2xl text-md font-bold leading-none md:text-xl xl:text-md">
            {subtitle1}
          </h3>
          <p className="mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl">
            {description1}
          </p>
          <h3 className="mb-3 lg:mb-5 max-w-2xl text-md font-bold leading-none md:text-xl xl:text-md">
            {subtitle2}
          </h3>
          <p className="mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl ">
            {description2}
          </p>
          <h3 className="mb-3 lg:mb-5 max-w-2xl text-md font-bold leading-none md:text-xl xl:text-md">
            {subtitle3}
          </h3>
          <p className="mb-4 max-w-2xl font-light  lg:mb-8 md:text-lg lg:text-xl ">
            {description3}
          </p>

          <br></br>
        </div>
      </div>
    </article>
  )
}

export default FeatureSections
