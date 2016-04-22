import {reservationCreate} from '../actionCreators';
import reducer from '../reducers';

const {describe, it} = global;
import {expect} from 'chai';

describe('reservations', () => {
  describe('create', () => {
    it('should reject if date and time is not there', () => {

    });
    it('should reject if party name is not there', () => {

    });
    it('should reject if number of people is not there', () => {

    });
    it('should add successfully created reservation to local storage state', () => {
      const initialState = {count: 0, reservations: []};
      const dateTime = new Date();
      const newState = reducer(initialState,
      {
        type: 'RESERVATION_CREATE',
        addReservation: {
          dateTime: dateTime,
          partyName: 'Joe',
          partyNumber: 5
      }});
      assert.equal(newState, {
        count: 0,
        reservations: [{
          dateTime: dateTime,
          partyName: 'Joe',
          partyNumber: 5
        }]
      });
    });
  });
  describe('fulfill', () => {
    it('should set reservation status to Fulfilled in local storage state', () => {

    });
  });
  describe('cancel', () => {
    it('should set reservation status to Canceled in local storage state', () => {

    });
  });
});
