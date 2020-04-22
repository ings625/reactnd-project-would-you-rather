import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component {



  handleSubmit = (e) => {
    e.preventDefault()

    let userId = document.getElementById("user-select").value;

    this.props.dispatch(setAuthedUser(userId))

  }

  render() {

    if (this.props.authed === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
      	<h1 className='center'>Login</h1>
      	{!this.props.loading && 
	      	<form onSubmit={this.handleSubmit}>
	      		<div className='center'>
		      		<select id="user-select" className="slct">
		      			{Object.keys(this.props.users).map((id) => (
		      				<option key={id} value={id}>{this.props.users[id].name}</option>
		      			))}	
		      		</select>
	      		</div>
	      		<div className='center'>
		      		<button className='btn' type='submit'>
		      			Log In
		      		</button>
	      		</div>
	      	</form>
	      }
      </div>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  return {
    users,
    loading: Object.keys(users).length === 0,
    authed: authedUser !== null,
  }
}

export default connect(mapStateToProps)(Login)
