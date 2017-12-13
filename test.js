// test.js
// Require algorithm implementation
const sort = require('./algorithms/cocktail')

// Path to data file and column to sort on
const COLUMN = 'comments'

let data = [
  { [COLUMN]: '5' },
  { [COLUMN]: '1' },
  { [COLUMN]: '7' },
  { [COLUMN]: '900' },
  { [COLUMN]: '-4' },
]

// Call the sort algorithm with `data` and the key for the column to sort on
sort(data, COLUMN)
