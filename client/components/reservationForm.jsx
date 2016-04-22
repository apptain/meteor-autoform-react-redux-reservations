import React, { PropTypes, Component } from 'react';
import { Session } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { ReactiveVar } from 'meteor/reactive-var';
import { Blaze } from 'meteor/blaze';
import { Template } from 'meteor/templating';
import AutoForm from 'meteor/aldeed:autoform';
import ReservationSchema from '../schema';
import _ from 'lodash';
import * as BlazeActions from '../blaze/actionCreators';

export default class ReservationForm extends Component {
  componentDidMount() {
    const container = this.refs.blazeContainer;

    var formAction = new ReactiveVar;
    formAction.actions = [];

    var formProps = new ReactiveVar(this.props.form);

    const data = {
      schema: this.props.schema,
      actionDispatcher: formAction,
      props: formProps,
      actions: BlazeActions
    };

    template = Template['ReservationForm'];
    this.blazeView = Blaze.renderWithData(template, data, container);

    //SetTimeout is necessary for Tracker autorun to work
    setTimeout(this.startComputation(formAction, this.props.formSubmit), 0);
  }
  startComputation(formAction,formSubmit) {
    Tracker.autorun(() => {
      if (action = formAction.get()) {
        switch (action.type) {
          case 'FORM_SUBMIT':
            formSubmit(action.doc);
          default:
            throw "Unhandled Action";
        }
      }
    });
  }
  componentWillUnmount() {
    Blaze.remove(this.blazeView)
  }
  render() {
    return (
        <div ref="blazeContainer"></div>
    )
  }
}
