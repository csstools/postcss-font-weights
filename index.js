var postcss = require('postcss');
var fontweights = require('css-font-weight-names');

module.exports = postcss.plugin('postcss-font-weights', function (opts) {
	opts = opts || {};

	return function (css) {
		css.eachDecl('font-weight', function (decl) {
			if (fontweights[decl.value]) {
				decl.value = fontweights[decl.value];
			}
		});
		css.eachDecl('font', function (decl) {
            var key, re;
			for (key in fontweights) {
                if (key !== 'normal') { // normal is a keyword for several different font properties
                    re = new RegExp('\\b' + key + '\\b', 'g');
				    decl.value = decl.value.replace(re, fontweights[key]);
                }
			}
		});
	};
});
