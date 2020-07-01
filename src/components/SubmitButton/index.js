import React from 'react'
import { Button } from './styles'
import PropTypes from 'prop-types'

export const SubmitButton = ({ disabled, children, onClick }) => {
  return <Button disabled={disabled} onClick={onClick}>{children}</Button>
}

// .node (Cualquier cosa que React pueda renderizar como un componente, un numero o codigo JS, etc).
SubmitButton.PropTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}
