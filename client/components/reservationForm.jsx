import React, { PropTypes, Component } from 'react';
import { Blaze } from 'meteor/blaze';
import { Template } from 'meteor/templating';
import AutoForm from 'meteor/aldeed:autoform';
  ;
import ReservationSchema from '../schema';

export default class ReservationForm extends Component {
  submit() {

  }
  componentDidMount() {
    const container = this.refs.blazeContainer;

    const data = {
        schema: this.props.schema,
        submit: this.props.reservationCreate
    }

    template = Template['ReservationForm'];
    this.blazeView = Blaze.renderWithData(template, data, container)
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
