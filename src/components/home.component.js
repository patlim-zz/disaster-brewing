import React, { useState, useEffect } from "react"
import axios from "axios"

// import { Link } from "react-router-dom"

const Data = (props) => (
  <tr>
    <td>{props.test.timestamp}</td>
    <td>{props.test.temperature}</td>
    <td>{props.test.hot_switch}</td>
    <td>{props.test.cold_switch}</td>
    <td>{props.test.setpoint}</td>
    {/* <td><Link to={"/edit/"+props.exercise._id}>edit</Link> | <button onClick={() => {props.deleteExercise(props.exercise._id)}}>Delete</button></td> */}
  </tr>
)

function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:5000/temperatures")
      .then((res) => {
        if (res.data.length > 0) {
          setData(res.data)
        }
      })
      .catch((err) => console.log(err))

  })

  function TempList() {
    return data.map((currentData) => {
      return <Data test={currentData} key={currentData._id} />
    })
  }

  return (
    <div>
      <h3>Data</h3>
      <table className="table">
        <thead className="thread-light">
          <tr>
            <th>timestamp</th>
            <th>temperature</th>
            <th>hot_switch</th>
            <th>cold_switch</th>
            <th>setpoint</th>
          </tr>
        </thead>
        <tbody>{TempList()}</tbody>
      </table>
    </div>
  )
}

export default Home
