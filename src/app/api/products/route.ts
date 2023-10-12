import axios from 'axios';
import { NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(_req: NextRequest, _res: NextApiResponse) {
  try {
  const {data} = await axios.get(`${process.env.API}/api/v1/products/`)

    return new NextResponse(JSON.stringify(data.product), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}