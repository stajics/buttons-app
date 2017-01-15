import React, { Component } from 'react';
import './App.css';
import ExpandableButton from './components/ExpandableButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedButtonId: 0 };
  }

  handleButtonClick(id) {
    this.setState({ selectedButtonId: id });
  }

  render() {
    return (
      <div className="App">
        <div className="App-buttons">
          <ExpandableButton
            title="Button 1"
            onClick={() => { this.handleButtonClick(1); }}
            selected={this.state.selectedButtonId === 1}
            content="button1 content"
          />
          <ExpandableButton
            title="Button 2"
            onClick={() => { this.handleButtonClick(2); }}
            selected={this.state.selectedButtonId === 2}
            content="button2 content"
          />
          <ExpandableButton
            title="Button 3"
            onClick={() => { this.handleButtonClick(3); }}
            selected={this.state.selectedButtonId === 3}
            content="button3 content"
          />
        </div>
      </div>
    );
  }
}

export default App;
