import PropTypes from 'prop-types';

export const User = (props) => (
  <div>This is user page...  {props.children}</div>
)


var isUpdateMode = (props) => {
  return(
    props.match.path.endsWith('/update')
    || props.match.path.endsWith('/create')
  )
}

export const UserID:any = ( props ) => {
  let _firstName, _lastName
  var update = (e) => {
    e.preventDefault();
    //do some other logic
    props.history.push(`/user/${props.match.params.id}/update`)
    props.onCreateUser({
      firstName: _firstName.value,
      lastName: _lastName.value
    })
  }

  var save = (e) => {
    e.preventDefault();
    //do some other logic
    // show message that user is saved / added (deal accordingly)

    props.history.push(`/user/${props.match.params.id}/view`)
  }

  return(
  <div>
    <div>This is user ID page... your id: {props.match.params.id} </div>
    <form method="POST">
      <input
        ref={input => _firstName = input}
        type="text"
        name="firstName"
        readOnly={!isUpdateMode(props)}
      />
      <input
        ref={input => _lastName = input}
        type="text"
        name="lastName"
        readOnly={!isUpdateMode(props)}
      />
      <input
        type="password"
        name="password"
        readOnly={!isUpdateMode(props)}
      />
      Save: <button name="Save" value="Save" onClick={save}/>
      Edit: <button name="Edit" value="Edit" onClick={update}/>
    </form>
  </div>
  )
}

// UserID.propTypes = {
//   onCreateUser: PropTypes.func
// }
export const UserStatic = (props) => (
  <div>This is static user page...  </div>
)