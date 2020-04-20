import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserCard extends Component {
  render() {
  	const { user } = this.props
    return (
      <div>
        <div>
        	{user.name}
        </div>
        <div>
        	Total Asked: {user.questions.length}
        </div>
        <div>
        	Total Answered: {Object.keys(user.answers).length}
        </div>
         <div>
        	Score: {Object.keys(user.answers).length + user.questions.length}
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
