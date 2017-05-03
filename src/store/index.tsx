import T from '../Constants/types'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = store => next => action => {
  let result
  console.groupCollapsed(`dispatching action => ${action.type}`)
  let { user } = store.getState()
  console.log(`user: ${JSON.stringify(user)}`)
  result = next(action)
  console.log(`user: ${JSON.stringify(user)}`)
  console.groupEnd()
  return result
}

export default (initialState={}) => {
  return applyMiddleware(thunk,consoleMessages)(createStore)(appReducer, initialState)
}


