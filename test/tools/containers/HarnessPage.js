import React, { Component } from 'react'
import { connect } from 'react-redux'

import Harness from '../components/Harness.js'

import { increment } from '../redux/template/actions'

export class HarnessPage extends Component {
  render () {
    return (
      <Harness {...this.props} />
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
