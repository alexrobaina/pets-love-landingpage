import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import { Sponsors } from '@/components/sponsors/Sponsors'
import { Features } from '@/components/features/Features'
import Prototype from '@/components/prototype/Prototype'
import { FeatureSections } from '@/components/featuresSections/FeatureSections'
import AboutMe from '@/components/aboutme/AboutMe'
import Colaborate from '@/components/colaborate/Colaborate'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Sponsors />
      <Features />
      <Prototype />
      <FeatureSections />
      <AboutMe />
      <Colaborate />
      <Footer />
    </>
  )
}

{
  /* <div className="bg-petLove w-full z-10 h-screen bg-cover bg-no-repeat"></div> */
}
