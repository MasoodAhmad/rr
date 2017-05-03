import T from '../Constants/types'

export function createUser(firstName, lastName) {
  console.log(`iam in createUser action`)
  return {
    type: T.USER.CREATE,
    payload: {firstName, lastName}
  }
}