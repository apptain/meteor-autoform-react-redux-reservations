import React from 'react';
import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import reservationReducers from './reducers';
import overlayReducers from './overlays/reducers';
import persistState, {mergePersistedState} from 'redux-localstorage';

// dev tools
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

// configure dev tools
const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q' defaultPosition='bottom' defaultIsVisible={false}>
    <LogMonitor theme='tomorrow' preserveScrollTop={false} />
  </DockMonitor>
);

// persistant storage and middleware application
const createPersistentStore = compose(
    persistState(),
    applyMiddleware(thunk),
    DevTools.instrument()
)(createStore);

let reducers = combineReducers({
  reservations: reservationReducers,
  overlays: overlayReducers
});

//the store creation, using createPersistentStore instead createStore
export default createPersistentStore(reducers);

//export default applyMiddleware(thunk)(createStore)(reducers);

