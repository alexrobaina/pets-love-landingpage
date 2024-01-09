'use client'
import { CheckIcon } from '@/assets/icons'
import React, { useEffect, useState } from 'react'
import DonationCard from './components/DonationCard'
import { useTranslations } from 'next-intl'
import axios from 'axios'
import { DOLAR_BLUE_URL } from '@/constants/URL'
import { getLocation } from '@/services/getLocation'
import { CatComputer, Dogfood, Vet } from '@/assets/images'

const donations = [
  {
    id: 1,
    image: CatComputer,
    price: 1,
    peaks: [''],
    title: 'Muchas gracias',
    description1:
      'Desde lo más profundo de nuestros corazones y la punta de nuestras colas, GRACIAS por ser un increíble Sostenedor de Refugios y Aliado de Adoptantes. Tu generosidad no solo cambia números; cambia vidas—¡Tanto peludas como humanas! Tu contribución llena nuestra misión de amor y hace posible cada movimiento de cola, ronroneo y pio pio. Gracias por ser parte de este maravilloso viaje hacia un mundo lleno de más colas en movimiento y hogares amorosos.',
    description2: '❤️ ¡Gracias por tu compromiso! ❤️',
    reward1:
      'Recibirás un boletín mensual exclusivo donde te mantendremos al día con el progreso, noticias y logros de nuestra aplicación.',
    reward2: '',
  },
  {
    id: 2,
    image: Vet,
    price: 10,
    peaks: [''],
    title: 'Atención Veterinaria que Desesperadamente Necesitan',
    description1:
      'Cada año, millones de mascotas no reciben la atención veterinaria necesaria debido a limitaciones económicas. Un problema simple como una pata rota o una afección cutánea puede convertirse en una situación potencialmente mortal si no se trata a tiempo. Cada mascota merece recibir la atención médica que necesita, independientemente de la situación financiera de su dueño.',
    description2: '❤️ ¡Gracias por tu compromiso! ❤️',
    reward1:
      'Elegiremos minuciosamente los casos que requieren atención veterinaria urgente y colaboraremos con veterinarios y clínicas para garantizar tratamientos óptimos. Mantendremos una comunicación abierta sobre cómo tu donación está beneficiando a los animales.',
  },
  {
    id: 3,
    image: Dogfood,
    price: 25,
    peaks: [''],
    title: '🍲 Dona 20kg de Comida 🍲',
    description1:
      "Dona 20kg de comida a los refugios de Pet's Love y marca la diferencia en la vida de las mascotas necesitadas. Tu amor y cuidado se reflejan en cada grano. Únete a llenar corazones peludos de alegría y gratitud. 🐾❤️🍲",
    description2: '❤️ ¡Dona hoy y alimentemos el amor! ❤️',
    reward1: 'Llevaremos 20 kilos de comida premium a refugios cercanos.',
    reward2:
      'Recibirás un boletín mensual exclusivo donde te mantendremos al día con el progreso, noticias y logros de nuestra aplicación.',
    reward3: '',
  },
]

const Donation = () => {
  const [dolarBlue, setDolarBlue]: any = useState(0)
  const t = useTranslations('donationCard')

  const getLocalstorageCountry = async () => {
    await getLocation()
  }

  const getDolarBlue = async () => {
    try {
      const result = await axios.get(DOLAR_BLUE_URL)

      const dolarBlue = result?.data?.compra

      setDolarBlue(dolarBlue)
    } catch (error) {
      console.log(error)
    }
  }

  const calculatePrice = (price: number) => {
    if (typeof window !== 'undefined') {
      const country = localStorage.getItem('country')
      if (country === 'AR') {
        const arPrice = price * parseInt(dolarBlue)
        return Math.round(arPrice / 100) * 100
      }
      return price
    }
  }

  const getCurrency = () => {
    if (typeof window !== 'undefined') {
      const country = localStorage.getItem('country')
      if (country === 'AR') {
        return 'ARS'
      }
      return 'USD'
    }
  }

  useEffect(() => {
    getDolarBlue()
    getLocalstorageCountry()
  }, [])

  return (
    <section>
      <div className="flex lg:flex-row flex-col gap-2 py-8">
        {donations.map((product: any) => {
          return (
            <DonationCard
              id={product.id}
              key={product.id}
              icon={CheckIcon}
              image={product.image}
              reward={product.peaks}
              currency={getCurrency() || 'USD'}
              price={calculatePrice(product.price) || 0}
              title={t(`donationCard${product.id}.title`)}
              description={t(`donationCard${product.id}.description1`)}
              description2={t(`donationCard${product.id}.description2`)}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Donation
