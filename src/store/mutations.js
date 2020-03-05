export default {
  addList (state, payload) {
    const list = state.items
    const newList = [...list, {name: payload.newItem, menge: payload.value, editing: false, date: payload.date}]
    state.items = newList
  },
  addDone (state, i) {
    const list = state.doneList
    const newList = [{name: state.items[i].name, menge: state.items[i].menge, editing: false, date: state.items[i].date}, ...list]
    state.doneList = newList
  },
  removeList (state, index) {
    
    const list = state.items
    const newList = [
      ...list.slice(0, index),
      ...list.slice(index + 1, list.length)
    ]
    state.items = newList
  },
  removeDone (state, index) {
    const list = state.doneList
    const newList = [
      ...list.slice(0, index),
      ...list.slice(index + 1, list.length)
    ]
    state.doneList = newList
  }
}