import React, { useState, useEffect } from "react"
import axios from "axios"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function Graph() {
  const [data, setData] = useState([])
  const [setpoint, setSetpoint] = useState(0)

  useEffect(() => {
    axios
      .get("http://localhost:5000/temperatures")
      .then((res) => {
        if (res.data.length > 0) {
          setData(res.data.map(dataset => {
            const d = new Date(dataset.timestamp);
            return {
              timestamp: months[d.getMonth()],
              temperature: dataset.temperature,
              hot_switch: dataset.hot_switch,
              cold_switch: dataset.cold_switch
            }
          }))
          setSetpoint(res.data[0].setpoint)
        }
      })
      .catch((err) => console.log(err))

  })

  return (
    <LineChart width={800} height={400} data={data.slice(100,300)}>
      <Line type="monotone" dataKey="temperature" stroke="red"/>
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
      <XAxis dataKey="timestamp"/>
      <YAxis domain={[18, 21]}/>
      <Tooltip />
    </LineChart>
  )
}

export default Graph
