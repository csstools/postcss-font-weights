var postcss = require('postcss');
var fontweights = require('css-font-weight-names');

module.exports = postcss.plugin('postcss-font-weights', function (opts) {
	opts = opts || {};

	return function (css) {
		css.eachDecl('font-weight', function (decl) {
			decl.replaceWith(decl.clone({
				prop: decl.prop,
				value: fontweights[decl.value] || decl.value
			}));
		});
	};
});