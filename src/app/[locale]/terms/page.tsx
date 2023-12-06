'use client'
import FadeIn from '@/components/FadeIn'
import Button from '../../../components/Button/Button'
import axios from 'axios'
import { useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Terms = () => {
  const t = useTranslations('terms&conditions')
  const router = useRouter()
  const searchParams = useSearchParams()
  const productId = searchParams.get('productId')
  const title = searchParams.get('title')
  const price = searchParams.get('price')
  const payType = searchParams.get('payType')
  const email = searchParams.get('email')
  const order = searchParams.get('order')

  const paymentId = searchParams.get('payment_id')

  const updateDonation = async () => {
    const data = {
      productId,
      title,
      price,
      order,
      payType,
      email,
      paymentId,
    }

    await axios.put('/api/updateDonation', data)
  }

  useEffect(() => {
    updateDonation()
  })

  const backToHome = () => {
    router.push('/')
  }

  return (
    <FadeIn>
      <div className="relative isolate px-6  lg:px-8">
        <div className="mx-auto max-w-2xl py-22 sm:py-32 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {`Terms and Conditions for Pet's Love`}
            </h1>
            <p className="mt-6 text-lg text-left leading-8 text-gray-600">
              {`Welcome to Pet's Love! Pet's Love is a community-driven platform designed to
              facilitate responsible pet adoptions, collaborate with shelters, and offer
              veterinary and health management services for pets. By accessing or using
              our platform, you agree to comply with and be bound by the following terms
              and conditions. Acceptance of Terms By accessing and using the Pet's Love
              platform, including all associated features and functionalities, you
              acknowledge and agree to comply with these Terms and Conditions. If you do
              not agree with these terms, do not use the service. Open Source Contribution
              Pet's Love is powered by open-source software. By contributing to our
              codebase, you agree to license your contributions under the same open-source
              license that the Pet's Love project is based on. QR Codes and Medical
              Information Our Scan & Connect QR code feature provides a digital platform
              for health records and pet details. While we strive for accuracy, Pet's Love
              is not responsible for any incorrect or outdated information.
              Blockchain-Powered Trust Pet's Love integrates blockchain technology to
              facilitate pet adoption and related documentation. However, this technology
              is not a substitute for legally binding documents and should not be solely
              relied upon for verification or validation of adoptions. Data and Privacy By
              using Pet's Love, you agree to the collection and use of your personal
              information as described in our Privacy Policy. Donations and Support Any
              donations or support for Pet's Love go towards the development of the
              platform and animal welfare efforts. While we strive for transparency, Pets
              Love is not liable for the misuse of funds by third parties. Adopter
              Responsibilities Adopters are responsible for fulfilling all requirements
              stipulated by shelters and must abide by the post-adoption monitoring terms
              set by Pet's Love or the shelter in question. Limitation of Liability Pets
              Love, its developers, contributors, and affiliates are not responsible for
              any harm, injury, or loss incurred as a result of using our platform. All
              users, including adopters, volunteers, and vets, are responsible for their
              own actions. Intellectual Property Unless stated otherwise, all materials,
              including but not limited to the Pet's Love logo, source code, and other
              Pets Love intellectual property are owned by Pet's Love and its
              contributors. Changes to Terms and Conditions We reserve the right to modify
              these terms at any time. All changes will be effective immediately upon
              posting to the platform, and your continued use after any changes are posted
              constitutes your acceptance of such changes. Contact For any questions or
              concerns regarding these Terms and Conditions, please contact us at.`}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button onClick={backToHome} type="primary" text={t('backToHome')} />
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        ></div>
      </div>
    </FadeIn>
  )
}

export default Terms
