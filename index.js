'use strict';

/**
 * sappho-fragments
 * An npm package inspired by Sappho
 * An npm package inspired by Sappho — generates lyrical fragments about desire, beauty, and the ache of longing from ancient Lesbos.
 */

const poems = [
  "This is a placeholder poem in the style of Sappho.",
  "Replace these with generated or curated verses.",
  "Each invocation returns a random selection."
];

/**
 * Returns a random poem inspired by Sappho
 * @returns {string} A poem string
 */
function getPoem() {
  const idx = Math.floor(Math.random() * poems.length);
  return poems[idx];
}

/**
 * Returns all poems in the collection
 * @returns {string[]} Array of poem strings
 */
function getAllPoems() {
  return poems.slice();
}

module.exports = { getPoem, getAllPoems };

if (require.main === module) {
  console.log(getPoem());
}
