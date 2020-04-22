import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollCard from './PollCard'

class Dashboard extends Component {
  state = {
    unanswered: true
  }

  render() {
    const {answeredQuestionIds, unansweredQuestionIds} = this.props
    const questions = this.state.unanswered ? unansweredQuestionIds : answeredQuestionIds

    return (
      <div>
        <h3 className='center'>Would You Rather</h3>
        <div className='center'>
          <button className={this.state.unanswered ? "tab-selected" : "tab"} onClick={() => this.setState({unanswered: true})}>Unanswered Questions</button>
          <button className={!this.state.unanswered ? "tab-selected" : "tab"} onClick={() => this.setState({unanswered: false})}>Answered Questions</button>
        </div>
        <ul className='dashboard-list'>
          { questions.map((id) => (
              <PollCard id={id} key={id} />
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users }) {
  const answeredQuestionIds = authedUser ? Object.keys(users[authedUser].answers)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
      : []

  return {
    answeredQuestionIds: answeredQuestionIds,
    unansweredQuestionIds: Object.keys(questions)
      .filter(value => !answeredQuestionIds.includes(value))
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)