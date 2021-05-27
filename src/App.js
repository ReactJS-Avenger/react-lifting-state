import logo from './logo.svg';
import './App.css';
import React from 'react';
import B from './B'
import C from './C'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }
  handleChange = (inputtext) => {
    this.setState({text: inputtext})
  }
  render() {
    return(
      <div>
      <B textChange={this.handleChange}/>
      <C text={this.state.text}/>
      </div>
    )
  }
}
export default App
