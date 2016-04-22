//AutoForm hooks are not firing so we'll just read the form with jquery
Template.ReservationForm.created = function () {
  var instance = this;

  instance.actions = this.data.actions;

  //dispatch and props are passed as ReactiveVar
  instance.props = this.data.props;
  instance.actionDispatcher = this.data.actionDispatcher;
  instance.form = new ReactiveVar(null);

  instance.autorun = function(){
    if(this.props.formClearing == true) {
      this.form[0].reset();
    }
  }
};

Template.ReservationForm.rendered = function () {
  var button = $('.btn-primary');
  button.html("&#10004;");
};

Template.ReservationForm.events({
  'submit form': function (e, template) {
    var doc = {};
    var form = $(e.target);

    form.serializeArray().map(function (x) {
      doc[x.name] = x.value;
    });

    Template.instance().actionDispatcher.set(
      Template.instance().actions.formSubmit(doc)
    );
  }
});
