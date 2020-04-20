import { RECEIVE_QUESTIONS, ANSWER_QUESTION, UNANSWER_QUESTION, ADD_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ANSWER_QUESTION :
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.answer] : {
            ...state[action.id][action.answer],
            votes: state[action.id][action.answer].votes.concat([action.authedUser])
          }
        }
      }
    case UNANSWER_QUESTION :
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          optionOne : {
            ...state[action.id].optionOne,
            votes: state[action.id].optionOne.votes.filter(user => user !== action.authedUser)
          },
          optionTwo : {
            ...state[action.id].optionTwo,
            votes: state[action.id].optionTwo.votes.filter(user => user !== action.authedUser)
          }
        }
      }

    case ADD_QUESTION :
      return {
        ...state,
        [action.question.id]: action.question
      }

    default :
      return state
  }
}