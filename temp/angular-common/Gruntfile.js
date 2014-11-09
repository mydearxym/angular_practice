module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-gh-pages');

    grunt.initConfig({
        concat: {
            options: {
                separator: "\n\n"
            },
            javascript: {
                src: [
                    'bower_components/moment/min/moment.min.js',
                    'bower_components/lodash.min.js',
                    'bower_components/mediaelement/build/mediaelement-and-player.min.js',
                    'bower_components/jquery-form/jquery.form.js',
                    'bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'bower_components/bootstrap-daterangepicker/daterangepicker.js',
                    'bower_components/angular/angular.min.js',

                    'modules/**/*.js',
                    '!modules/**/*Spec.js'
                ],
                dest: 'build/angular-common.js'
            }
        },
        uglify: {
            dist: {
                files: {
                    'build/angular-common.min.js': 'build/angular-common.js'
                }
            }
        },
        karma: {
            options: {
                configFile: 'karma.conf.js'
            },
            phantom: {
                singleRun: true,
                browsers: ['PhantomJS']
            },
            chrome: {
                browsers: ['PhantomJS'],
                singleRun: false,
                autoWatch: true
            }
        },
        'gh-pages': {
            options: {
                base: './'
            },
            src: ['index.html', 'README.md', 'build/**', 'modules/**']
        },
        watch: {
            js: {
                files: ['modules/**/*.js'],
                tasks: ['concat:javascript', 'uglify']
            }
        }
    });

    grunt.registerTask('build', [
        'concat:javascript',
        'uglify'
    ]);

    grunt.registerTask('default', [
        'karma:phantom',
        'concat:javascript',
        'uglify'
    ]);

    grunt.registerTask('test', ['karma:chrome']);
};