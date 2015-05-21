module.exports = {
    
    // CSS
    styles: {
        files: ['<%= dir.src.base %>sass/**/*'],
        tasks: ['sass']
    },

    // JS
    scripts: {
        files: ['<%= dir.src.base %>js/*'],
        tasks: ['concat']
    },

    // HTML
    // html: {
    //     files: ['<%= dir.src.base %>html/**/*.html'],
    //     tasks: ['string-replace:html']
    // }
    html: {
        files: ['<%= dir.src.base %>html/**/*.html'],
        tasks: ['replace']
    }
};