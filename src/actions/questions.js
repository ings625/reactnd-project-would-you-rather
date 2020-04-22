import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const UNANSWER_QUESTION = 'UNANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleAddQuestion ({optionOneText, optionTwoText}) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function answerQuestion ({ id, authedUser, answer }) {
  return {
    type: ANSWER_QUESTION,
    id,
    authedUser,
    answer
  }
}

function unanswerQuestion ({ id, authedUser }) {
  return {
    type: UNANSWER_QUESTION,
    id,
    authedUser
  }
}

export function handleAnswerQuestion (info) {
  return (dispatch) => {
    dispatch(answerQuestion(info))

    return saveQuestionAnswer({
      qid: info.id,
      authedUser: info.authedUser,
      answer: info.answer
    })
      .catch((e) => {
        console.warn('Error in handleAnswerQuestion: ', e)
        dispatch(unanswerQuestion(info))
        alert('The was an error answering the question. Try again.')
      })
  }
}