import { RECEIVE_USERS } from '../actions/users'
import { ANSWER_QUESTION, UNANSWER_QUESTION } from '../actions/questions'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }

    case ANSWER_QUESTION :
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers : {
            ...state[action.authedUser].answers,
            [action.id]: action.answer
          }
        }
      }  

    case UNANSWER_QUESTION :
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers : {
            ...state[action.authedUser].answers,
            [action.id]: undefined
          }
        }
      }  
    default :
      return state
  }
}