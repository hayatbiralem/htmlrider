module.exports = {
    options: {
        stripBanners: false,
        separator: '\n\n;'
    },
    htmlrider: {
        src: [
            '<%= dir.src.base %>js/htmlrider/polyfills.js',
            '<%= dir.src.base %>js/htmlrider/carousel.js'
        ],
        dest: '<%= dir.dist.assets %>js/htmlrider.js'
    },
    app: {
        src: [
            '<%= dir.src.base %>js/app.js'
        ],
        dest: '<%= dir.dist.assets %>js/app.js'
    }
};