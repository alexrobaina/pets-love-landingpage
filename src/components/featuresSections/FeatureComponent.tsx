import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import View from '@/hook/useView'

interface Props {
  content: any
  order: boolean
  flip?: boolean
  img: StaticImageData
}

const FeatureSections: FC<Props> = ({ flip, content, img, order }) => {
  return (
    <article
      className={
        order
          ? ' flex flex-col md:flex-row-reverse mr-auto items-center py-8 mx-auto gap-5'
          : ' flex flex-col md:flex-row mr-auto justify-center items-center py-8 mx-auto gap-5'
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
