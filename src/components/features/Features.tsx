import React from 'react'
import { useTranslations } from 'next-intl'

export const Features = () => {
  const t = useTranslations('features')

  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center  w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-900"></div>
            <h3 className="mb-2 text-xl font-bold text-white"> {t('title1')}</h3>
            <p className=" text-gray-400">{t('text1')}</p>
          </div>
          <div>
            <div className="flex justify-center items-center  w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-900"></div>
            <h3 className="mb-2 text-xl font-bold text-white"> {t('title2')}</h3>
            <p className=" text-gray-400">{t('text2')}</p>
          </div>
          <div>
            <div className="flex justify-center items-center  w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-900"></div>
            <h3 className="mb-2 text-xl font-bold text-white"> {t('title3')}</h3>
            <p className=" text-gray-400">{t('text3')}</p>
          </div>
          <div>
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-900"></div>
            <h3 className="mb-2 text-xl font-bold text-white"> {t('title4')}</h3>
            <p className=" text-gray-400">{t('text4')}</p>
          </div>
          <div>
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-900"></div>
            <h3 className="mb-2 text-xl font-bold text-white"> {t('title5')}</h3>
            <p className=" text-gray-400">{t('text5')}</p>
          </div>
          <div>
            <div className="flex justify-center items-center  w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-900"></div>
            <h3 className="mb-2 text-xl font-bold text-white"> {t('title6')}</h3>
            <p className=" text-gray-400">{t('text6')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

{
  /* <svg
className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 text-primary-300"
fill="currentColor"
viewBox="0 0 20 20"
xmlns="http://www.w3.org/2000/svg"
>
<path
  fill-rule="evenodd"
  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
  clip-rule="evenodd"
></path>
</svg> */
}
