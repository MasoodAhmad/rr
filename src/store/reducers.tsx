import T from '../Constants/types'
import { combineReducers } from 'redux'


export const user = (state={}, action) => {
  switch(action.type) {
    case T.USER.CREATE :
      //TODO: do some math
      return state;
    case T.USER.UPDATE :
      //TODO: dom some math
      return state;
    default:
      return state
  }
}

// export const fetching = (state=false, action) => {
//   switch(action.type) {
//
//     case T.USER.FETCHING :
//       return true
//
//     case T.USER.CANCELFETCHING :
//       return false
//
//     default:
//       return state
//   }
// }



export default combineReducers({
  user
  // , fetching
})



