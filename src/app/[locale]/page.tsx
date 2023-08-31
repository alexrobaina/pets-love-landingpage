'use client'
import Hero from '@/components/hero/Hero'
import { Features } from '@/components/features/Features'
import Prototype from '@/components/prototype/Prototype'
import { FeatureSections } from '@/components/featuresSections/FeatureSections'
import Collaborate from '@/components/collaborate/Collaborate'
import JointUp from '@/components/joinup/JointUp'
import { useTranslations } from 'next-intl'
import Donation from '@/components/Donation/Donation'
import { useEffect } from 'react'
import { getLocation } from '@/services/getLocation'

export default function Home () {
  const t = useTranslations('navbar')

  useEffect(() => {
    getLocation()
  }, [])

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
