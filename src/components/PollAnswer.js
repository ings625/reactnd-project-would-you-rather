import React, { Component } from 'react'

class PollAnswer extends Component {
  render() {
    const { option, selected } = this.props
    return (
      <div>
      	<div>
        	{option.text}
        </div>
          <div>
            <div>
              {option.count}
            </div>
            <div>
              {option.percent}
            </div>
            {selected && `You chose this option`}
          </div>
        
      </div>
    )
  }
}

export default PollAnswer