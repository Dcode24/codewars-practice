/* You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'


const assert = require('chai').assert;

describe("Basic tests",() => {
  it('Testing №1 for "3♣"', () => {
    let actualClubs = defineSuit('3♣');
    assertNotPrinting(actualClubs);
    assert.strictEqual(actualClubs, 'clubs');
  });
  it('Testing №2 for "Q♠"', () => assert.strictEqual(defineSuit('Q♠'), 'spades'));
  it('Testing №3 for "9♦"', () => assert.strictEqual(defineSuit('9♦'), 'diamonds'));
  it('Testing №4 for "J♥"', () => assert.strictEqual(defineSuit('J♥'), 'hearts'));
  
  function assertNotPrinting(actual) {
    assert.isDefined(actual, 'You have to return the suit. Did you print it to the console instead?\n');
  }
}); */

// PREP
// Parmeters: a string with two characters, the second of which is the symbolic representation of a card suit (4 suits in a deck of cards)
// Return: a string of the name of the suit ONLY, in all lowercase letter, and plural
// Examples:
/*('Q♠'), 'spades')
('9♦'), 'diamonds')
('J♥'), 'hearts')
('3♣'), 'clubs')*/

// Pseudocode:

function defineSuit(card) {
  if (card.includes('♠')) return 'spades';
  if (card.includes('♦')) return 'diamonds';
  if (card.includes('♥')) return 'hearts';
  if (card.includes('♣')) return 'clubs';
}

defineSuit('3♣');
