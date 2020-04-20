import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault()

    let userId = document.getElementById("user-select").value;

    this.props.dispatch(setAuthedUser(userId))

  }

  render() {
    return (
      <div>
      	<h1>Login</h1>
      	{!this.props.loading && 
	      	<form onSubmit={this.handleSubmit}>
	      		<div>
		      		<select id="user-select">
		      			{Object.keys(this.props.users).map((id) => (
		      				<option key={id} value={id}>{this.props.users[id].name}</option>
		      			))}	
		      		</select>
	      		</div>
	      		<div>
		      		<button type='submit'>
		      			Log In
		      		</button>
	      		</div>
	      	</form>
	      }
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    users,
    loading: Object.keys(users).length === 0
  }
}

export default connect(mapStateToProps)(Login)
