import React from 'react'
import mercadoPago from 'mercadopago'
import Button from '@/components/button/Button'

const MercadoPago = () => {
  mercadoPago.configure({
    access_token:
      'TEST-5571996175740297-081414-d1f8fe068461786de0664cf9de546c73-1451140676',
  })

  const payment = async () => {
    await mercadoPago.preferences
      .create({
        items: [
          {
            title: 'Test',
            unit_price: 100,
            quantity: 1,
          },
        ],
        back_urls: {
          success: 'http://localhost:3000',
          failure: 'http://localhost:3000',
          pending: 'http://localhost:3000',
        },
        auto_return: 'approved',
      })
      .then(response => {
        alert(response.body.init_point)
      })
  }

  return (
    <div className='container_payment'>
      <Button text='Mercado pago' onClick={() => payment()} />
    </div>
  )
}

export default MercadoPago
