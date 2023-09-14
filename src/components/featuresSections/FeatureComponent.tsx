import { FC } from 'react'
import Image from 'next/image'
import View from '@/components/useView/useInView'

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
      <View>
        <div>
          <Image
            src={img}
            width={650}
            alt="mockup"
            className={`${flip && 'transform -scale-x-100'}`}
          />
        </div>
      </View>
      <View>
        <div>{content}</div>
      </View>
    </article>
  )
}

export default FeatureSections
