import React, { Component } from 'react'
import propTypes, { defaultProps } from '../propTypes/dotMatrix'

export default class DotMatrix extends Component {
  addLeadingZero (n) {
    return n.toString().length < 2
      ? `0${n}`
      : n
  }

  renderPrimary () {
    return this.props.showLeadingZeros
      ? this.addLeadingZero(this.props.primaryValue)
      : this.props.primaryValue
  }

  renderWithSecondary () {
    return this.props.showLeadingZeros
      ? `${this.addLeadingZero(this.props.primaryValue)}:${this.addLeadingZero(this.props.secondaryValue)}`
      : `${this.props.primaryValue}:${this.props.secondaryValue}`
  }

  render () {
    return (
      <div className='number-block'>
        <p className='number-block-number'>
          {!this.props.showSecondaryValue && this.renderPrimary()}
          {this.props.showSecondaryValue && this.renderWithSecondary()}
        </p>
      </div>
    )
  }
}

DotMatrix.propTypes = propTypes
DotMatrix.defaultProps = defaultProps
