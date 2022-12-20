module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io'
            }
        ]
    },
    reactStrictMode: true,
    webpack: (config) => { config.resolve.fallback = { fs: false, path: false }; return config;}
}
