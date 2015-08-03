# Font Weights [![Build Status][ci-img]][ci]

<img align="right" width="135" height="95" src="http://postcss.github.io/postcss/logo-leftp.png" title="Philosopher’s stone, logo of PostCSS">

[Font Weights] is a [PostCSS] plugin that lets you use common font weights in your CSS.

```css
/* before */

body {
   font: light 100%/1.5;
}

.heading {
   font-weight: medium;
}

/* after */

body {
   font: 300 100%/1.5;
}

.heading {
   font-weight: 500;
}
```

Common font weights are found in the [Font Weight Numeric Values] section of the [W3C CSS Fonts Specification], which include:

- **thin** as `100`
- **extralight** as `200`
- **ultralight** as `200`
- **light** as `300`
- **book** as `400`
- **regular** as `400`
- **roman** as `400`
- **medium** as `500`
- **semibold** as `600`
- **demibold** as `600`
- **extrabold** as `800`
- **ultrabold** as `800`
- **black** as `900`
- **heavy** as `900`

Font weights **normal** and **bold** remain as-is.

## Usage

Follow these steps to use [Font Weights]:

Add [Font Weights] to your build tool.
```sh
npm install postcss-font-weights --save-dev
```

### Node

1. Add [PostCSS] to your build tool:
   ```sh
   npm install postcss --save-dev
   ```

2. Use [Font Weights] in your script:
   ```js
   postcss([
      require('postcss-font-weights')()
   ]).process(
      fs.readFileSync('./css/src/style.css', 'utf8')
   ).then(function (result) {
      fs.writeFileSync('./css/style.css', result.css);
   });
   ```

### Grunt

1. Add [Grunt PostCSS] to your build tool:
   ```sh
   npm install postcss-font-weights --save-dev
   ```

2. Use [Font Weights] in your Gruntfile:
   ```js
   grunt.loadNpmTasks('grunt-postcss');

   grunt.initConfig({
      postcss: {
         options: {
            processors: [
               require('postcss-font-weights')()
            ]
         },
         src: './css/src/*.css',
         dest: './css'
      }
   });
   ```

### Gulp

1. Add [Gulp PostCSS] to your build tool:
   ```sh
   npm install --save-dev gulp-postcss
   ```

2. Use [Font Weights] in your Gulpfile:
   ```js
   var postcss = require('gulp-postcss');

   gulp.task('css', function () {
      return gulp.src('./css/src/*.css').pipe(
         postcss([
            require('postcss-font-weights')()
         ])
      ).pipe(
         gulp.dest('./css')
      );
   });
   ```

[ci]: https://travis-ci.org/jonathantneal/postcss-font-weights
[ci-img]: https://travis-ci.org/jonathantneal/postcss-font-weights.svg
[Font Weight Numeric Values]: http://www.w3.org/TR/css3-fonts/#font-weight-numeric-values
[Font Weights]: https://github.com/jonathantneal/postcss-font-weights
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[PostCSS]: https://github.com/postcss/postcss
[W3C CSS Fonts Specification]: http://www.w3.org/TR/css3-fonts/
