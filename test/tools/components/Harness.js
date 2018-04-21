import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Scoreboard from '../../../src/scoreboard'

export default class Harness extends Component {
  renderCount () {
    return (
      <div>
        <p>Count: {this.props.template.count}</p>
      </div>
    )
  }

  renderTemplate () {
    return (
      <Scoreboard
        onButtonClick={this.props.onButtonClick}
        />
    )
  }

  render () {
    return (
      <div>
        {this.renderTemplate()}
        {this.renderCount()}
      </div>
    )
  }
}

Harness.propTypes = {
  onButtonClick: PropTypes.func,
  template: PropTypes.object
}
