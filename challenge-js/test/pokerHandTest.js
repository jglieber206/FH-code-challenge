var assert = require('assert');
var PokerHand = require('../pokerHand.js');

/**
 * test
 */
describe('Rank a Royal Flush', function() {
  it('Return royal flush when hand given', function() {
    var hand = new PokerHand('As Ks Qs Js 10s');
    assert.equal(hand.getRank(), 'Royal Flush');
  });
});

/**
 * test
 */
describe('Rank a Pair', function() {
  it('Return one pair when hand given', function() {
    var hand = new PokerHand('Ah As 10c 7d 6s');

    assert.equal(hand.getRank(), 'One Pair');
  });
});

/**
 * test
 */
describe('Rank Two Pair', function() {
  it('Return two pair when hand given', function() {
    var hand = new PokerHand('Kh Kc 3s 3h 2d');

    assert.equal(hand.getRank(), 'Two Pair');
  });
});

/**
 * test
 */
describe('Rank A Flush', function() {
  var hand = new PokerHand('Kh Qh 6h 2h 9h');

  it('Return flush when hand given', function() {
    assert.equal(hand.getRank(), 'Flush');
  });
});

// More tests go here

/**
* test
*/
describe('Rank a full house', function() {
  var hand = new PokerHand('Kh Ks 3s 3h 3c');
  it('Return a Full House when 2 of a kind and 3 of a kind are given', function() {
    assert.equal(hand.getRank(), 'Full House');
  });
});


describe('Rank a high card', function() {
  var hand = new PokerHand('Kh Qs 2s 8h 9c');
  it('Return high card when no other ranks are given', function() {
    assert.equal(hand.getRank(), 'High Card');
  });
});

describe('Rank an Ace low straight flush', function() {
  var hand = new PokerHand('Ah 2h 3h 4h 5h');
  it('Return when an ace low straight flush is given', function() {
    assert.equal(hand.getRank(), 'Straight Flush');
  });
});

describe('Rank an out of order Ace low straight', function() {
  var hand = new PokerHand('3c 2h As 4h 5h');
  it('Return when an ace low straight is given', function() {
    assert.equal(hand.getRank(), 'Straight');
  });
});

describe('Rank an normal straight flush', function() {
  var hand = new PokerHand('3h 4h 5h 6h 7h');
  it('Return when a straight flush is given', function() {
    assert.equal(hand.getRank(), 'Straight Flush');
  });
});

describe('Rank a straight', function() {
  var hand = new PokerHand('2h 3h 4c 5s 6h');
  it('Return when a straight is given', function() {
    assert.equal(hand.getRank(), 'Straight');
  });
});

describe('Rank an out of order straight', function() {
  var hand = new PokerHand('3h 2h 4c 5s 6h');
  it('Return when a straight is given', function() {
    assert.equal(hand.getRank(), 'Straight');
  });
});
