import { NextResponse } from 'next/server'
import * as mercadopago from 'mercadopago';

 
export async function GET(req: Request, res: any) {
  
  try {
    return new Response(JSON.stringify({ name:' email' }))
    
  } catch (error) {
    console.log(2,error);
    
  }
}

// export async function handle(request: Request, response: Response) {
//     try {
//         const preference: any = {
//             items: [
//                 {
//                     title: 'request.body.description', // Remove quotes around req.body.description
//                     unit_price: Number(100),
//                     quantity: Number(1),
//                 },
//             ],
//             back_urls: {
//                 success: "http://localhost:5173",
//                 failure: "http://localhost:5173",
//                 pending: "",
//             },
//             auto_return: "approved",
//         };

//         mercadopago.configure({
//             access_token: 'TEST-5571996175740297-081414-d1f8fe068461786de0664cf9de546c73-1451140676',
//         });

//         const preferenceResponse = await mercadopago.preferences.create(preference);
    
//         return NextResponse.json({ id: preferenceResponse.body.id})
        
//     } catch (error) {
//         console.log(error);
//     return NextResponse.json({ error })

//     }
// }