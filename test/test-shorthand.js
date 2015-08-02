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
	it('transforms font: thin', function (done) {
		test('a{font: thin 16px Arial, sans-serif}', 'a{font: 100 16px Arial, sans-serif}', {}, done);
	});

	it('transforms font: extralight', function (done) {
		test('a{font: extralight 16px Arial, sans-serif}', 'a{font: 200 16px Arial, sans-serif}', {}, done);
	});

	it('transforms font: ultralight', function (done) {
		test('a{font: ultralight 16px Arial, sans-serif}', 'a{font: 200 16px Arial, sans-serif}', {}, done);
	});

	it('transforms font: light', function (done) {
		test('a{font: light 16px Arial, sans-serif}', 'a{font: 300 16px Arial, sans-serif}', {}, done);
	});

	it('transforms font: book', function (done) {
		test('a{font: book 16px Arial, sans-serif}', 'a{font: 400 16px Arial, sans-serif}', {}, done);
	});

	it('transforms font: regular', function (done) {
		test('a{font: regular 16px Arial, sans-serif}', 'a{font: 400 16px Arial, sans-serif}', {}, done);
	});

	it('transforms font: roman', function (done) {
		test('a{font: roman 16px Arial, sans-serif}', 'a{font: 400 16px Arial, sans-serif}', {}, done);
	});

	it('transforms font: medium', function (done) {
		test('a{font: medium 16px Arial, sans-serif}', 'a{font: 500 16px Arial, sans-serif}', {}, done);
	});

	it('transforms font: demibold', function (done) {
		test('a{font: demibold 16px Arial, sans-serif}', 'a{font: 600 16px Arial, sans-serif}', {}, done);
	});

	it('transforms font: semibold', function (done) {
		test('a{font: semibold 16px Arial, sans-serif}', 'a{font: 600 16px Arial, sans-serif}', {}, done);
	});

	it('transforms font: bold', function (done) {
		test('a{font: bold 16px Arial, sans-serif}', 'a{font: 700 16px Arial, sans-serif}', {}, done);
	});

	it('transforms font: extrabold', function (done) {
		test('a{font: extrabold 16px Arial, sans-serif}', 'a{font: 800 16px Arial, sans-serif}', {}, done);
	});

	it('transforms font: ultrabold', function (done) {
		test('a{font: ultrabold 16px Arial, sans-serif}', 'a{font: 800 16px Arial, sans-serif}', {}, done);
	});

	it('transforms font: black', function (done) {
		test('a{font: black 16px Arial, sans-serif}', 'a{font: 900 16px Arial, sans-serif}', {}, done);
	});

	it('transforms font: heavy', function (done) {
		test('a{font: heavy 16px Arial, sans-serif}', 'a{font: 900 16px Arial, sans-serif}', {}, done);
	});

	it('preserves font: normal', function (done) {
		test('a{font: normal 16px Arial, sans-serif}', 'a{font: normal 16px Arial, sans-serif}', {}, done);
	});

	it('preserves font: 100', function (done) {
		test('a{font: 100 16px Arial, sans-serif}', 'a{font: 100 16px Arial, sans-serif}', {}, done);
	});

	it('preserves font: 200', function (done) {
		test('a{font: 200 16px Arial, sans-serif}', 'a{font: 200 16px Arial, sans-serif}', {}, done);
	});

	it('preserves font: 300', function (done) {
		test('a{font: 300 16px Arial, sans-serif}', 'a{font: 300 16px Arial, sans-serif}', {}, done);
	});

	it('preserves font: 400', function (done) {
		test('a{font: 400 16px Arial, sans-serif}', 'a{font: 400 16px Arial, sans-serif}', {}, done);
	});

	it('preserves font: 500', function (done) {
		test('a{font: 500 16px Arial, sans-serif}', 'a{font: 500 16px Arial, sans-serif}', {}, done);
	});

	it('preserves font: 600', function (done) {
		test('a{font: 600 16px Arial, sans-serif}', 'a{font: 600 16px Arial, sans-serif}', {}, done);
	});

	it('preserves font: 700', function (done) {
		test('a{font: 700 16px Arial, sans-serif}', 'a{font: 700 16px Arial, sans-serif}', {}, done);
	});

	it('preserves font: 800', function (done) {
		test('a{font: 800 16px Arial, sans-serif}', 'a{font: 800 16px Arial, sans-serif}', {}, done);
	});

	it('preserves font: 900', function (done) {
		test('a{font: 900 16px Arial, sans-serif}', 'a{font: 900 16px Arial, sans-serif}', {}, done);
	});

	it('preserves font: lighter', function (done) {
		test('a{font: lighter 16px Arial, sans-serif}', 'a{font: lighter 16px Arial, sans-serif}', {}, done);
	});

	it('preserves font: bolder', function (done) {
		test('a{font: bolder 16px Arial, sans-serif}', 'a{font: bolder 16px Arial, sans-serif}', {}, done);
	});
});
