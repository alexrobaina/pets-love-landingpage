import mercadopago from 'mercadopago'
import { CreatePreferencePayload } from 'mercadopago/models/preferences/create-payload.model'
import { NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'

mercadopago.configure({
  access_token: process.env.NEXT_PUBLIC_MERCADO_PAGO_ACCESSS_TOKEN!,
})

export async function POST(req: NextRequest, res: NextApiResponse) {
  try {
    const request = await req.json()
    const product = request.product
    const URL = process.env.HOST

    const preference: CreatePreferencePayload = {
      items: [
        {
          title: product.title,
          description: cutText(product.description),
          unit_price: parseInt(product.price),
          quantity: 1,
        },
      ],
      auto_return: 'approved',
      back_urls: {
        success: `${URL}/paySuccess?productId=${product.id}&title=${product.title}&price=${product.inputValue}&payType=mercadopago`,
        failure: `${URL}/payError?productId=${product.id}&title=${product.title}&price=${product.inputValue}&payType=mercadopago`,
      },
    }

    const response = await mercadopago.preferences.create(preference)

    return new NextResponse(JSON.stringify(response), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error:', error)
    return new NextResponse(JSON.stringify({ error }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}

function cutText(texto: string): string {
  if (texto.length > 200) {
    return texto.substring(0, 200) + '...' // Añade puntos suspensivos si el texto es más largo que 200 caracteres
  }
  return texto
}
