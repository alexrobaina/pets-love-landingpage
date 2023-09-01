import Hero from '@/components/hero/Hero'
import { Features } from '@/components/features/Features'
import Prototype from '@/components/prototype/Prototype'
import { FeatureSections } from '@/components/featuresSections/FeatureSections'
import Collaborate from '@/components/collaborate/Collaborate'
import JointUp from '@/components/joinup/JointUp'
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
