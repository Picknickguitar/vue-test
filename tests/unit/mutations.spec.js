import mutations from '@/store/mutations'
import state from '@/store/state'

test('addList increments state.length by 1', () => {
  const length = state.items.length
  const payload = {newItem: 'test', value: 5, date: '29.10.1986'}

  mutations.addList(state, payload)
  expect(state.items.length).toBe(length+1)
  
})

test('addDone increments doneList.length by 1', () => {
  const length = state.doneList.length

  mutations.addDone(state, 0)
  expect(state.doneList.length).toBe(length+1)
  
})

