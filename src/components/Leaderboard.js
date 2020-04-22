import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserCard from './UserCard'

class Leaderboard extends Component {
  render() {
  	const { userIds } = this.props
    return (
      <div>
        <h3 className="center">Leaderboard</h3>
        <div className="dashboard-list">
        	{userIds.map((userId) => (
        			<UserCard  key={userId} userId={userId} />
        	))}
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {

  return {
    userIds: Object.keys(users)
    	.sort((a,b) => (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length))
  }
}

export default connect(mapStateToProps)(Leaderboard)