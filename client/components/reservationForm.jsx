import React, { PropTypes, Component } from 'react';
import { ReactiveVar } from 'meteor/reactive-var';
import serialize from 'form-serialize';

export default class ReservationForm extends Component {
  componentDidMount() {
    const container = this.refs.blazeContainer;
    this.formResetting = new ReactiveVar(this.props.formResetting);
    const data = {
      schema: this.props.schema,
      formSubmit: this.props.formSubmit,
      formResetting: this.formResetting,
      formReset: this.props.formReset,
      serialize: serialize
    };

    template = Template['ReservationForm'];
    this.blazeView = Blaze.renderWithData(template, data, container);
  }
  componentWillUnmount() {
    Blaze.remove(this.blazeView)
  }
  componentWillReceiveProps(props) {
    this.formResetting.set(props.formResetting);
  }
  render() {
    return (
        <div ref="blazeContainer" formResetting={this.props.formResetting}></div>
    )
  }
}
