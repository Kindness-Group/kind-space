const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/apis/:path*',
                destination: `${process.env.REST_API_URL}/apis/:path*`
            }
        ]
    },
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    experimental: {serverActions: {bodySizeLimit: '2mb'}}
};

export default nextConfig;