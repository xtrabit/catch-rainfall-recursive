const expect = require('chai').expect;
const rain = require('./recursive.js');

describe('rainfall', function() {

  it('[1, 2, 3, 1, 0, 2] should equal 3', function() {
    expect(rain([1, 2, 3, 1, 0, 2])).to.equal(3);
  });

  it('[1, 2, 3, 1, 0, 2, 2] should equal 3', function() {
    expect(rain([1, 2, 3, 1, 0, 2, 2])).to.equal(3);
  });

  it('[1, 2, 3, 1, 0, 2, 3] should equal 6', function() {
    expect(rain([1, 2, 3, 1, 0, 2, 3])).to.equal(6);
  });

  it('[1, 2, 3, 2, 1, 0] should equal 0', function() {
    expect(rain([1, 2, 3, 2, 1, 0])).to.equal(0);
  });

  it('[1, 1, 3, 2, 2, 0] should equal 0', function() {
    expect(rain([1, 1, 3, 2, 2, 0])).to.equal(0);
  });

  it('[0] should equal 0', function() {
    expect(rain([0])).to.equal(0);
  });

  it('[1, 0, 0, 5] should equal 2', function() {
    expect(rain([1, 0, 0, 5])).to.equal(2);
  });

  it('[5, 0, 0, 1] should equal 2', function() {
    expect(rain([5, 0, 0, 1])).to.equal(2);
  });

  it('[0, 1, 0, 1] should equal 1', function() {
    expect(rain([0, 1, 0, 1])).to.equal(1);
  });

  it('[0, 0, 0, 1] should equal 0', function() {
    expect(rain([0, 0, 0, 1])).to.equal(0);
  });

  it('[0, 0, 1, 0] should equal 0', function() {
    expect(rain([0, 0, 1, 0])).to.equal(0);
  });

  it('[0, 2, 1, 3, 2, 4, 3, 4] should equal 3', function() {
    expect(rain([0, 2, 1, 3, 2, 4, 3, 4])).to.equal(3);
  });

  it('[2, 0, 2] should equal 2', function() {
    expect(rain([2, 0, 2])).to.equal(2);
  });

  it('[2, 1, 1, 2] should equal 2', function() {
    expect(rain([2, 1, 1, 2])).to.equal(2);
  });

  it('[3, 1, 2, 3] should equal 3', function() {
    expect(rain([3, 1, 2, 3])).to.equal(3);
  });

  it('[3, 0, 1, 3] should equal 5', function() {
    expect(rain([3, 0, 1, 3])).to.equal(5);
  });

  it('[2, 0, 1, 3, 1, 0, 2] should equal 6', function() {
    expect(rain([2, 0, 1, 3, 1, 0, 2])).to.equal(6);
  });

  it('[3, 0, 1, 2, 1, 0, 4] should equal 11', function() {
    expect(rain([3, 0, 1, 2, 1, 0, 4])).to.equal(11);
  });

  it('[0, 3, 0, 1, 2, 1, 0, 4, 0] should equal 11', function() {
    expect(rain([0, 3, 0, 1, 2, 1, 0, 4, 0])).to.equal(11);
  });

  it('[3, 2, 1, 2, 3] should equal 4', function() {
    expect(rain([3, 2, 1, 2, 3])).to.equal(4);
  });

});