import T from '../Constants/types'

export function createUser(firstName, lastName) {
  return {
    type: T.USER.CREATE,
    payload: {firstName, lastName}
  }
}