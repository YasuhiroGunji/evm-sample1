import React, { Component, PropTypes } from "react"
import Header from '../components/Header'

class App extends Component {
  render() {
    const { value, actions } = this.props;
    return (
      <div>
        <Header />
        <h2>count={value}</h2>
        <button onClick={actions.increment}>増加</button>
        <button onClick={actions.decrement}>減少</button>
      </div>
    )
  }
}