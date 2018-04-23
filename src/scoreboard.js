import React, { Component } from 'react'
import NumberBlock from './components/NumberBlock'
import propTypes, { defaultProps } from './propTypes/scoreboard'

export default class Scoreboard extends Component {
  getWidth () {
    return this.props.showCentrePanel ? 'quarter-width' : 'half-width'
  }

  renderCentrePanel () {
    return <div className='scoreboard-panel half-width'>Centre Panel Content</div>
  }

  renderLeftPanel () {
    return (
      <div className={`scoreboard-panel ${this.getWidth()}`}>
        <div className='team-label'>{this.props.homeTeam}</div>
        <NumberBlock primaryNumber={5} />
        <div className='team-label'>{this.props.awayTeam}</div>
        <NumberBlock primaryNumber={1} />
      </div>
    )
  }

  renderRightPanel () {
    return <div className={`scoreboard-panel ${this.getWidth()}`}>Right Panel Content</div>
  }

  renderBoard () {
    return (
      <div id='scoreboard-main-row' className='scoreboard-row'>
        {this.renderLeftPanel()}
        {this.renderCentrePanel()}
        {this.renderRightPanel()}
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
        {this.renderBoard()}
      </div>
    )
  }
}

Scoreboard.propTypes = propTypes
Scoreboard.defaultProps = defaultProps
