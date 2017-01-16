import React, { Component } from 'react';
import './App.css';
import ExpandableButton from './components/ExpandableButton';
import ExpandableButtonGroup from './components/ExpandableButtonGroup';

const buttonDefs = [
  {
    title: 'Button 1',
    content: 'Button 1 content',
  },
  {
    title: 'Button 2',
    content: 'Button 2 content',
  },
  {
    title: 'Button 3',
    content: 'Button 3 content',
  },
];

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
            content={'button1 text'}
          />
          <ExpandableButton
            title="Button 2"
            onClick={() => { this.handleButtonClick(2); }}
            selected={selectedButtonId === 2}
            content={'button2 text'}

          />
          <ExpandableButton
            title="Button 3"
            onClick={() => { this.handleButtonClick(3); }}
            selected={selectedButtonId === 3}
            content={'button3 text'}
          />
        </div>
        <ExpandableButtonGroup buttons={buttonDefs} />
      </div>
    );
  }
}

export default App;
