import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import AppPage from './App';

import {
  makeSelectAlerts,
  makeSelectDataList,
  makeSelectLoading,
} from './selectors';

import {
  clearError,
  fetchDataList
} from './actions';
import reducer from './reducer';

const mapDispatchToProps = (dispatch) => ({
  getDataList: () => dispatch(fetchDataList()),
  clearError: () => dispatch(clearError()),
});

const mapStateToProps = createStructuredSelector({
  alerts: makeSelectAlerts(),
  dataList: makeSelectDataList(),
  loading: makeSelectLoading(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });

export default compose(withReducer, withConnect)(AppPage);
export { mapDispatchToProps };
