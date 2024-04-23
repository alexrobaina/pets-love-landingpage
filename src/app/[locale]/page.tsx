import Hero from '@/components/Hero'
import { Features } from '@/components/Features'
import { FeaturesSections } from '@/components/FeaturesSections'
import Collaborate from '@/components/Collaborate'
import JointUp from '@/components/Joinup'
import Donation from '@/components/Donation'
import Prototype from '@/components/Prototype'
// import { Sponsors } from '@/components/Sponsors'

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Sponsors /> */}
      <Features />
      <Prototype />
      <JointUp />
      <Donation />
      <FeaturesSections />
      <Collaborate />
    </main>
  )
}
