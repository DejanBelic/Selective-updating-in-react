import React, { Component } from 'react';
import './App.css';
import PageHeader from "./components/PageHeaderPureComponent";
import ItemList from "./components/ItemList";

class App extends Component {
  state = {
    text: '',
    items: [],
  };

  render() {
    return (
        <>
          <PageHeader
            headerText="The page"
          />
          <ItemList items={this.state.items} />
          <form>
            <div>
              <label htmlFor="text-input">Text:</label>
              <input type="text" id="text-input" value={this.state.text} onChange={e => this.setState({ text: e.target.value})}/>
            </div>
            <button type="button" onClick={() => {

              this.setState({
                items: this.state.items.concat(this.state.text),
                text:'',
              })
            }}>Add item</button>
          </form>
          <div>{this.state.text}</div>
      </>
    );
  }
}

export default App;
