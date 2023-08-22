import prisma from '@/prisma/prisma'
import { NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'


export async function POST(req: NextRequest, res: NextApiResponse) {
  try {
    console.log('checkout pau');
    
    const request = await req.json();
    const data = request.product;

    const donation = await prisma.donation.create({data})

    return new NextResponse(JSON.stringify(donation), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error:', error);

    return new NextResponse(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}