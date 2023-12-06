'use client'
import { FC } from 'react'
import axios from 'axios'
import { Wallet } from '@mercadopago/sdk-react'
import { Loader } from '../Loader'
import { useQuery } from 'react-query'

interface Props {
  product: any
}

export const MercadoPagoButton: FC<Props> = ({ product }) => {
  const generateLink = async () => {
    try {
      const { data } = await axios.post('/api/mercadoPago', {
        product,
      })
      return data
    } catch (error) {
      console.error(error)
    }
  }

  const query = useQuery(`mercadopago${product.id}`, generateLink, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 0, // No retries
  })

  return (
    <>
      {query.isLoading && (
        <div className="flex justify-center">
          <Loader />
        </div>
      )}

      {query?.data?.response?.id && (
        <Wallet
          initialization={{
            preferenceId: query.data.response.id,
            redirectMode: 'modal',
          }}
          locale="es-AR"
        />
      )}
    </>
  )
}
