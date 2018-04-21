import styled from 'styled-components'
import {
  black,
  yellow50
} from './colors.js'

const NumberBlock = styled.div`
  background: ${black};
  border: none;
  border-radius: 0;
  box-shadow: 0 2px 0 ${black};
  color: ${yellow50};
  cursor: pointer;
  display: inline-flex;
  font-size: 2em;
  line-height: 1.25;
  outline-offset: -1px;
  position: relative;
  text-decoration: none;
`

export default NumberBlock
