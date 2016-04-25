import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';

var ReservationStatus = React.createClass({
  statusChange: function(e){
    return this.props.statusChange(e.target.value, e.target.id);
  },
  render: function(){
    debugger;
    return (
      <span>Hello</span>
    );
  }
})

export default ReservationStatus;
