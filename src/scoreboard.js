import React, { Component } from 'react'
import DotMatrix from './components/DotMatrix'
import propTypes, { defaultProps } from './propTypes/scoreboard'
const TRUE = true

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
        <div className='scoreboard-label'>{this.props.homeTeam}</div>
        <DotMatrix primaryValue={5} />
        <div className='scoreboard-label'>{this.props.awayTeam}</div>
        <DotMatrix primaryValue={1} />
      </div>
    )
  }

  renderRightPanel () {
    return <div className={`scoreboard-panel ${this.getWidth()}`}>
      <div className='scoreboard-label'>Time Elapsed</div>
      <DotMatrix
        primaryValue={this.props.minutes}
        secondaryValue={this.props.seconds}
        showLeadingZeros={TRUE}
        showSecondaryValue={TRUE}
      />
      <div className='scoreboard-label'>Scorer</div>
      <DotMatrix />
    </div>
  }

  renderBoard () {
    return (
      <div id='scoreboard-main-row' className='scoreboard-row'>
        {this.renderLeftPanel()}
        {this.props.showCentrePanel && this.renderCentrePanel()}
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
