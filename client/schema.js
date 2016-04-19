import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const ReservationSchema = new SimpleSchema({
  _id: {
    type: String,
    autoform: {
      type: 'hidden'
    }
  },
  dateTime: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'bootstrap-datetimepicker'
      }
    }
  },
  partyName: {
    type: String
  },
  partyNumber: {
    type: Number
  },
  status: {
    type: String,
    autoform: {
      type: 'hidden'
    }
  },
  dateCreated: {
    type: Date,
    autoform: {
      type: 'hidden'
    }
  }
});


export default ReservationSchema;
