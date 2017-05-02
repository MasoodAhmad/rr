import T from '../Constants/types'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = store => next => action => {
  let result
  console.groupCollapsed(`dispatching action => ${action.type}`)
  console.log('users', store.getState().users.length)
  result = next(action)
  let { users, someOther, someMore } = store.getState()
  console.log(`users: ${users.length}`)
  console.groupEnd()
  return result
}

export default (initialState={}) => {
  return applyMiddleware(thunk,consoleMessages)(createStore)(appReducer, initialState)
}


