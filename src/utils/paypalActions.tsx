import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

export const PayPalButton = ({ amount }: any) => {
  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
      }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                },
              },
            ],
          })
        }}
      />
    </PayPalScriptProvider>
  )
}
