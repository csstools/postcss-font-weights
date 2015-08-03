var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts, done) {
	postcss([ plugin(opts) ]).process(input).then(function (result) {
		expect(result.css).to.eql(output);
		expect(result.warnings()).to.be.empty;
		done();
	}).catch(function (error) {
		done(error);
	});
};

describe('postcss-font-weights', function () {
	it('transforms font: thin 1em', function (done) {
		test('a{font: thin 1em}', 'a{font: 100 1em}', {}, done);
	});

	it('transforms font: extralight 1em', function (done) {
		test('a{font: extralight 1em}', 'a{font: 200 1em}', {}, done);
	});

	it('transforms font: ultralight 1em', function (done) {
		test('a{font: ultralight 1em}', 'a{font: 200 1em}', {}, done);
	});

	it('transforms font: light 1em', function (done) {
		test('a{font: light 1em}', 'a{font: 300 1em}', {}, done);
	});

	it('transforms font: book 1em', function (done) {
		test('a{font: book 1em}', 'a{font: 400 1em}', {}, done);
	});

	it('transforms font: regular 1em', function (done) {
		test('a{font: regular 1em}', 'a{font: 400 1em}', {}, done);
	});

	it('transforms font: roman 1em', function (done) {
		test('a{font: roman 1em}', 'a{font: 400 1em}', {}, done);
	});

	it('transforms font: medium 1em', function (done) {
		test('a{font: medium 1em}', 'a{font: 500 1em}', {}, done);
	});

	it('transforms font: demibold 1em', function (done) {
		test('a{font: demibold 1em}', 'a{font: 600 1em}', {}, done);
	});

	it('transforms font: semibold 1em', function (done) {
		test('a{font: semibold 1em}', 'a{font: 600 1em}', {}, done);
	});

	it('transforms font: extrabold 1em', function (done) {
		test('a{font: extrabold 1em}', 'a{font: 800 1em}', {}, done);
	});

	it('transforms font: ultrabold 1em', function (done) {
		test('a{font: ultrabold 1em}', 'a{font: 800 1em}', {}, done);
	});

	it('transforms font: black 1em', function (done) {
		test('a{font: black 1em}', 'a{font: 900 1em}', {}, done);
	});

	it('transforms font: heavy 1em', function (done) {
		test('a{font: heavy 1em}', 'a{font: 900 1em}', {}, done);
	});

	it('transforms font-weight: thin', function (done) {
		test('a{font-weight: thin}', 'a{font-weight: 100}', {}, done);
	});

	it('transforms font-weight: extralight', function (done) {
		test('a{font-weight: extralight}', 'a{font-weight: 200}', {}, done);
	});

	it('transforms font-weight: ultralight', function (done) {
		test('a{font-weight: ultralight}', 'a{font-weight: 200}', {}, done);
	});

	it('transforms font-weight: light', function (done) {
		test('a{font-weight: light}', 'a{font-weight: 300}', {}, done);
	});

	it('transforms font-weight: book', function (done) {
		test('a{font-weight: book}', 'a{font-weight: 400}', {}, done);
	});

	it('transforms font-weight: regular', function (done) {
		test('a{font-weight: regular}', 'a{font-weight: 400}', {}, done);
	});

	it('transforms font-weight: roman', function (done) {
		test('a{font-weight: roman}', 'a{font-weight: 400}', {}, done);
	});

	it('transforms font-weight: medium', function (done) {
		test('a{font-weight: medium}', 'a{font-weight: 500}', {}, done);
	});

	it('transforms font-weight: demibold', function (done) {
		test('a{font-weight: demibold}', 'a{font-weight: 600}', {}, done);
	});

	it('transforms font-weight: semibold', function (done) {
		test('a{font-weight: semibold}', 'a{font-weight: 600}', {}, done);
	});

	it('transforms font-weight: extrabold', function (done) {
		test('a{font-weight: extrabold}', 'a{font-weight: 800}', {}, done);
	});

	it('transforms font-weight: ultrabold', function (done) {
		test('a{font-weight: ultrabold}', 'a{font-weight: 800}', {}, done);
	});

	it('transforms font-weight: black', function (done) {
		test('a{font-weight: black}', 'a{font-weight: 900}', {}, done);
	});

	it('transforms font-weight: heavy', function (done) {
		test('a{font-weight: heavy}', 'a{font-weight: 900}', {}, done);
	});

	it('preserves font: normal 1em', function (done) {
		test('a{font: normal 1em}', 'a{font: normal 1em}', {}, done);
	});

	it('preserves font: bold 1em', function (done) {
		test('a{font: bold 1em}', 'a{font: bold 1em}', {}, done);
	});

	it('preserves font: 100 1em', function (done) {
		test('a{font: 100 1em}', 'a{font: 100 1em}', {}, done);
	});

	it('preserves font: 200 1em', function (done) {
		test('a{font: 200 1em}', 'a{font: 200 1em}', {}, done);
	});

	it('preserves font: 300 1em', function (done) {
		test('a{font: 300 1em}', 'a{font: 300 1em}', {}, done);
	});

	it('preserves font: 400 1em', function (done) {
		test('a{font: 400 1em}', 'a{font: 400 1em}', {}, done);
	});

	it('preserves font: 500 1em', function (done) {
		test('a{font: 500 1em}', 'a{font: 500 1em}', {}, done);
	});

	it('preserves font: 600 1em', function (done) {
		test('a{font: 600 1em}', 'a{font: 600 1em}', {}, done);
	});

	it('preserves font: 700 1em', function (done) {
		test('a{font: 700 1em}', 'a{font: 700 1em}', {}, done);
	});

	it('preserves font: 800 1em', function (done) {
		test('a{font: 800 1em}', 'a{font: 800 1em}', {}, done);
	});

	it('preserves font: 900 1em', function (done) {
		test('a{font: 900 1em}', 'a{font: 900 1em}', {}, done);
	});

	it('preserves font-weight: normal', function (done) {
		test('a{font-weight: normal}', 'a{font-weight: normal}', {}, done);
	});

	it('preserves font-weight: bold', function (done) {
		test('a{font-weight: bold}', 'a{font-weight: bold}', {}, done);
	});

	it('preserves font-weight: 100', function (done) {
		test('a{font-weight: 100}', 'a{font-weight: 100}', {}, done);
	});

	it('preserves font-weight: 200', function (done) {
		test('a{font-weight: 200}', 'a{font-weight: 200}', {}, done);
	});

	it('preserves font-weight: 300', function (done) {
		test('a{font-weight: 300}', 'a{font-weight: 300}', {}, done);
	});

	it('preserves font-weight: 400', function (done) {
		test('a{font-weight: 400}', 'a{font-weight: 400}', {}, done);
	});

	it('preserves font-weight: 500', function (done) {
		test('a{font-weight: 500}', 'a{font-weight: 500}', {}, done);
	});

	it('preserves font-weight: 600', function (done) {
		test('a{font-weight: 600}', 'a{font-weight: 600}', {}, done);
	});

	it('preserves font-weight: 700', function (done) {
		test('a{font-weight: 700}', 'a{font-weight: 700}', {}, done);
	});

	it('preserves font-weight: 800', function (done) {
		test('a{font-weight: 800}', 'a{font-weight: 800}', {}, done);
	});

	it('preserves font-weight: 900', function (done) {
		test('a{font-weight: 900}', 'a{font-weight: 900}', {}, done);
	});
});
