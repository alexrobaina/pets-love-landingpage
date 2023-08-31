
import axios from 'axios';
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await axios.get(`https://ipinfo.io?token=${process.env.IPINFO_TOKEN}}`);
    const data = response.data;
  
    return new NextResponse(JSON.stringify(data), {
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