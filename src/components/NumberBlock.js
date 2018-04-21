import React, { Component } from 'react'
import propTypes, { defaultProps } from '../propTypes/numberBlock'

export default class NumberBlock extends Component {
  addLeadingZero (n) {
    return n.toString.length() > 1
      ? `0${n}`
      : n
  }

  renderPrimary () {
    console.log(`here`)
    return this.props.showLeadingZeros
      ? this.addLeadingZero(this.props.primaryNumber)
      : this.props.primaryNumber
  }

  renderWithSecondary () {
    return this.props.showLeadingZeros
      ? `${this.addLeadingZero(this.props.primaryNumber)}:${this.addLeadingZero(this.props.secondaryNumber)}`
      : `${this.props.primaryNumber}:${this.props.secondaryNumber}`
  }

  render () {
    console.log(this.props)
    return (
      <div className='number-block'>
        {!this.props.showSecondaryNumber && this.renderPrimary()}
        {this.props.showSecondaryNumber && this.renderWithSecondary()}
      </div>
    )
  }
}

NumberBlock.propTypes = propTypes
NumberBlock.defaultProps = defaultProps
