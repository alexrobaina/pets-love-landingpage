'use client'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { FC, useState } from 'react'
import Button from '../button/Button'
import { ReactModal } from '../ReactModal'
import { PayPalButton } from '@/utils/paypalActions'
import { useTranslations } from 'next-intl'

interface Props {
  image: string | StaticImageData
  title: string
  description: string
  description2?: string
  reward: string[]
  icon: string
}

const DonationCard: FC<Props> = ({
  image,
  title,
  description,
  description2,
  reward,
  icon,
}) => {
  const [isOpenDonationModal, setIsOpenDonationModal] = useState(false)
  const [inputValue, setInputValue] = useState(0)
  const t = useTranslations('donationCard')

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setInputValue(parseInt(event.target.value))
  }

  const handleOpenDonationModal = () => {
    setIsOpenDonationModal(!isOpenDonationModal)
  }

  return (
    <>
      <article>
        <div className='w-[392px] px-4 bg-white rounded-md shadow-sm'>
          <Image className='pt-4 pb-4' src={image} alt={'cardImage'} width={380} />
          <h5 className=' text-primary-950 h-28 py-2 marker: text-xl font-bold leading-none md:text-xl xl:text-2xl'>
            {title}
          </h5>
          <div className='flex flex-col'>
            <label className='text-primary-950 lg:mb-2 py-2 marker: text-xl font-bold leading-none md:text-xl xl:text-2xl'>
              ${inputValue}
            </label>
            <input
              type='range'
              id='donation'
              name='donation'
              min='0'
              max='100'
              onChange={handleInput}
              className='accent-primary-900 bg-primary-200 appearance-none h-1'
            />
          </div>
          <p className='text-primary-900 mb-2 text-md py-4'>{description}</p>
          <p className='text-primary-900 lg:mb-2 marker: text-sm font-bold leading-none md:text-sm xl:text-md'>
            {description2}
          </p>
          <hr className='w-80 my-2 border-neutral-200 sm:mx-auto lg:my-8' />

          {reward.map((rewards, index) => {
            return (
              <ul
                key={index}
                className='flex gap-4 py-2 justify-start items-start w-full'
              >
                <Image src={icon} alt={'reward image'} width={80} />
                <li className='text-neutral-500 text-md'>{rewards}</li>
              </ul>
            )
          })}
          <div className='flex justify-center p-8'>
            <Button
              wFull
              text={'Donar'}
              type='secondary'
              onClick={handleOpenDonationModal}
            />
          </div>
        </div>
      </article>
      <ReactModal
        buttonClose
        height='80%'
        title='Donar'
        isOpen={isOpenDonationModal}
        closeModal={() => handleOpenDonationModal()}
      >
        <div className='w-full mt-10'>
          <Image className='w-full' src={image} alt={'cardImage'} width={380} />
          <h5 className=' text-primary-950  py-2 marker: text-xl font-bold leading-none md:text-xl xl:text-2xl'>
            {title}
          </h5>
          <p className='text-primary-900 mb-2 text-md py-4'>{description}</p>

          <label className='flex justify-end text-primary-950 lg:mb-2 py-2 marker: text-xl font-bold leading-none md:text-xl xl:text-2xl'>
            {t('total')} ${inputValue}
          </label>
          {PayPalButton(100)}
        </div>
      </ReactModal>
    </>
  )
}

export default DonationCard
