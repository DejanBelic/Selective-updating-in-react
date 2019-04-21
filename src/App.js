import React, { Component } from 'react';
import './App.css';
import PageHeader from "./components/PageHeaderShould";

class App extends Component {
  state = {
    text: '',
  };
  render() {
    return (
        <>
          <PageHeader
            headerText="The page"
          />
          <form>
            <div>
              <label htmlFor="text-input">Text:</label>
              <input type="text" id="text-input" value={this.state.text} onChange={e => this.setState({ text: e.target.value})}/>
            </div>
          </form>
          <div>{this.state.text}</div>
      </>
    );
  }
}

export default App;
