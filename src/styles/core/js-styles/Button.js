import styled from 'styled-components'
import {
  black,
  buttonColour,
  focusColour,
  green,
  grey1,
  white
} from './colors.js'

const Button = styled.button`
  background: ${props => props.secondary ? grey1 : buttonColour};
  border: none;
  border-radius: 0;
  box-shadow: 0 2px 0 ${black};
  color: ${white};
  cursor: pointer;
  display: inline-block;
  font-size: 1em;
  line-height: 1.25;
  outline-offset: -1px;
  padding: .526315em .789473em .263157em;
  position: relative;
  text-decoration: none;

  &:hover { background-color: ${green}; }
  &:focus { outline: 3px solid ${focusColour}; }
  &:visited { background-color: ${buttonColour}; }
  &:active { top: 2px; box-shadow: 0 0 0 ${green}; }

  &.disabled,
  &[disabled="disabled"],
  &[disabled],
  &[${props => props.disabled}] {
    opacity: 0.5;
    &:hover {
      background-color: ${buttonColour};
      cursor: default;
    }
  }

  &:before {
    content: "";
    height: 110%;
    width: 100%;
    display: block;
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:active:before {
    top: -10%;
    height: 120%;
  }
`

export default Button
