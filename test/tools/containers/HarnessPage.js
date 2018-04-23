import React, { Component } from 'react'
import { connect } from 'react-redux'

import Harness from '../components/Harness.js'

import { increment } from '../redux/template/actions'
const TRUE = true
// const FALSE = false

export class HarnessPage extends Component {
  render () {
    return (
      <Harness {...this.props} showCentrePanel={TRUE} />
    )
  }
}

function mapStateToProps (state) {
  return {
    template: state.template
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onButtonClick: () => dispatch(increment())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HarnessPage)
