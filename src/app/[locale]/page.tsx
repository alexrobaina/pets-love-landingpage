import Hero from '@/components/Hero'
import { Features } from '@/components/Features'
import { FeaturesSections } from '@/components/FeaturesSections'
import Collaborate from '@/components/Collaborate'
import JointUp from '@/components/Joinup'
import Donation from '@/components/Donation'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <Prototype /> */}
      <JointUp />
      <Donation />
      <FeaturesSections />
      <Collaborate />
    </>
  )
}
