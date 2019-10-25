import React, { Component } from 'react';
import '../App.css';
import Login from '../components/Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      register: false
    }
  }
  render() {
    return (
      <div>
        <Login />

        <div>
          <form>
            <fieldset>

            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}

export default App;
