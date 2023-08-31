import { useState } from 'react'
import axios from 'axios'
import Button from '../button/Button'
import { IconMercadopagoLogo } from '@/assets/icons'
import { useTranslations } from 'next-intl'

interface MercadoPagoButtonProps {
  product: any
  validations: any
}

export const MercadoPagoButton = ({ product, validations }: MercadoPagoButtonProps) => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const t = useTranslations('donationCard')

  const generateLink = async () => {
    if (!validations()) return
    setLoading(true)

    try {
      const { data } = await axios.post('/api/mercadoPago', {
        product,
      })

      window.location.href = data.response.init_point
    } catch (error) {
      console.error(error)
    }

    setLoading(false)
  }

  return (
    <Button
      type='primary'
      isLoading={isLoading}
      backgroundColor='#039FE3'
      icon={IconMercadopagoLogo}
      text={t('donationMecadoPagoButton')}
      onClick={() => generateLink()}
    />
  )
}
