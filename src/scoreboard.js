import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Wrapper, Title} from './styles/styled-components.js'
import Button from './styles/core/js-styles/Button.js'

require('./images/logo-gov-white.png')

export default class Template extends Component {
  clickFunction () {
    this.props.onButtonClick()
  }

  render () {
    return (
      <Wrapper id='template-wrapper'>
        <Title id='template-title'>Scoreboard Goes Here!</Title>
        <Button
          id='template-button'
          type='button'
          onClick={() => this.clickFunction()}
        >
          Click Me!
        </Button>
      </Wrapper>
    )
  }
}

Template.propTypes = {
  onButtonClick: PropTypes.func
}
