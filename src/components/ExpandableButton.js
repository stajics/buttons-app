import React, { PropTypes } from 'react';
// components
// style
import './ExpandableButton.scss';

const propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  content: PropTypes.string,
  title: PropTypes.string,
};

const defaultProps = {
  onClick: () => {},
  selected: false,
  content: 'Default content',
  title: 'Expandable button',
};

const ExpandableButton = ({ title, selected, content, onClick }) => (
  <div className="expandable-button">
    <button onClick={onClick} className={`button btn ${selected ? 'btn-primary' : 'btn-default'}`}>{title}</button>
    {selected ? <div>{content}</div> : null}
  </div>
);


ExpandableButton.propTypes = propTypes;
ExpandableButton.defaultProps = defaultProps;

export default ExpandableButton;
