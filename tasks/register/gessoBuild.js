module.exports = function (grunt) {
  grunt.registerTask('gessoBuild', [
    'gessoSetup',
    'gessoBuildStyles',
    'gessoBuildImages',
    'gessoBuildPatternlab'
  ]);
};
