import PayCompleted from '@/components/PayCompleted/PayCompleted'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Donation Successfully',
  description:
    "We appreciate your invaluable support at Pet's Love. You will receive our exclusive monthly newsletter, keeping you abreast of progress, news and achievements. Together, we create a positive impact in the world of pets.🐾🌟",
}

const PaySuccess = () => {
  return <PayCompleted />
}

export default PaySuccess
