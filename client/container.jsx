import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './actionCreators';
import store from './store';

import ReservationsManager from './components/reservationsManager.jsx';
import ReservationSchema from './schema';

import * as overlayActions from './overlays/actionCreators';
import Overlays from './overlays/components/overlays.jsx';
import YoutubeModal from './components/youtubeModal.jsx';

const ReservationsContainer = React.createClass({
  render() {
    return (
      <div>
        <ReservationsManager schema={ ReservationSchema } {...this.props}/>
      </div>
    )
  }
});

// now we connect the component to the Redux store:
var mapStateToProps = function(state){
  //dateTime is a string, so this is is useless for now. autoform datetimepicker passes a string
  //TODO Should be a date,
  //_.orderBy(state.reservations, ['dateTime'], ['desc']);
  return {
    reservations: state.reservations.filteredReservations,
    formResetting: state.reservations.formResetting,
    overlays: state.overlays
  }
};

var mapDispatchToProps = function(dispatch){
  return {
    formSubmit: function(doc) {
      dispatch(overlayActions.overlayAdd(
        'youtube',
        <YoutubeModal />
      ));
      dispatch(actions.reservationCreate(doc));
    },
    formReset: function() {
      dispatch(actions.formReset());
    },
    statusChange: function(status, id) {
      if(status == "Fulfilled") {
        dispatch(actions.reservationFulfill(id));
      }
      if(status == "Canceled") {
        dispatch(actions.reservationCancel(id));
      }
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(ReservationsContainer);

