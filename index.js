import postcss from 'postcss';
import fontWeightNames from './lib/font-weight-names';

export default postcss.plugin('postcss-font-weights', opts => {
	// get the dashed prefix
	const prefix = 'prefix' in Object(opts) ? `-${opts.prefix}-` : '';

	// get the (conditionally prefixed) property pattern
	const propertyRegExp = new RegExp(`^${prefix}(font(-weight)?)$`);

	// get the custom weights map
	const fontWeightMap = Object.assign({}, fontWeightNames, Object(opts).weights);

	// get the font-weight pattern
	const fontWeightRegExp = new RegExp(`(^|\\s)(${Object.keys(fontWeightMap).join('|')})(\\s|$)`);

	return root => {
		// walk each matching declaration
		root.walkDecls(propertyRegExp, decl => {
			// unprefixed property
			const [, property] = decl.prop.match(propertyRegExp);

			// conditionally remove the prefix from the property
			if (prefix) {
				decl.prop = property;
			}

			// conditionally replace the font weight in the value
			decl.value = decl.value.replace(
				fontWeightRegExp,
				($0, beforeSpace, value, afterSpace) => `${beforeSpace}${fontWeightMap[value]}${afterSpace}` // eslint-disable-line max-params
			);
		});
	};
});
