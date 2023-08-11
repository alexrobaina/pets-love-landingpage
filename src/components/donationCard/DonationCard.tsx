'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import React from 'react'
import { FC, useState } from 'react'
import Button from '../button/Button'

interface Props {
  image: string
  title: string
  description: string
  greeting?: string
  reward: string[]
  icon: string
}

const DonationCard: FC<Props> = ({
  image,
  title,
  description,
  greeting,
  reward,
  icon,
}) => {
  const [inputValue, setInputValue] = useState(0)

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setInputValue(parseInt(event.target.value))
  }
  return (
    <>
      <article>
        <div className="w-[392px] px-4 bg-white rounded-md shadow-sm">
          <Image className="pt-4 pb-4" src={image} alt={'cardImage'} width={380} />
          <h5 className="py-2 marker: text-xl font-bold leading-none md:text-xl xl:text-2xl">
            {title}
          </h5>
          <div className="flex flex-col">
            <label className="lg:mb-2 py-2 marker: text-xl font-bold leading-none md:text-xl xl:text-2xl">
              ${inputValue}
            </label>
            <input
              type="range"
              id="donation"
              name="donation"
              min="0"
              max="100"
              onChange={handleInput}
              className="accent-primary-900 bg-primary-200"
            />
          </div>
          <p className="mb-2 text-md py-4">{description}</p>
          <p className="text-primary-900 lg:mb-2 marker: text-sm font-bold leading-none md:text-sm xl:text-md">
            {greeting}
          </p>
          <hr className="w-80 my-2 border-b-neutral-900 sm:mx-auto lg:my-8" />

          {reward.map((rewards) => {
            return (
              <ul className="flex gap-4 py-2 justify-start items-start w-full">
                <Image src={icon} alt={'reward image'} width={80} />
                <li className="text-neutral-500 text-md">{rewards}</li>
              </ul>
            )
          })}
          <div className="flex justify-center p-8">
            <Button ButtonName={'Donar'} />
          </div>
        </div>
      </article>
    </>
  )
}

export default DonationCard
