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
    const { selectedButtonId } = this.state;
    return (
      <div className="App">
        <div className="App-buttons">
          <ExpandableButton
            title="Button 1"
            onClick={() => { this.handleButtonClick(1); }}
            selected={selectedButtonId === 1}
            content="button1 content"
          />
          <ExpandableButton
            title="Button 2"
            onClick={() => { this.handleButtonClick(2); }}
            selected={selectedButtonId === 2}
            content={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, repellat.`}

          />
          <ExpandableButton
            title="Button 3"
            onClick={() => { this.handleButtonClick(3); }}
            selected={selectedButtonId === 3}
            content={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, repellat.`}
          />
        </div>
      </div>
    );
  }
}

export default App;
