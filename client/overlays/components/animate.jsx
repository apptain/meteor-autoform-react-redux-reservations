import Velocity from 'velocity-animate';
import React, {PropTypes} from 'react';
import {findDOMNode} from 'react-dom';

var Animate = React.createClass({
  propTypes: {
    transition: PropTypes.string,
    duration: PropTypes.number,
    children: PropTypes.node
  },
  getDefaultProps: function(){
    return {
      transition: 'slideUpIn',
      duration: 400
    }
  },
  componentDidMount: function() {
    const dom = findDOMNode(this);
    const transition = 'transition.' + this.props.transition;
    Velocity(doam, transition, {
      duration: this.props.duration,
      display: null
    });
  },
  render: function() {
    return this.props.children;
  }
});
