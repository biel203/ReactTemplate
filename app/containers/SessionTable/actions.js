import {
    CHANGE_FILTER
  } from './constants';

export const changeFilter = (value) => {
    return {
      type: CHANGE_FILTER,
      value
    };
  }