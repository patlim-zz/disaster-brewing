import React, { Component } from "react"
import axios from 'axios';

class CreateUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
    }
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()

    const user = {
      username: this.state.username,
    }

    console.log(user)

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

    this.setState({
      username: "",
    })
  }

  render() {
    return (
      <div>
        <h3>Create new User!</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default CreateUser
