import mercadopago from 'mercadopago'
import { CreatePreferencePayload } from 'mercadopago/models/preferences/create-payload.model'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse, NextRequest } from 'next/server'

mercadopago.configure({
  access_token: process.env.NEXT_PUBLIC_MERCADO_PAGO_ACCESSS_TOKEN!,
})

export async function POST(req: NextRequest, res: NextApiResponse) {
  const request = await req.json()

  const product = request.product
  const URL =  process.env.HOST;

  try {
    const preference: CreatePreferencePayload = {
      items: [
        {
          title: product.title,
          unit_price: product.inputValue,
          picture_url: product.image,
          quantity: 1,
        },
      ],
      auto_return: 'approved',
      back_urls: {
        success: `${URL}/thanks`,
        failure: `${URL}`,
      },
    }
    const response = await mercadopago.preferences.create(preference)

    return NextResponse.json(response)
  } catch (error) {
    console.log(error)
  }
}
