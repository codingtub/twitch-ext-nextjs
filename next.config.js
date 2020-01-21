const isProduction = process.env.NODE_ENV === 'production';
const withSass = require('@zeit/next-sass');

module.exports = withSass({
    assetPrefix: './',
    env: {
        STATIC_PREFIX: isProduction ? './static' : '/static',
    },
    exportPathMap: async (
        defaultPathMap,
        {dev, dir, outDir, distDir, buildId}
    ) => {
        return !dev
            ? {
                '/video_overlay': {page: '/video_overlay.html'},
                '/live_config': {page: '/live_config.html'},
                '/config': {page: '/config.html'},
            }
            : defaultPathMap;
    },
    webpack(config, options) {
        config.optimization.minimize = false;
        return config;
    }
});
