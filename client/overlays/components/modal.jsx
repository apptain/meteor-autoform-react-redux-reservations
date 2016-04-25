import React, {PropTypes} from 'react';
import Animate from './animate.jsx';

var Modal = React.createClass({
  propTypes: {
    onClose: PropTypes.func,
    children: PropTypes.node
  },
  close: function(event) {
    event.preventDefault();
    this.props.onClose && this.props.onClose();
  },
  render: function() {
    return (
      <div className='modal'>
        <Animate transition='fadeIn'>
          <div className='modal-background'></div>
        </Animate>
        <Animate>
          <div className='modal-wrapper'>
            <div className='modal-close' onClick={this.props.onClose}>
              <i className='material-icons'>close</i>
              <span>Close</span>
            </div>
            <div className='modal-content-wrapper'>
              {this.props.children}
            </div>
          </div>
        </Animate>
      </div>
    );
  }
})

export default Modal;
