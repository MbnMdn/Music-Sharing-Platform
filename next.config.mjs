/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'e-cdns-images.dzcdn.net',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'http',
                // hostname: '192.168.158.179',
                hostname: 'songapi.alplayer.ir',
                port: '8000',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'songapi.alplayer.ir',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
