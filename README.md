# PostCSS Font Weights [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[PostCSS Font Weights] lets you do this in CSS.

```pcss
h1, h2, h3 {
  font-weight: light;
}

pre {
   font: light 100% monospace;
}

/* becomes */

h1, h2, h3 {
  font-weight: 300;
}

pre {
   font: 300 100% monospace;
}
```

Common font weights are found in the Font Weight Numeric Values section of the
[CSS Fonts Specification].

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

## Usage

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

[PostCSS Font Weights] runs in all Node environments, with special instructions for:

| [Node](INSTALL.md#node) | [PostCSS CLI](INSTALL.md#postcss-cli) | [Webpack](INSTALL.md#webpack) | [Create React App](INSTALL.md#create-react-app) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- | --- |

## Options

#### prefix

The `prefix` option determines the prefix applied to properties being processed
(e.g. `x` for `-x-font-weight`). Wrapping dashes (`-`) are automatically
applied.

### custom

The `custom` option determines additional font weight keywords and numeric
pairs (e.g. `custom: { lite: 300 }` for `font-weight: lite` to become
`font-weight: 300`).

[cli-img]: https://img.shields.io/travis/jonathantneal/postcss-font-weights.svg
[cli-url]: https://travis-ci.org/jonathantneal/postcss-font-weights
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/postcss-font-weights.svg
[npm-url]: https://www.npmjs.com/package/postcss-font-weights

[CSS Fonts Specification]: https://www.w3.org/TR/css-fonts-3/#font-weight-numeric-values
[PostCSS]: https://github.com/postcss/postcss
[PostCSS Font Weights]: https://github.com/jonathantneal/postcss-font-weights
