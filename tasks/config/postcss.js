module.exports = function (grunt) {
  var assets  = require('postcss-assets');

  grunt.config.merge({
    postcss: {
      options: {
        map: {
          inline: false // Save all sourcemaps as separate files.
        },
        processors: [
          require('postcss-assets')(),
          require('autoprefixer')({
            browsers: [
              '> 1%',
              'last 5 versions',
              'ie >= 11',
            ],
            remove: false, // Don't remove outdated prefixes (there shouldn't be any, and this saves compile time)
            grid: true
          }),
        ]
      },
      gesso: {
        src: '<%= pkg.themePath %>/css/*.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-postcss');
}
