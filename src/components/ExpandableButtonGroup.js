import React, { Component, PropTypes } from 'react';
// components
import ExpandableButton from './ExpandableButton';
// style
import './ExpandableButtonGroup.scss';

const propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })),
};

const defaultProps = {
  buttons: [{
    title: 'Button 1',
    content: 'Button 1 content',
  }],
};

class ExpandableButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedButtonId: '' };
  }

  handleButtonClick(id) {
    this.setState({ selectedButtonId: id });
  }

  render() {
    const { selectedButtonId } = this.state;
    return (
      <div className="expandable-button-group">
        { this.props.buttons.map((button, index) =>
          <ExpandableButton
            key={index}
            title={button.title}
            onClick={() => { this.handleButtonClick(index); }}
            selected={selectedButtonId === index}
            content={button.content}
          />)
        }
      </div>
    );
  }
}


ExpandableButtonGroup.propTypes = propTypes;
ExpandableButtonGroup.defaultProps = defaultProps;

export default ExpandableButtonGroup;
