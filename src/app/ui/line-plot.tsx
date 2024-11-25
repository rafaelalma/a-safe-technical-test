/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import * as d3 from 'd3'
import { useRef, useEffect } from 'react'

type Props = {
  data: ReadonlyArray<d3.NumberValue>
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
}

export default function LinePlot({
  data,
  width = 640,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 30,
  marginLeft = 40,
}: Props) {
  const gx = useRef<SVGGElement>(null)
  const gy = useRef<SVGGElement>(null)
  const x = d3.scaleLinear(
    [0, data.length - 1],
    [marginLeft, width - marginRight]
  )
  const y = d3.scaleLinear(d3.extent(data) as any, [
    height - marginBottom,
    marginTop,
  ])
  const line = d3.line((d, i) => x(i), y)
  useEffect(
    () => void d3.select(gx.current).call(d3.axisBottom(x) as any),
    [gx, x]
  )
  useEffect(
    () => void d3.select(gy.current).call(d3.axisLeft(y) as any),
    [gy, y]
  )
  return (
    <svg width={width} height={height}>
      <g ref={gx} transform={`translate(0,${height - marginBottom})`} />
      <g ref={gy} transform={`translate(${marginLeft},0)`} />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d={line(data) ?? undefined}
      />
      <g fill="white" stroke="currentColor" strokeWidth="1.5">
        {data.map((d, i) => (
          <circle key={i} cx={x(i)} cy={y(d)} r="2.5" />
        ))}
      </g>
    </svg>
  )
}
