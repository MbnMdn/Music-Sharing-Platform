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
                hostname: '192.168.158.179',
                port: '8000',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
