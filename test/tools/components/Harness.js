import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Scoreboard from '../../../src/scoreboard'

export default class Harness extends Component {
  renderTemplate () {
    return (
      <Scoreboard
        awayTeam={this.props.template.awayTeam}
        homeTeam={this.props.template.homeTeam}
        />
    )
  }

  render () {
    console.log(this.props)
    return (
      <div>
        {this.renderTemplate()}
      </div>
    )
  }
}

Harness.propTypes = {
  template: PropTypes.object
}
