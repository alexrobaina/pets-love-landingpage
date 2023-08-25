'use client'

import Button from '@/components/button/Button'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { GrGithub } from 'react-icons/gr'

const PaySuccess = () => {
  const searchParams = useSearchParams()
  const productId = searchParams.get('productId')
  const title = searchParams.get('title')
  const price = searchParams.get('price')
  const payType = searchParams.get('payType')
  const email = searchParams.get('email')
  const order = searchParams.get('order')

  const paymentId = searchParams.get('payment_id')

  const updateDonation = async () => {
    const data = {
      productId,
      title,
      price,
      order,
      payType,
      email,
      paymentId,
    }
    await axios.put('/api/updateDonation', data)
  }

  useEffect(() => {
    updateDonation()
  })

  return (
    <div className='p-6 h-screen'>
      <div className='shrink-0'>
        <GrGithub width={50} />
      </div>
      <div>
        <h1 className='text-primary-950 text-3xl'>{title}</h1>
        <p className='text-slate-500'>
          Para finalizar la compra envianos el comprobante a nuestro whatsapp
        </p>
        <div></div>
      </div>

      <Button text='whatsapp button' />
    </div>
  )
}

export default PaySuccess