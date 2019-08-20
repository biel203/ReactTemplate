import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectAlerts = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('alerts')
);

const makeSelectDataList = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('dataList')
);

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectAlerts,
  makeSelectDataList,
};
