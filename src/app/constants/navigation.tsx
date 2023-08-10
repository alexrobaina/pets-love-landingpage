import { useTranslations } from 'next-intl'

export const navigation = (t: any) => {
  return {
    github: {
      routeName: t('github'),
      href: 'https://github.com/alexrobaina/frontend_petsLove',
    },
    login: {
      routeName: t('login'),
      href: 'https://explore.petslove.app/',
    },
    collaborators: {
      routeName: t('collaborators'),
      href: '#collaborators',
    },
    prototype: {
      routeName: t('prototype'),
      href: '#prototype',
    },
    donate: {
      routeName: t('donate'),
      href: '#donate',
    },
  }
}
