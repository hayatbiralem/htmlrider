module.exports = {
    options: {
        sourcemap: 'none', // can be auto, file, inline, none
        lineNumbers: false, // default false
        style: 'compact', // can be nested, compact, compressed, expanded
        // noCache: false, // default false
        cacheLocation: '.sass-cache'
    },
    styles: {
        files: {
            '<%= dir.dist.assets %>css/htmlrider.css': '<%= dir.src.base %>sass/htmlrider.scss',
            '<%= dir.dist.assets %>css/app.css': '<%= dir.src.base %>sass/app.scss'
        }
    }
}