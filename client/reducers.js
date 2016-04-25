import _ from 'lodash';

const initialState = {
  filteredReservations: [],
  reservationCreateErrors: [],
  formResetting: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'RESERVATION_CREATE':
      return Object.assign({}, state, {
        filteredReservations: [...state.filteredReservations, action.reservation],
        formResetting: true
      });
    case 'RESERVATION_CREATE_ERROR':
      return Object.assign({}, state, {
        reservationCreateErrors: action.errors
      });
    case 'RESERVATION_FULFILL':
      var filteredReservations = _.map(state.filteredReservations, function(reservation){
        if(reservation._id == action.id) {
          reservation.status = "Fulfilled";
        }
        return reservation;
      });
      return Object.assign({}, state, {
        filteredReservations: filteredReservations
      });
    case 'RESERVATION_CANCEL':
      var filteredReservations = _.map(state.filteredReservations, function(reservation){
        if(reservation._id == action.id) {
          reservation.status = "Canceled";
        }
        return reservation;
      });
      return Object.assign({}, state, {
        filteredReservations: filteredReservations
      });
    case 'FORM_RESET':
      return Object.assign({}, state, {
        formResetting: false
      });
    default:
      return state;
  }
};
