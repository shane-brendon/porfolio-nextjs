import React from 'react'

const RingPattern = ({
  width = 530,
  height = 129,
  stroke = '#FFF',
  opacity = 0.25,
  className,
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 530 129'
      className={className}
    >
      <g fill='none' fillRule='evenodd' stroke={stroke} opacity={opacity}>
        <ellipse cx='265' cy='40' rx='264.5' ry='39.5' />
        <ellipse cx='265' cy='52' rx='264.5' ry='39.5' />
        <ellipse cx='265' cy='65' rx='264.5' ry='39.5' />
        <ellipse cx='265' cy='77' rx='264.5' ry='39.5' />
        <ellipse cx='265' cy='89' rx='264.5' ry='39.5' />
      </g>
    </svg>
  )
}

export default RingPattern
