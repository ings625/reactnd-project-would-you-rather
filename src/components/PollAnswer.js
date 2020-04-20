import React, { Component } from 'react'

class PollAnswer extends Component {
  render() {
    const { showResults, option, selected } = this.props
    console.log(this.props)
    return (
      <div>
      	<div>
        	{option.text}
        </div>
        {showResults && 
          <div>
            <div>
              {option.count}
            </div>
            <div>
              {option.percent}
            </div>
          </div>
        }
        
      </div>
    )
  }
}

export default PollAnswer