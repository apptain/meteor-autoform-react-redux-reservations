//Validation should be done in actionCreators
//TODO Changed actions file to actionCreators, but actions should be static values in their own file

import ReservationSchema from './schema';

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

export function reservationCreate(doc) {
  var reservation = {
    _id: guid(),
    dateTime: doc.dateTime,
    partyName: doc.partyName,
    partyNumber: parseInt(doc.partyNumber),
    status: 'Pending',
    dateCreated: new Date()
  }
  var context = ReservationSchema.newContext();
  debugger;
  if (context.validate(reservation)) {
    return {
      type: 'RESERVATION_CREATE',
      reservation: reservation
    };
  } else {
    debugger;
    return {
      type: 'RESERVATION_CREATE_ERROR',
      errors: context
    };
  }
}

export function reservationFulfill(id) {
  return {
      id,
      type: 'RESERVATION_FULFILL'
  };
}

export function reservationCancel(id) {
  return {
    id,
    type: 'RESERVATION_CANCEL'
  };
}
