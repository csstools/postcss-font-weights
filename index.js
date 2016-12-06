// tooling
const postcss = require('postcss');
const names   = require('css-font-weight-names');
const parser  = require('postcss-value-parser');

// plugin
module.exports = postcss.plugin('postcss-font-weights', ({
	prefix = '',
	weights = {}
}) => {
	// dashed prefix
	const dashedPrefix = prefix ? '-' + prefix + '-' : '';

	// property pattern
	const propertyMatch = new RegExp(`^${ dashedPrefix }(font(-weight)?)$`);

	// append custom weights to weights
	Object.assign(names, weights);

	// font-weight pattern
	const weightMatch = new RegExp(`\\b(${ Object.keys(names).join('|') })\\b`);

	return (css) => {
		// walk each matching declaration
		css.walkDecls(propertyMatch, (decl) => {
			// unprefixed property
			const property = decl.prop.match(propertyMatch)[1];

			// if a prefix is in use
			if (prefix) {
				// remove it from the property
				decl.prop = property;
			}

			// if the value matches for a potential font-weight
			if (weightMatch.test(decl.value)) {
				// replace font-weights in the value
				decl.value = parser(decl.value).walk((node) => {
					// if the word is a font-weight
					if (node.type === 'word' && node.value in names) {
						// update the word with the font-weight value
						node.value = names[node.value];
					}
				}).toString();
			}
		});
	};
});
