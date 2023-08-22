'use client'
import Image from 'next/image'
import React from 'react'
import { FC, useState } from 'react'
import Button from '../../button/Button'
import { useTranslations } from 'next-intl'
import { PaymentModal } from './PaymentModal'

interface Props {
  icon: string
  title: string
  reward: string[]
  minValue?: number | string
  description: string
  description2?: string
  image: string
}

const DonationCard: FC<Props> = ({
  icon,
  image,
  title,
  reward,
  description,
  description2,
  minValue = 1,
}) => {
  const [isOpenDonationModal, setIsOpenDonationModal] = useState(false)
  const [inputValue, setInputValue]: any = useState(minValue)
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
          {image && (
            //  eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt='cardImage'
              className='pt-4 w-full h-[200px] object-cover'
            />
          )}
          <h5 className=' h-[100px] text-primary-950 py-2 marker: text-lg font-bold leading-none md:text-lg xl:text-1xl'>
            {title}
          </h5>
          <div className='flex flex-col'>
            <label className='text-primary-950 lg:mb-2 py-2 marker: text-xl font-bold leading-none md:text-xl xl:text-2xl'>
              ${inputValue}
            </label>
            <input
              max={1000}
              type='range'
              id='donation'
              min={minValue}
              name='donation'
              value={inputValue}
              onChange={handleInput}
              className='accent-primary-900 bg-primary-200 appearance-none h-1'
            />
          </div>
          <p className='text-primary-900 mt-2 text-sm py-4'>{description}</p>
          <p className='text-primary-900 lg:mb-2 marker: text-sm font-bold leading-none'>
            {description2}
          </p>
          <hr className='w-80 my-4 border-neutral-200 sm:mx-auto' />
          {reward.map((rewards, index) => {
            return (
              <ul
                key={index}
                className='flex gap-3 py-2 justify-start items-start w-full'
              >
                <Image src={icon} alt='reward image' width={18} />
                <li className='text-neutral-500 text-sm'>{rewards}</li>
              </ul>
            )
          })}
          <div className='flex justify-center p-8'>
            <Button
              wFull
              text={t('donate')}
              type='secondary'
              onClick={handleOpenDonationModal}
            />
          </div>
        </div>
      </article>
      <PaymentModal
        title={title}
        image={image}
        reward={reward}
        inputValue={inputValue}
        description={description}
        isOpenDonationModal={isOpenDonationModal}
        handleOpenDonationModal={handleOpenDonationModal}
      />
    </>
  )
}

export default DonationCard
