import React, {PropTypes} from 'react';
import cx from 'classnames';

import Animate from './animate.jsx';

var Overlay = React.createClass({
  propTypes: {
    children: PropTypes.node.isRequired,
    transition: PropTypes.string,
    closable: PropTypes.bool,
    switch: PropTypes.bool,
    onClose: PropTypes.func.isRequired
  },
  getDefaultProps: function(){
    return {
      transition: 'slideUpIn',
      closable: true,
      switch: false
    }
  },
  render: function() {
    debugger;
    return (
      <div className={cx('big-overlay', this.props.switch && 'switched')}>
        <Animate transition='fadeIn'>
          <div className='background'></div>
        </Animate>
        <Animate transition={this.props.transition}>
          <div className='content'>
            {this.props.children}
          </div>
        </Animate>
        {this.renderClose()}
      </div>
    );
  },
  renderClose : function() {
    if (this.props.closable) {
      return (
        <div className='close-button' onClick={this.props.onClose}>
          <i className='material-icons'>close</i>
        </div>
      );
    }
  }
});

export default Overlay;
