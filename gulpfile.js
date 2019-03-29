const { src, dest } = require('gulp');

function copy() {
  return src([
    './**/*'
    ,'!./node_modules'   
    ,'!./node_modules/**/*'
    ,'!./builder.bat'
  ])
  .pipe(dest('./export/'));
}

exports.copy = copy;

//grunt 