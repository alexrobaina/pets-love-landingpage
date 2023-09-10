import Hero from '@/components/Hero/Hero'
import { Features } from '@/components/Features/Features'
import Prototype from '@/components/Prototype/Prototype'
import { FeatureSections } from '@/components/FeaturesSections/FeatureSections'
import Collaborate from '@/components/Collaborate/Collaborate'
import JointUp from '@/components/Joinup/JointUp'
import Donation from '@/components/Donation/Donation'

export default function Home () {
  return (
    <>
      <Hero />
      <Features />
      <Prototype />
      <JointUp />
      <Donation />
      <FeatureSections />
      <Collaborate />
    </>
  )
}
