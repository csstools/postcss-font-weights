# PostCSS Font Weights [![Build Status][ci-img]][ci]

<img align="right" width="135" height="95" src="http://postcss.github.io/postcss/logo-leftp.png" title="Philosopher’s stone, logo of PostCSS">

[PostCSS Font Weights] is a [PostCSS] plugin that allows you to use common CSS font weight names names in your CSS files.

These font weight names are found in the [Font Weight Numeric Values] section of the [W3C CSS Fonts Specification]. This plugin will minify all font weight names, including `normal` and `bold`.

```css
/* before */

.heading {
    font-weight: light;
}

/* after */

.heading {
    font-weight: 300;
}
```

## Usage

You just need to follow these two steps to use [PostCSS Font Weights]:

1. Add [PostCSS] to your build tool.
2. Add [PostCSS Font Weights] as a PostCSS process.

```sh
npm install postcss-font-weights --save-dev
```

### Node

```js
postcss([ require('postcss-font-weights')() ])
```

### Grunt

Install [Grunt PostCSS]:

```shell
npm install postcss-font-weights --save-dev
```

Enable [PostCSS Font Weights] within your Gruntfile:

```js
grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
    postcss: {
        options: {
            processors: [
                require('postcss-font-weights')()
            ]
        },
        dist: {
            src: 'css/*.css'
        }
    }
});
```

[ci]: https://travis-ci.org/jonathantneal/postcss-font-weights
[ci-img]: https://travis-ci.org/jonathantneal/postcss-font-weights.svg
[Font Weight Numeric Values]: http://www.w3.org/TR/css3-fonts/#font-weight-numeric-values
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]: https://github.com/postcss/postcss
[PostCSS Font Weights]: https://github.com/jonathantneal/postcss-font-weights
[W3C CSS Fonts Specification]: http://www.w3.org/TR/css3-fonts/
