import React, { Component } from 'react'
import { formatQuestion, formatDate } from '../utils/helpers'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class PollCard extends Component {
  render() {

  	const { question } = this.props
  	const {
      name, avatar, timestamp, id, optionOne, optionTwo
    } = question

    return (
    <Link className="poll-card" to={`/question/${id}`} >
	      	<div>
		      	<div>{name} asks...</div>
		      	<img
		          src={avatar}
		          alt={`Avatar of ${name}`}
		          className='avatar'
		        />
		        <div>
		          <div>
		            
		            <div>{formatDate(timestamp)}</div>
		          </div>
		        </div>
	        </div>
	        <div className="poll-text">
	        	<h4>Would you rather:</h4>
	        	<p>A: {optionOne.text}</p>
        		<p>B: {optionTwo.text}</p>
	        </div>
     </Link>
    )
  }
}

function mapStateToProps ({questions, users, authedUser}, { id }) {
  const question = questions[id]

  return {
    question: question ? formatQuestion(question, users[question.author], authedUser) : null
  }
}

export default withRouter(connect(mapStateToProps)(PollCard))