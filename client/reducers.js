import _ from 'lodash';

const initialState = {
  reservations: []
};

export default (state = initialState, action) => {

  switch (action.type) {
    case 'RESERVATION_CREATE':
      return Object.assign({}, state, {
        reservations: [...state.reservations, action.reservation]
      });
    case 'RESERVATION_FULFILL':

      var reservations = _.map(state.reservations, function(reservation){
        debugger;
        if(reservation._id == action.id) {
          debugger;
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
