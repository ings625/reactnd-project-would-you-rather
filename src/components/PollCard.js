import React, { Component } from 'react'
import { formatQuestion, formatDate } from '../utils/helpers'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class PollCard extends Component {
  render() {

  	const { question } = this.props
  	console.log(question)
  	const {
      name, avatar, timestamp, id
    } = question

    return (
      <Link to={`/question/${id}`} className='question'>
      	<img
          src={avatar}
          alt={`Avatar of ${name}`}
          className='avatar'
        />
        <div>
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
          </div>
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