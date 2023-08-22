'use client'
import Button from '@/components/button/Button'
import { useSearchParams } from 'next/navigation'
import { GrGithub } from 'react-icons/gr'

export default function PaySuccess () {
  const searchParams = useSearchParams()
  const productId = searchParams.get('productId')
  const title = searchParams.get('title')

  return (
    <>
      <div className='p-6 h-screen'>
        <div className='shrink-0'>
          <GrGithub width={50} />
        </div>
        <div>
          <h1 className='text-primary-950 text-3xl'>
            Felicitaciones tu pago fue un exito
          </h1>
          <p className='text-slate-500'>
            Para finalizar la compra envianos el comprobante a nuestro whatsapp
          </p>
          <div className='text-xl font-medium text-black'>{title}</div>
          <p className='text-slate-500'>{productId}</p>
        </div>

        <Button text='whatsapp button' />
      </div>
    </>
  )
}
