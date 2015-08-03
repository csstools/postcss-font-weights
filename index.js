var postcss = require('postcss');
var fontweights = require('css-font-weight-names');

delete fontweights.normal;
delete fontweights.bold;

var match = new RegExp('(^|\\s)(' + Object.keys(fontweights).join('|') + ')(\\s|$)');

module.exports = postcss.plugin('postcss-font-weights', function (opts) {
	opts = opts || {};

	return function (css) {
		css.eachDecl(/^font(-weight)?$/, function (decl) {
			if (match.test(decl.value)) {
				decl.value = decl.value.replace(match, function (all, before, value, after) {
					return before + fontweights[value] + after;
				});
			}
		});
	};
});
