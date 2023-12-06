import Hero from '@/components/Hero'
import { Features } from '@/components/Features'
import Collaborate from '@/components/Collaborate'
import JointUp from '@/components/Joinup'
import Donation from '@/components/Donation'
import { FeatureSections } from '@/components/FeaturesSections'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <Prototype /> */}
      <JointUp />
      <Donation />
      <FeatureSections />
      <Collaborate />
    </>
  )
}
