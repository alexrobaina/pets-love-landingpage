import TermsPrivacy from '@/components/TermsPrivacy/TermsPrivacy'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms',
  description: 'Terms & Conditions',
}

const Terms = () => {
  return (
    <>
      <TermsPrivacy />
    </>
  )
}

export default Terms
