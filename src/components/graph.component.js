import React, { useState, useEffect } from "react"
import axios from "axios"
import {
  AreaChart,
  Area,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

function Graph() {
  const [data, setData] = useState([])
  const [setpoint, setSetpoint] = useState(0)

  useEffect(() => {
    axios
      .get("http://localhost:5000/temperatures")
      .then((res) => {
        if (res.data.length > 0) {
          setData(
            res.data
              .filter((e, i) => i % 10 === 10 - 1)
              .map((dataset) => {
                const d = new Date(dataset.timestamp)
                return {
                  timestamp: months[d.getMonth()],
                  temperature: dataset.temperature,
                  hot_switch: dataset.hot_switch,
                  cold_switch: dataset.cold_switch,
                }
              })
          )
          setSetpoint(res.data[0].setpoint)
        }
      })
      .catch((err) => console.log(err))
  })

  // const gradientOffset = () => {
  //   const dataMax = Math.max(...data.map((i) => i.temperature))
  //   const dataMin = Math.min(...data.map((i) => i.temperature))

  //   if (dataMax <= 0) {
  //     return 0
  //   } else if (dataMin >= 0) {
  //     return 1
  //   } else {
  //     return dataMax / (dataMax - dataMin)
  //   }
  // }
  
  const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.temperature))
    const dataMin = Math.min(...data.map((i) => i.temperature))

    return 1 - (setpoint - dataMin) / (dataMax - dataMin);
  }


  const off = gradientOffset()

  return (
    <AreaChart width={800} height={400} data={data}>
      <Line type="monotone" dataKey="temperature" stroke="red" />
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" />
      <YAxis domain={[18, 21]} />
      <Tooltip />
      <defs>
        <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
          <stop offset={off} stopColor="red" stopOpacity={1} />
          <stop offset={off} stopColor="blue" stopOpacity={1} />
        </linearGradient>
      </defs>
      <Area
        type="monotone"
        dataKey="temperature"
        stroke="grey"
        fill="url(#splitColor)"
      />
    </AreaChart>
  )
}

export default Graph
