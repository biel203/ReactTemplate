import { fromJS } from 'immutable';

import {
  FETCH_DATALIST,
  FETCH_DATALIST_SUCCESS,
  FETCH_DATALIST_ERROR,
  CLEAR_ERROR,
  SYSTEM_ERROR,
} from './constants';


// The initial state of the App
const initialState = fromJS({
  loading: true,
  alerts: {
    type: null,
    title: null,
    message: null
  },
  dataList: {
    content: [],
    total: 0
  }
});

function appReducer(state = initialState, action) {

  switch (action.type) {
    case FETCH_DATALIST: {
      return state
        .set('loading', true);
    }

    case FETCH_DATALIST_SUCCESS: {
      return state
        .set('loading', false)
        .set('dataList', fromJS(action.value));
    }

    case FETCH_DATALIST_ERROR: {
      return state
        .set('alert', fromJS({
          type: null,
          title: null,
          message: null,
        }));
    }

    case CLEAR_ERROR:
      return state
        .set('alerts', fromJS({
          type: null,
          title: null,
          message: null,
        }));

    case SYSTEM_ERROR:
      return state
        .set('loading', false)
        .set('alerts', fromJS({
          type: 'error',
          title: 'Erro de sistema!',
          message: action.value,
        }));

    default:
      return state;
  }
}

export default appReducer;
