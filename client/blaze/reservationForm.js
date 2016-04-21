//AutoForm hooks are not firing so we'll just read the form with jquery
Template.ReservationForm.created = function () {
  debugger;
  var instance = this;

  instance.actions = this.data.actions;

  //dispatch and props are passed as ReactiveVar
  instance.props = this.data.props;
  instance.actionDispatcher = this.data.actionDispatcher;

  instance.form = new ReactiveVar(null);

  debugger;
  instance.autorun = function(){
    if(this.props.formClearing == true) {
      debugger;
      this.form[0].reset();
    }
  }
};

////Initialize the form reactive var with our form instance on render
////TODO refactor so if template changes it won't break
//Template.ReservationForm.rendered = function () {
//  this.form.set(this.firstNode.nextElementSibling);
//};

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
