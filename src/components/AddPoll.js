import React, { Component } from 'react'
import { handleAddQuestion } from '../actions/questions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class AddPoll extends Component {

  handleSubmit = (e) => {
    e.preventDefault()

    const optionOne = document.getElementById("optionOneInput").value;
    const optionTwo = document.getElementById("optionTwoInput").value;


    const question = {
    	optionOneText: optionOne, 
    	optionTwoText: optionTwo, 
    }

    this.props.dispatch(handleAddQuestion(question))
    	.then(() => this.props.history.push(`/`))

  }
  render() {
    return (
      <div>
        <h3 className='center'>Would You Rather...</h3>
        <form className='center'>
        	<input className='inpt' type="text" id="optionOneInput" name="optionOne" placeholder="Option One" />
        	<br />
        	<input className='inpt' type="text" id="optionTwoInput" name="optionTwo" placeholder="Option Two" />
        	<br />
        	<button className='btn' onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}


export default withRouter(connect()(AddPoll))