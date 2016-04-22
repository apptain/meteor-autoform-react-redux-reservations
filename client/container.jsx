import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import {reservationCreate, reservationFulfill, reservationCancel} from './actionCreators';
import store from './store';

import ReservationsManager from './components/reservationsManager.jsx';
import ReservationSchema from './schema';

const ReservationsContainer = React.createClass({
  render() {
    return (
      <ReservationsManager schema={ ReservationSchema } {...this.props}/>
    )
  }
});

// now we connect the component to the Redux store:
var mapStateToProps = function(state){
  //dateTime is a string, so this is is useless for now. autoform datetimepicker passes a string
  //TODO Should be a date,
  //_.orderBy(state.reservations, ['dateTime'], ['desc']);
  return {
    reservations: state.reservations
  }
};

var mapDispatchToProps = function(dispatch){
  return {
    formSubmit: function(doc) {
      dispatch(reservationCreate(doc))
    },
    statusChange: function(status, id) {
      if(status == "Fulfilled") {
        dispatch(reservationFulfill(id));
      }
      if(status == "Canceled") {
        dispatch(reservationCancel(id));
      }
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(ReservationsContainer);

