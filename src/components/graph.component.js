import React, { useState, useEffect, useMemo } from "react"
import axios from "axios"
import * as d3 from "d3"

function Graph() {
  const [test, setTest] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:5000/temperatures")
      .then((res) => {
        if (res.data.length > 0) {
          setTest(res.data)
        }
      })
      .catch((err) => console.log(err))
  })

  const ticks = useMemo(() => {
    const xScale = d3
      .scaleOrdinal()
      .domain(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])
      .range(['black', '#ccc', '#ccc'])
    return xScale.ticks().map((value) => ({
      value,
      xOffset: xScale(value),
    }))
  }, [])

  // const yticks = useMemo(() => {
  //   const yScale = d3
  //     .scaleLeft()
  //     .domain([17, 21])
  //     .range([10, 290])
  //   return yScale.ticks().map((value) => ({
  //     value,
  //     yOffset: yScale(value),
  //   }))
  // }, [])

  return (
    <div className="">
    <svg>
      {/* {ticks.map(({ value, xOffset }) => (
      ))} */}
    </svg>

    {/* <svg>
      <path d="M 9.5 0.5 H 290.5" stroke="currentColor" />
      {yticks.map(({ value, yOffset }) => (
        <g key={value} transform={`translate(${yOffset}, 0)`}>
          <line y2="6" stroke="currentColor" />
          <text
            key={value}
            style={{
              fontSize: "10px",
              textAnchor: "middle",
              transform: "translateY(20px)",
            }}
          >
            {value}
          </text>
        </g>
      ))}
    </svg> */}
    </div>
  )
}

export default Graph
