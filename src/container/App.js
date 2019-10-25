import React, { Component } from 'react';
import '../App.css';
import Login from '../components/Login/Login.js';
import Register from '../components/Register/Register.js';
import RegisteredFilter from '../components/Register/RegisteredFilter.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      isRegistered: true
    }
  }

  register = () => {
    this.setState({ isRegistered: !this.state.isRegistered })
  }
  render() {
    const {isRegistered} = this.state;
    return (
      <div>
      {isRegistered ? <Login /> : <Register />}
        <RegisteredFilter
        isRegistered={this.state.isRegistered}
        register={this.register} />
      </div>
    )
  }
}

export default App;
