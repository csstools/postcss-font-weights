# Installing PostCSS Font Weights

[PostCSS Font Weights] runs in all Node environments, with special instructions for:

| [Node](#node) | [PostCSS CLI](#postcss-cli) | [Webpack](#webpack) | [Create React App](#create-react-app) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- | --- |

## Node

Add [PostCSS Font Weights] to your project:

```bash
npm install postcss-font-weights --save-dev
```

Use [PostCSS Font Weights] to process your CSS:

```js
const postcssFontWeights = require('postcss-font-weights');

postcssFontWeights.process(YOUR_CSS /*, processOptions, pluginOptions */);
```

Or use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssFontWeights = require('postcss-font-weights');

postcss([
  postcssFontWeights(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

## PostCSS CLI

Add [PostCSS CLI] to your project:

```bash
npm install postcss-cli --save-dev
```

Use [PostCSS Font Weights] in your `postcss.config.js` configuration file:

```js
const postcssFontWeights = require('postcss-font-weights');

module.exports = {
  plugins: [
    postcssFontWeights(/* pluginOptions */)
  ]
}
```

## Webpack

Add [PostCSS Loader] to your project:

```bash
npm install postcss-loader --save-dev
```

Use [PostCSS Font Weights] in your Webpack configuration:

```js
const postcssFontWeights = require('postcss-font-weights');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader', options: {
            ident: 'postcss',
            plugins: () => [
              postcssFontWeights(/* pluginOptions */)
            ]
          } }
        ]
      }
    ]
  }
}
```

## Create React App

Add [React App Rewired] and [React App Rewire PostCSS] to your project:

```bash
npm install react-app-rewired react-app-rewire-postcss --save-dev
```

Use [React App Rewire PostCSS] and [PostCSS Font Weights] in your
`config-overrides.js` file:

```js
const reactAppRewirePostcss = require('react-app-rewire-postcss');
const postcssFontWeights = require('postcss-font-weights');

module.exports = config => reactAppRewirePostcss(config, {
  plugins: () => [
    postcssFontWeights(/* pluginOptions */)
  ]
});
```

## Gulp

Add [Gulp PostCSS] to your project:

```bash
npm install gulp-postcss --save-dev
```

Use [PostCSS Font Weights] in your Gulpfile:

```js
const postcss = require('gulp-postcss');
const postcssFontWeights = require('postcss-font-weights');

gulp.task('css', () => gulp.src('./src/*.css').pipe(
  postcss([
    postcssFontWeights(/* pluginOptions */)
  ])
).pipe(
  gulp.dest('.')
));
```

## Grunt

Add [Grunt PostCSS] to your project:

```bash
npm install grunt-postcss --save-dev
```

Use [PostCSS Font Weights] in your Gruntfile:

```js
const postcssFontWeights = require('postcss-font-weights');

grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
  postcss: {
    options: {
      use: [
       postcssFontWeights(/* pluginOptions */)
      ]
    },
    dist: {
      src: '*.css'
    }
  }
});
```

[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]: https://github.com/postcss/postcss
[PostCSS CLI]: https://github.com/postcss/postcss-cli
[PostCSS Loader]: https://github.com/postcss/postcss-loader
[PostCSS Font Weights]: https://github.com/jonathantneal/postcss-font-weights
[React App Rewire PostCSS]: https://github.com/csstools/react-app-rewire-postcss
[React App Rewired]: https://github.com/timarney/react-app-rewired
