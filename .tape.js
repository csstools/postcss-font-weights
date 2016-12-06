module.exports = {
	'postcss-font-weights': {
		'basic': {
			message: 'supports basic usage'
		},
		'basic:w-prefix': {
			message: 'ignores basic usage when { prefix: "x" }',
			options: {
				prefix: 'x'
			}
		},
		'custom': {
			message: 'supports custom usage',
			options: {
				weights: {
					'custom-weight-1': 300,
					'custom-weight-2': 500
				}
			}
		},
		'prefix': {
			message: 'supports prefix usage'
		},
		'prefix:w-prefix': {
			message: 'supports prefix usage when { prefix: "x" }',
			options: {
				prefix: 'x'
			}
		}
	}
};
