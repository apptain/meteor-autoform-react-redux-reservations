import _ from 'lodash';

const initialState = {
  reservations: [],
  reservationCreateErrors: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'RESERVATION_CREATE':
      debugger;
      return Object.assign({}, state, {
        reservations: [...state.reservations, action.reservation]
      });
    case 'RESERVATION_CREATE_ERROR':
      debugger;
      return Object.assign({}, state, {
        reservationCreateErrors: action.errors
      });
    case 'RESERVATION_FULFILL':
      var reservations = _.map(state.reservations, function(reservation){
        if(reservation._id == action.id) {
          reservation.status = "Fulfilled";
        }
        return reservation;
      });
      return Object.assign({}, state, {
        reservations: reservations
      });
    case 'RESERVATION_CANCEL':
      var reservations = _.map(state.reservations, function(reservation){
        if(reservation._id == action.id) {
          reservation.status = "Canceled";
        }
        return reservation;
      });
      return Object.assign({}, state, {
        reservations: reservations
      });
    default:
      return state;
  }
};
