import React, { Component } from 'react'
import NumberBlock from './components/NumberBlock'
import propTypes, { defaultProps } from './propTypes/scoreboard'

export default class Scoreboard extends Component {
  renderLeftPanel () {
    return (
      <div className='scoreboard-left-panel'>
        <p>{this.props.homeTeam}</p>
        <NumberBlock primaryNumber={5} />
        <p>{this.props.awayTeam}</p>
        <NumberBlock primaryNumber={1} />
      </div>
    )
  }

  renderBottomRow () {
    return (
      <div id='scoreboard-bottom-row' className='scoreboard-row'>
        <p>Some other stuff</p>
      </div>
    )
  }

  renderMiddleRow () {
    return (
      <div id='scoreboard-middle-row' className='scoreboard-row'>
        {this.renderLeftPanel()}
      </div>
    )
  }

  renderTitle () {
    return (
      <div id='scoreboard-title' className='scoreboard-row'>
        <p>The Scottish & Newcastle United Scoreboard</p>
      </div>
    )
  }

  render () {
    return (
      <div id='scoreboard-wrapper'>
        {this.renderTitle()}
        {this.renderMiddleRow()}
        {this.renderBottomRow()}
      </div>
    )
  }
}

Scoreboard.propTypes = propTypes
Scoreboard.defaultProps = defaultProps
