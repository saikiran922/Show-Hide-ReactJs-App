// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="btn-container">
          <div>
            <button type="button" onClick={this.onFirstName} className="btn">
              Show/Hide FirstName
            </button>
            {firstName ? (
              <p className="first-last-Name-container">Sai Kiran</p>
            ) : null}
          </div>

          <div>
            <button type="button" onClick={this.onLastName} className="btn">
              Show/Hide LastName
            </button>
            {lastName ? (
              <p className="first-last-Name-container">Vemula</p>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
