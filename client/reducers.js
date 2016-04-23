import _ from 'lodash';

const initialState = {
  reservations: [],
  reservationCreateErrors: [],
  formResetting: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'RESERVATION_CREATE':
      return Object.assign({}, state, {
        reservations: [...state.reservations, action.reservation],
        formResetting: true
      });
    case 'RESERVATION_CREATE_ERROR':
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
    case 'FORM_RESET':
      return Object.assign({}, state, {
        formResetting: false
      });
    default:
      return state;
  }
};
