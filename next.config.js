/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lastfm.freetls.fastly.net',
                port:'',
                pathname: '/**',
            },
            {
                protocol:'https',
                hostname: 'steamcdn-a.akamaihd.net',
                port: '',
                pathname: '/**',
            }
        ]
    },
    i18n: {
        locales: ['en', 'se'],
        defaultLocale: 'se',
        path: 'locales/',
    }
}

module.exports = nextConfig
