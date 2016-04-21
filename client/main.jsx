import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import ReservationsContainer from './container.jsx'

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <ReservationsContainer />
    </Provider>,
    document.getElementById('render-target'));
});
