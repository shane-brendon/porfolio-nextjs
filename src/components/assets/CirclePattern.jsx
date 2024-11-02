import React from 'react'

const CirclePattern = (props) => {
  const {
    stroke = '#FFF',
    cx = 830.5,
    cy = 585.5,
    r = 64,
    width = 129,
    height = 129,
    className,
  } = props
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 129 129'
      className={className}
    >
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill='none'
        stroke={stroke}
        transform='translate(-766 -521)'
      />
    </svg>
  )
}

export default CirclePattern
