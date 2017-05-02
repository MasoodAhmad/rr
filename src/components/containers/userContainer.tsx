import {UserID} from '../ui/User'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createUser } from '../../actions/actions'


const mapStateToProps = (state, props) =>
  ({
    firstName: state.users.firstName,
    lastName: state.users.lastName

  })

const mapDispatchToProps = dispatch =>
  ({
    onCreateUser({firstName,lastName}) {
      dispatch(
        createUser(firstName, lastName)
      )
    }
  })

const Container = connect(mapStateToProps, mapDispatchToProps)(UserID)

export default (withRouter as any)(Container)

