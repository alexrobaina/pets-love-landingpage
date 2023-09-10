import axios from 'axios';
import { NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
      const { data } = await axios.get(
        'https://api.github.com/repos/alexrobaina/frontend_petsLove/contributors',
        {
          headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
          },
        },
      )

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