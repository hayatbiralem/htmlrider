module.exports = function(grunt, options){
  return {
    html: {
      options: {
        patterns: [
          {
            match: 'header',
            replacement: '<%= grunt.file.read(dir.src.base + "html/partial/header.html") %>'
          },
          {
            match: 'footer',
            replacement: '<%= grunt.file.read(dir.src.base + "html/partial/footer.html") %>'
          }
        ]
      },
      files: [
        {expand: true, flatten: true, src: ['<%= dir.src.base %>html/*.html'], dest: '<%= dir.dist.base %>'}
      ]
    }
  };
};