/* Gruntfile */
module.exports = function(grunt) {
    var path = require('path');

    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {

        // path to task.js files, defaults to grunt dir
        configPath: path.join(process.cwd(), 'tasks'),

        // data passed into config.  Can use with <%= test %>
        data: {
            dir: {
                src: {
                    base : 'src/'
                },
                dist: {
                    base : 'dist/',
                    assets: 'dist/assets/'
                }
            }
        }
    });
}
