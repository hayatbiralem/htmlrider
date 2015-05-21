module.exports = function(grunt, options){
    return {
        html: {
            files: {
              '<%= dir.dist.base %>': '<%= dir.src.base %>html/*.html'
            },
            options: {
              replacements: [{
                pattern: /<!-- @import (.*?) -->/ig,
                replacement: function (match, p1) {
                  return grunt.file.read(grunt.config.get('dir.src.base') + p1);
                }
              }]
            }
        }
    };
};