const swap = (list, a, b) => {
  const temp = list[b]
  list[b] = list[a]
  list[a] = temp
}

const gaps = [1750, 701, 301, 132, 57, 23, 10, 4, 1]

module.exports = (data, COLUMN) => {
   const sortStart = new Date()
   let sortCalls = 0
   let swapped = true

   const list = data.map(x => parseInt(x[COLUMN]))
   console.log(list)

   while (swapped){
     swapped = false

     for (let gap_i = 0; gap_i < gaps.length-1; gap_i++) {
       let gap = gaps[gap_i]

         for (let i = 0; i < list.length -1; i++) {
           if (list[i] > list[i + gap]){
             swap(list, i, i+gap)
             swapped = true
           }

          sortCalls++
       }
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
