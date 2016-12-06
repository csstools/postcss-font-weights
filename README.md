# Font Weights <a href="https://github.com/postcss/postcss"><img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right"></a>

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-image]][lic-url]
[![Changelog][log-image]][log-url]
[![Gitter Chat][git-image]][git-url]

[Font Weights] lets you use common font weights in your CSS.

```css
/* before */

.example-1 {
	font-weight: light;
}

.example-2 {
   font: light 100% monospace;
}

/* after */

.example-1 {
	font-weight: 300;
}

.example-2 {
   font: 300 100% monospace;
}
```

Common font weights are found in the [Font Weight Numeric Values] section of the [W3C CSS Fonts Specification].

| Common Weight | Numeric Value |
| ------------- | ------------- |
| thin          | 100           |
| extralight    | 200           |
| ultralight    | 200           |
| light         | 300           |
| book          | 400           |
| normal        | 400           |
| regular       | 400           |
| roman         | 400           |
| medium        | 500           |
| semibold      | 600           |
| demibold      | 600           |
| bold          | 700           |
| extrabold     | 800           |
| ultrabold     | 800           |
| black         | 900           |
| heavy         | 900           |

These common font weights are converted to their numeric counterpart.

## Options

#### `prefix`

Type: `String`  
Default: `""`

Adds an optional prefix to the `color` property (e.g. `"x"` for `-x-color`). Wrapping dashes (`-`) are automatically applied.

#### `custom`

Type: `Object`  
Default: `undefined`

Adds an additional set of keyword and numeric pairs (e.g. `custom: { lite: 300 }` for `font-weight: lite` to become `font-weight: 300`).

## Usage

Add [Font Weights] to your build tool:

```bash
npm install postcss-font-weights --save-dev
```

#### Node

```js
require('postcss-font-weights').process(YOUR_CSS);
```

#### PostCSS

Add [PostCSS] to your build tool:

```bash
npm install postcss --save-dev
```

Load [Font Weights] as a PostCSS plugin:

```js
postcss([
	require('postcss-font-weights')()
]).process(YOUR_CSS, /* options */);
```

#### Gulp

Add [Gulp PostCSS] to your build tool:

```bash
npm install gulp-postcss --save-dev
```

Enable [Font Weights] within your Gulpfile:

```js
var postcss = require('gulp-postcss');

gulp.task('css', function () {
	return gulp.src('./src/*.css').pipe(
		postcss([
			require('postcss-font-weights')()
		])
	).pipe(
		gulp.dest('.')
	);
});
```

#### Grunt

Add [Grunt PostCSS] to your build tool:

```bash
npm install grunt-postcss --save-dev
```

Enable [Font Weights] within your Gruntfile:

```js
grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
	postcss: {
		options: {
			use: [
				require('postcss-font-weights')()
			]
		},
		dist: {
			src: '*.css'
		}
	}
});
```

[npm-url]: https://www.npmjs.com/package/postcss-font-weights
[npm-img]: https://img.shields.io/npm/v/postcss-font-weights.svg
[cli-url]: https://travis-ci.org/jonathantneal/postcss-font-weights
[cli-img]: https://img.shields.io/travis/jonathantneal/postcss-font-weights.svg
[lic-url]: LICENSE.md
[lic-image]: https://img.shields.io/npm/l/postcss-font-weights.svg
[log-url]: CHANGELOG.md
[log-image]: https://img.shields.io/badge/changelog-md-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[git-image]: https://img.shields.io/badge/chat-gitter-blue.svg

[Font Weights]: https://github.com/jonathantneal/postcss-font-weights
[PostCSS]: https://github.com/postcss/postcss
[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
