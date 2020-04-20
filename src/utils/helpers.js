export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion(question, author, authedUser) {
  const { id, timestamp, optionOne, optionTwo } = question
  const { name, avatarURL } = author

  const optionOneCount = optionOne.votes.length
  const optionTwoCount = optionTwo.votes.length

  const optionOnePercent = optionOneCount / (optionOneCount + optionTwoCount)
  const optionTwoPercent = optionTwoCount / (optionOneCount + optionTwoCount)

  return {
    name,
    id,
    timestamp,
    avatar: avatarURL,
    optionOne: {
      ...optionOne,
      count: optionOneCount,
      percent: optionOnePercent
    },
    optionTwo: {
      ...optionTwo,
      count: optionTwoCount,
      percent: optionTwoPercent      
    }
  }
}