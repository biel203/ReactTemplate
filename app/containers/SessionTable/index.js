import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import SessionTable from './SessionTable';

import {
  changeFilter
} from './actions';

import {
  makeSelectSessionList
} from './selectors'

import reducer from './reducer';

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: value => dispatch(changeFilter(value))
});

const mapStateToProps = createStructuredSelector({
  sessionList: makeSelectSessionList()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'sessionTable', reducer });

export default compose(withReducer, withConnect)(SessionTable);
export { mapDispatchToProps };
