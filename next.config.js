/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    reactStrictMode: true,
    images: {
        domains: [
            'avatars.githubusercontent.com',
            'lh3.googleusercontent.com',
            'images.unsplash.com',
            'cdn.midjourney.com',
        ],
    },
    plugins: [
        [
            'next-intl',
            {
                defaultLocale: 'es',
                locales: ['en', 'es'],
            },
        ],
    ],
}

const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './src/i18n.ts',
)

module.exports = withNextIntl(nextConfig)