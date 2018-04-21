import React, { Component } from 'react'
// import {Wrapper,Title} from './styles/styled-components.js'
// import Button from './styles/core/js-styles/Button.js'
import NumberBlock from './components/NumberBlock'
import propTypes, { defaultProps } from './propTypes/scoreboard'

export default class Scoreboard extends Component {
  // clickFunction () {
  //   this.props.onButtonClick()
  // }

  render () {
    return (
      <div id='scoreboard-wrapper'>
        <div id='scoreboard-title' className='scoreboard-row'>
          <p>The Scottish & Newcastle United Scoreboard</p>
        </div>
        <div id='scoreboard-middle-row' className='scoreboard-row'>
          <div>
            <NumberBlock primaryNumber={5} />
          </div>
        </div>
        <div id='scoreboard-bottom-row' className='scoreboard-row'>
          <p>Some other stuff</p>
        </div>
      </div>
    )
  }
}

Scoreboard.propTypes = propTypes
Scoreboard.defaultProps = defaultProps
