export default {
  doneEmpty(state){
    return state.doneList.length
  },
  sortedByDate(state) {
    /*
    return state.items.filter(function (el) {
      return el.date !== ""
    }) 
    */
    
    return state.items.sort(function(a, b) {

      a = a.date
      b = b.date
      
      return a<b ? -1 : a>b ? 1 : 0
    })
    
    /*
    const filterNotDate = state.items.filter(function (el) {
      return el.date === ""
    })   
    const newList = [...filterOnlyDate, ...filterNotDate]
    return newList
    */
  }
}