import { Header } from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import { Features } from '@/components/features/Features'
import Prototype from '@/components/prototype/Prototype'
import { FeatureSections } from '@/components/featuresSections/FeatureSections'
import Collaborate from '@/components/collaborate/Collaborate'
import JointUp from '@/components/joinup/JointUp'
import { useTranslations } from 'next-intl'
import { navigation } from '../constants/navigation'
import DonationMain from '@/components/donationCard/DonationMain'
import { Navbar } from '@/components/Navbar/Navbar'

export default function Home () {
  const t = useTranslations('navbar')
  const NAVIGATION = navigation(t)

  return (
    <>
      <Hero />
      <Features />
      <Prototype />
      <JointUp />
      <DonationMain />
      <FeatureSections />
      <Collaborate />
    </>
  )
}
