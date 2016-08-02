import { default as React } from 'react'

const OverflowEllipsis = ({ style, ...props }) =>
  <div
    style={{
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      ...style
    }}
    {...props}
  />

export default OverflowEllipsis
