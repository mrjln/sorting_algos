const swap = (list, a, b) => {
  const temp = list[b]
  list[b] = list[a]
  list[a] = temp
}

module.exports = (data, COLUMN) => {
   const sortStart = new Date()
   let sortCalls = 0
   let swapped = true

   const list = data.map(x => parseInt(x[COLUMN]))

   while (swapped){
     swapped = false
     for (let i = 0; i < list.length -1; i++) {
       if (list[i] > list[i+1]){
         swap(list, i, i+1)
         swapped = true
       }
      sortCalls++
      }

      if (!swapped) { break }
      swapped = false

      for (let i = data.length-1; i === 1 ; i--) {
        if (list[i] > list[i+1]){
          swap(list, i, i-1)
          swapped = true
        }
       sortCalls++
     }


   }


   const sortDuration = new Date() - sortStart
   const sortCallsPerRow = sortCalls / data.length

   //this works, except that data is not sorted!! So the console log doesnt work
   //console.log(`Done sorting data. Lowest ${COLUMN}: ${data[0][COLUMN]}, Highest ${COLUMN}: ${data[data.length - 1][COLUMN]}`)
   console.log(`Done sorting data COCKTAIL. Lowest ${list[0]}, Highest: ${list[list.length-1]}`)

   console.log(`Took ${sortCalls} calls, or ${sortCallsPerRow} calls per row (${sortDuration}ms)`)

   return list
 }
