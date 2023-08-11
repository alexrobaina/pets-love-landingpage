import { PayPalButton } from '@/utils/paypalActions'
import { useState } from 'react'

export const usePaypalPaymentGateway = () => {
  const [results, setResults]: any = useState()

  const handlePaymentSuccess = (details: any, data: any) => {
    setResults({ details, data })
  }

  const paypalButton = (amount: number) => (
    <PayPalButton amount={amount} onSuccess={handlePaymentSuccess} />
  )

  return { paypalButton, results }
}
