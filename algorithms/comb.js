const swap = (list, a, b) => {
  const temp = list[b]
  list[b] = list[a]
  list[a] = temp
}

module.exports = (data, COLUMN) => {
   const sortStart = new Date()
   let sortCalls = 0
   let swapped = true
   let sorted = false
   let sort_once_more = false

   const list = data.map(x => parseInt(x[COLUMN]))
   const shrink = 1.3
   let j = 1

   let gap = Math.floor(list.length / Math.pow(shrink,j))

  while (gap > 1){
    if (sort_once_more){ sorted = true}
    gap = Math.floor(list.length / Math.pow(shrink,j++))
    console.log(gap)
   while (swapped){
     swapped = false
        for (let i = 0; i < list.length -1; i++) {
         if (list[i] > list[i+gap]){
           swap(list, i, i+gap)
           swapped = true
         }
        sortCalls++
      }
      if (gap = 1){ sort_once_more = true}

    }
  }







   const sortDuration = new Date() - sortStart
   const sortCallsPerRow = sortCalls / data.length

   //this works, except that data is not sorted!! So the console log doesnt work
   //console.log(`Done sorting data. Lowest ${COLUMN}: ${data[0][COLUMN]}, Highest ${COLUMN}: ${data[data.length - 1][COLUMN]}`)
   console.log(`Done sorting data. Lowest ${list[0]}, Highest: ${list[list.length-1]}`)

   console.log(`Took ${sortCalls} calls, or ${sortCallsPerRow} calls per row (${sortDuration}ms)`)

   console.log(list)
   return list
 }
