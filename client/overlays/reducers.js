import _ from 'lodash';

const defaultState = [];

export default function overlaysReducer (state = defaultState, action = {}) {
  switch (action.type) {
    case 'OVERLAY_ADD':
      return [...state, {
        id: action.id,
        blur: action.blur,
        component: action.component
      }];
    case 'OVERLAY_REMOVE':
      return _.filter(state, (entry) => {
        return entry.id !== action.id
      });
    default:
      return state;
  }
}
