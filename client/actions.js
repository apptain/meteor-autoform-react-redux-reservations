export function reservationCreate(reservation) {
  return {
    type: 'RESERVATION_CREATE',
    reservation: reservation
  };
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
