import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserCard extends Component {
  render() {
  	const { user } = this.props
    return (
      <div className="user-card">
      	<div>
	        <div>
	        	{user.name}
	        </div>
	      	<img
	          src={user.avatarURL}
	          alt={`Avatar of ${user.name}`}
	          className='avatar'
	        />	        
        </div>
        <div className='user-scores'>
        	<p>Asked: {user.questions.length}</p>
        	<p>Answered: {Object.keys(user.answers).length}</p>
	        <p className="total-score">Score: {Object.keys(user.answers).length + user.questions.length}</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ users }, { userId } ) {
  const user = users[userId]

  return {
    user
  }
}

export default connect(mapStateToProps)(UserCard)
