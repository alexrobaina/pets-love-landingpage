import { Catcard1, Catcard2, CupCard, FoodCard } from '@/assets/images'
import { CheckIcon } from '@/assets/icons'
import React from 'react'
import DonationCard from './DonationCard'

const REWARDS = [
  'Recibiras un boletín mensual exclusivo donde te mantendremos al tanto de los avances, novedades y logros de nuestra aplicación.',
]

const DonationMain = () => {
  return (
    <>
      <section className="flex justify-around py-8">
        <DonationCard
          image={Catcard1}
          title={'¡Muchas Gracias por Ser Parte de Nuestro Equipo!'}
          description={
            'Tu apoyo es invaluable para nosotros. Queremos expresar nuestro sincero agradecimiento por ser parte activa de Pets Love. Como muestra de nuestra gratitud, recibirás nuestro boletín mensual exclusivo donde te mantendremos al tanto de los avances, novedades y logros de nuestra aplicación. Juntos, estamos creando un impacto positivo en el mundo de las mascotas.'
          }
          greeting="¡Gracias por tu compromiso! 🐾❤️"
          reward={REWARDS}
          icon={CheckIcon}
        />
        <DonationCard
          image={Catcard2}
          title={'¡Muchas Gracias por Ser Parte de Nuestro Equipo!'}
          description={
            'Tu apoyo es invaluable para nosotros. Queremos expresar nuestro sincero agradecimiento por ser parte activa de Pets Love. Como muestra de nuestra gratitud, recibirás nuestro boletín mensual exclusivo donde te mantendremos al tanto de los avances, novedades y logros de nuestra aplicación. Juntos, estamos creando un impacto positivo en el mundo de las mascotas.'
          }
          greeting="¡Gracias por tu compromiso! 🐾❤️"
          reward={REWARDS}
          icon={CheckIcon}
        />
        <DonationCard
          image={CupCard}
          title={'¡Muchas Gracias por Ser Parte de Nuestro Equipo!'}
          description={
            'Tu apoyo es invaluable para nosotros. Queremos expresar nuestro sincero agradecimiento por ser parte activa de Pets Love. Como muestra de nuestra gratitud, recibirás nuestro boletín mensual exclusivo donde te mantendremos al tanto de los avances, novedades y logros de nuestra aplicación. Juntos, estamos creando un impacto positivo en el mundo de las mascotas.'
          }
          greeting="¡Gracias por tu compromiso! 🐾❤️"
          reward={REWARDS}
          icon={CheckIcon}
        />
      </section>
    </>
  )
}

export default DonationMain
