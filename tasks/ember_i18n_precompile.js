/*
 * grunt-ember-i18n-include
 * https://github.com/karl-sjogren/grunt-ember-i18n-include
 *
 * Copyright (c) 2013 Karl-Johan Sjögren
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    
    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks
    
    grunt.registerMultiTask('ember_i18n_precompile', 'Implements a syntax for precompiling ember-i18n language files.', function() {
	var handlebars = require('handlebars');
	var hbs = handlebars.create();
	var unescape = function(v) { eval('v = "'+v+'"'); return v; };
        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
            // Concat specified files.
            var src = f.src.filter(function(filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function(filepath) {
                return grunt.file.read(filepath); // Read file source.
            });
            
            var includePath = f.src.toString().substring(0, f.src.toString().lastIndexOf(".")) + '/';
            var result = src.toString().replace(/:\s*["'](.*)["'](,?)/gi, function(match, p1, p2) {
		grunt.log.writeln("stuff");
		var unescaped = unescape(p1);
		grunt.log.writeln("stuff");
		grunt.log.writeln("Unescaped: " + unescaped);
		var res = hbs.precompile(unescaped);
		return ": " + res.toString() + (p2 || ""); // We need to add back the colon and possibly the comma at the end
            });
            
            // Write the destination file.
            grunt.file.write(f.dest, result);
            
            // Print a success message.
            grunt.log.writeln('File "' + f.dest + '" created.');
        });
    });
};