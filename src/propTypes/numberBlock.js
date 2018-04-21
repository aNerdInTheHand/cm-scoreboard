import {
  bool,
  number
} from 'prop-types'

export const defaultProps = {
  primaryNumber: 0,
  secondaryNumber: 0,
  showLeadingZeros: false,
  showSecondaryNumber: false
}

export default {
  primaryNumber: number,
  secondaryNumber: number,
  showLeadingZeros: bool,
  showSecondaryNumber: bool
}
