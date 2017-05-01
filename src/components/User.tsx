
export const User = (props) => (
  <div>This is user page...  {props.children}</div>
)


var isEditMode = (props) => {
  return props.match.path.endsWith('/edit')
}

export const UserID = (props) => {
  var edit = (e) => {
    e.preventDefault();
    //do some other logic
    props.history.push(`/user/${props.match.params.id}/edit`)
  }

  var save = (e) => {
    e.preventDefault();
    //do some other logic
    props.history.push(`/user/${props.match.params.id}/view`)
  }

  return(
  <div>
    <div>This is user ID page... your id: {props.match.params.id} </div>
    <form method="POST">
      <input type="text" name="firstName" readOnly={!isEditMode(props)} />
      <input type="text" name="lastName" readOnly={!isEditMode(props)} />
      <input type="password" name="password" readOnly={!isEditMode(props)} />
      <button name="Save" value="Save" onClick={save} readOnly={!isEditMode(props)}/>
      <button name="Edit" value="Edit" onClick={edit}/>
    </form>
  </div>
  )
}

export const UserStatic = (props) => (
  <div>This is static user page...  </div>
)