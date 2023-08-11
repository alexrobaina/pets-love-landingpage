import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

export const PayPalButton = ({ amount }: any) => {
  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.PAYPAL_CLIENT_ID || '',
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
