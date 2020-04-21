import React, { Component } from 'react'
import { formatQuestion } from '../utils/helpers'
import { connect } from 'react-redux'
import PollAnswer from './PollAnswer'
import { handleAnswerQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class Poll extends Component {
  handleSubmit = (e) => {
    e.preventDefault()

    const radios = document.getElementsByName("ratherOption")
    let answer = null

    for (var i = 0, length = radios.length; i < length; i++) {
	  if (radios[i].checked) {
	    answer = radios[i].id
	    break;
	  }
	}

    const info = {
    	id: this.props.question.id,
    	authedUser: this.props.authedUser,
    	answer: answer
    }

    this.props.dispatch(handleAnswerQuestion(info))

  }


  render() {
  	const {question, answer} = this.props
  	const showResults = answer ? true : false

  	if (!question) {
  		return (
  			<Redirect to='/404' />
  		)
  	}

    return (
      <div>
      	<div>
        	Would you rather...
        </div>
        {!showResults && 
	        <form>
	        	<input type="radio" id="optionOne" name="ratherOption" />
	        	<label>{question.optionOne.text}</label>
	        	<input type="radio" id="optionTwo" name="ratherOption" />
	        	<label>{question.optionTwo.text}</label>
	        	<button onClick={this.handleSubmit}>Submit</button>
	        </form>
	    }

	    {showResults && 
	        <div>
	        	<PollAnswer option={question.optionOne} selected={answer === 'optionOne'} />
	        	<PollAnswer option={question.optionTwo} selected={answer === 'optionTwo'} />
	        </div>
	    }

      </div>
    )
  }
}

function mapStateToProps ({questions, users, authedUser}, props ) {
  const { id } = props.match.params
  const question = questions[id]
  let answer = null

  if (question && question.optionOne.votes.filter(user => user === authedUser).length > 0) {
  	answer = 'optionOne'
  } else if (question && question.optionTwo.votes.filter(user => user === authedUser).length > 0) {
  	answer = 'optionTwo'
  }

  return {
    question: question ? formatQuestion(question, users[question.author], authedUser) : null,
    answer: answer,
    authedUser,
  }
}

export default connect(mapStateToProps)(Poll)