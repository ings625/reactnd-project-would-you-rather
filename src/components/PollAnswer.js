import React, { Component } from 'react'

class PollAnswer extends Component {
  render() {
    const { option, selected } = this.props
    return (
      <div className="poll-answer">
      	<div>
        	{option.text}
        </div>
          <div>
            <div>
              {option.count} Users ({Math.round(option.percent * 100)} %)
            </div>
            {selected && `(Your vote)`}
          </div>
        
      </div>
    )
  }
}

export default PollAnswer