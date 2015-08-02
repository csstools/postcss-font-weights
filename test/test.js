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

	it('transforms font-weight: normal', function (done) {
		test('a{font-weight: normal}', 'a{font-weight: 400}', {}, done);
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

	it('transforms font-weight: bold', function (done) {
		test('a{font-weight: bold}', 'a{font-weight: 700}', {}, done);
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

	it('preserves font-weight: lighter', function (done) {
		test('a{font-weight: lighter}', 'a{font-weight: lighter}', {}, done);
	});

	it('preserves font-weight: bolder', function (done) {
		test('a{font-weight: bolder}', 'a{font-weight: bolder}', {}, done);
	});
});
