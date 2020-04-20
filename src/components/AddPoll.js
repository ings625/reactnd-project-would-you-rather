import React, { Component } from 'react'
import { handleAddQuestion } from '../actions/questions'
import { connect } from 'react-redux'

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

  }
  render() {
    return (
      <div>
        <div>Would you rather...</div>
        <form>
        	<input type="text" id="optionOneInput" name="optionOne" placeholder="Option One" />
        	<input type="text" id="optionTwoInput" name="optionTwo" placeholder="Option Two" />
        	<button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}


export default connect()(AddPoll)