import {
  bool,
  func,
  number,
  string
} from 'prop-types'

export const defaultProps = {
  minutes: 0,
  seconds: 0,
  showSeconds: true
}

export default {
  minutes: number,
  onButtonClick: func,
  seconds: number,
  showSeconds: bool,
  title: string
}
