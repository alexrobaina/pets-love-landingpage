import { useEffect, useState } from 'react'
import { Loader } from '../loader/Loader'
import axios from 'axios'
import Button from '../button/Button'

interface MercadoPagoButtonProps {
  product: any
}

export const MercadoPagoButton = ({ product }: MercadoPagoButtonProps) => {
  const [url, setUrl] = useState<null | string>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const generateLink = async () => {
      setLoading(true)

      try {
        const { data: preference } = await axios.post('/api/checkout', {
          product,
        })

        setUrl(preference.url)
      } catch (error) {
        console.error(error)
      }

      setLoading(false)
    }

    generateLink()
  }, [product])

  return (
    <div>
      {loading ? (
        <button disabled>
          <Loader />
        </button>
      ) : (
        <a href={url!}>comprar</a>
      )}
    </div>
  )
}
