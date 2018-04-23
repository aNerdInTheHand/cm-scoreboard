import {
  bool,
  func,
  number,
  string
} from 'prop-types'

export const defaultProps = {
  minutes: 0,
  seconds: 0,
  showCentrePanel: false,
  showSeconds: true
}

export default {
  awayTeam: string.isRequired,
  homeTeam: string.isRequired,
  minutes: number,
  onButtonClick: func,
  seconds: number,
  showCentrePanel: bool,
  showSeconds: bool,
  title: string
}
