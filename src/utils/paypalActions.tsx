import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

export const PayPalButton = ({ amount }: any) => {
  return (
    <PayPalScriptProvider
      options={{
        clientId:
          'AVfzHHTOClrYN5HMMqvvg_WwziOKNpMI1T0PSmecm0I45vRSRsXzJQ1jKa7NEAtrYULVg785GlFb-Wof',
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
