import { fromJS } from 'immutable';

import {
  CHANGE_FILTER
} from './constants';

// The initial state of the App
const initialState = fromJS({
  filterInput: ''
});

function appReducer(state = initialState, action) {

  switch (action.type) {
    case CHANGE_FILTER:
      return state.set('filterInput', action.value)

    default:
      return state;
  }
}

export default appReducer;
