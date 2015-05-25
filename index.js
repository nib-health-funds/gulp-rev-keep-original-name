var path = require('path');
var through = require('through2');

/**
 *
 * @param   {Object}          options
 * @param   {RegExp|function} options.include
 * @returns {function}
 */
module.exports = function(options) {
  options = options || {};
  return through.obj(function (file, enc, cb) {

    //rename the file
    function rename() {
      if (file.revOrigPath) {

        var
          fdir  = path.dirname(file.path),
          fname = path.basename(file.revOrigPath),
          fpath = path.join(fdir, fname)
        ;

        file.path = fpath;

        cb(null, file);
      }
    }

    if (options.include) {

      var
        included,
        filter = options.include
      ;

      if (typeof(filter) === 'function') {
        included = filter(file);
      } else if(filter instanceof RegExp) {
        included = filter.test(file.path);
      }

      if (!included) {
        rename();
      }

    } else {
      rename();
    }

  });
};