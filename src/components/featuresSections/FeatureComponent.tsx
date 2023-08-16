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
          ? ' flex flex-row-reverse mr-auto flex-wrap justify-center items-center py-8 mx-auto   '
          : ' flex flex-row mr-auto flex-wrap justify-center items-center py-8 mx-auto '
      }
    >
      <div>
        <Image src={img} alt="mockup" width={650} />
      </div>
      <div>{content}</div>
    </article>
  )
}

export default FeatureSections
