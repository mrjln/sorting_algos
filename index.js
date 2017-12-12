const csv = require('csvtojson')

// Path to data file and column to sort on
const CSV_FILE='./datasets/ted_main.csv'
const COLUMN = 'comments'

// Use `data` (Array) to sort each element `el` on `el[COLUMN]`
//
// Example using Array.proptotype.sort(), using a custom `compare`
// function.
//
const sort = (data) => {
  const sortStart = new Date()

  let sortCalls = 0 // number of calls before data is sorted

  const sorted = data.sort((x, y) => {
    sortCalls++

    const a = x[COLUMN]
    const b = y[COLUMN]

    // a is less than b by the ordering criterion
    if (a < b) {
      return -1
    }

    // a is greater than b by the ordering criterion
    if (a > b) {
      return 1
    }

    // a must be equal to b
    return 0
  })

  const sortDuration = new Date() - sortStart

  const sortCallsPerRow = sortCalls / data.length

  console.log(`Done sorting data. Lowest ${COLUMN}: ${data[0][COLUMN]}, Highest ${COLUMN}: ${data[data.length - 1][COLUMN]}`)
  console.log(`Took ${sortCalls} calls, or ${sortCallsPerRow} calls per row (${sortDuration}ms)`)

  return sorted
}

// Create an Array of Objects from the CSV file
// using the column names for the keys and the row values for the values:
//
// [
//   { col1: value1 },
//   { col2: value2 },
//   ...
// ]
let data = []
const start = new Date()

csv()
  .fromFile(CSV_FILE)
  .on('json',(jsonObj) => {
    data.push(jsonObj)
  })
  .on('done',(error) => {
    const duration = new Date() - start
    console.log('Done loading data:', data.length, 'rows', `(${duration}ms)`)
    console.log(`Available Columns: ${Object.keys(data[0])}`)
    sort(data)
  })

// Example output
// Done loading data: 2550 rows (500ms)
// Available Columns: comments,description,duration,event,film_date,languages,main_speaker,name,num_speaker,published_date,ratings,related_talks,speaker_occupation,tags,title,url,views
// Done sorting data. Lowest comments: 10, Highest comments: 992
// Took 21976 calls, or 8.618039215686274 calls per row (5ms)
