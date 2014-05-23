var es = require('event-stream');
var gutil = require('gulp-util');

module.exports = function() {
  'use strict';
  return es.map(function (file, cb) {

    var result = file.contents.toString();

    //strict
    result = result.replace('"use strict";', '');

    //require
    result = result.replace(/var [a-zA-Z]{0,} = require\([\'\"\.\\\/a-zA-Z]{0,}\);/i, '');

    //exports
    result = result.replace(/module.exports = [a-zA-Z]{0,};/i, '');

    file.contents = new Buffer( 

      result

    );
    
    cb(null,file);

  });
};
