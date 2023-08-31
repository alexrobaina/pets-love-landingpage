import { FC } from 'react'
import Image from 'next/image'

interface Props {
  content: any
  img: string
  order: boolean
  flip?: boolean
}

const FeatureSections: FC<Props> = ({ flip, content, img, order }) => {
  return (
    <article
      className={
        order
          ? ' flex flex-col md:flex-row-reverse mr-auto items-center py-8 mx-auto'
          : ' flex flex-col md:flex-row mr-auto justify-center items-center py-8 mx-auto '
      }
    >
      <div>
        <Image
          src={img}
          width={650}
          alt='mockup'
          className={`${flip && 'transform -scale-x-100'}`}
        />
      </div>
      <div>{content}</div>
    </article>
  )
}

export default FeatureSections
