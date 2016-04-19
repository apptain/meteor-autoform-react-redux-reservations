//AutoForm hooks are not firing so we'll just read the form with jquery
//Downstream our action gets called which will validate the submit same as autoform

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

//Thanks for help reading the form with jquery http://stackoverflow.com/questions/1184624/convert-form-data-to-javascript-object-with-jquery
Template.ReservationForm.events({
  'submit form': function (e, template) {
    var doc = {};
    var form = $(e.target);

    form.serializeArray().map(function(x){doc[x.name] = x.value;});
    var reservation = {
      _id: guid(),
      dateTime: doc.dateTime,
      partyName: doc.partyName,
      partyNumber: parseInt(doc.partyNumber),
      status: 'Pending',
      dateCreated: new Date()
    }

    //TODO Only validate in reducer
    var context = this.schema.newContext();

    if(context.validate(reservation)){
      Template.instance().data.submit(reservation);
      form[0].reset();
    }
  }
});
