import React, { Component } from 'react';


const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }


  handlePlusButton = () => {
    const Count = this.state.count
    this.setState({ count: Count + 1 })
  }

  handleMinusButton = () => {
    const countminus = this.state.count
    this.setState({ count: countminus - 1 })
  }




  componentDidUpdate() {
    if (this.state.count > 5 || this.state.count < 0) {
      this.setState({ count: 0 })
    }
  }


  render() {
    return (
      <>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </>
    )

  }
}

export default App;
