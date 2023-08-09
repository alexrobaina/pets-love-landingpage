import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import { Features } from '@/components/features/Features'
import Prototype from '@/components/prototype/Prototype'
import { FeatureSections } from '@/components/featuresSections/FeatureSections'
import Colaborate from '@/components/colaborate/Colaborate'
import JointUp from '@/components/joinup/JointUp'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Prototype />
      <JointUp />
      <FeatureSections />
      {/* <Colaborate /> */}
    </>
  )
}

{
  /* <div className="bg-petLove w-full z-10 h-screen bg-cover bg-no-repeat"></div> */
}
