export const User = (props) => (
  <div>This is user page...  {props.children}</div>
)

export const UserID = (props) => (
  <div>This is user ID page... id: {props.match.params.id} </div>
)

export const UserStatic = (props) => (
  <div>This is static user page...  </div>
)