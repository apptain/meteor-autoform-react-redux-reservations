Meteor/Autoform React/Redux local storage example
-------------------------------

**Requires**
meteor

**Use**
npm install
npm start

**To do**
Add Unit Tests
Add PropTypes to Components
Add filtering
Improve CSS
Create Explanation Video


**To Autoset Reservation Date Time**
Template.ReservationForm.rendered = function () {
  var dateTimePicker = $('[name="dateTime"]');
  dateTimePicker.datetimepicker().val(new Date(2010, 1, 15));
};

