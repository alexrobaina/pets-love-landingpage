import prisma from '@/prisma/prisma'
import axios from 'axios'
import { NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'

export async function PUT(req: NextRequest, res: NextApiResponse) {
  try {
    const request = await req.json()
    const body: any = request

    const config = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MERCADO_PAGO_ACCESSS_TOKEN}`,
      },
    }

    const mercadoPagoPreferences = await axios.get(
      `https://api.mercadopago.com/v1/payments/${body.paymentId}`,
      config,
    )

    const data: any = {
      email: body.email,
      productId: body.productId,
      paymentId: body.paymentId,
      approved: mercadoPagoPreferences.data.status === 'approved' ? true : false,
    }

    const donation = await prisma.donation.updateMany({
      where: {
        order: parseInt(body.order)
      },
      data})

    return new NextResponse(JSON.stringify(donation), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error:', error)

    return new NextResponse(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
