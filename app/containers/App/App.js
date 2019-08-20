import React, { useState } from 'react';
import './style.scss';
import { PropTypes } from 'prop-types';
import { ToastContainer } from 'react-toastr';

import LoadingComponent from '../../components/LoadingIndicator'

import SessionTable from '../SessionTable'

export default class App extends React.PureComponent {// eslint-disable-line react/prefer-stateless-function

  constructor() {
    super()

    this.state = {
      sessionList: [],
      filterText: ''
    }
  }

  async componentDidMount() {
    const { getDataList } = this.props
    await getDataList()
  }

  componentWillReceiveProps(props) {
    if (props.alerts.get('type') && this.alertContainer) {
      this.alertContainer[props.alerts.get('type')](props.alerts.get('message'), props.alerts.get('title'));

      props.clearError();
    }
  }

  renderLoading() {
    return (
      <LoadingComponent />
    )
  }

  render() {
    const { loading, dataList } = this.props;

    return (
      <div className="app-wrapper">
        {
          loading && this.renderLoading()
        }

        <ToastContainer
          // eslint-disable-next-line no-return-assign
          ref={(ref) => this.alertContainer = ref}
          className="toast-top-center"
        />

        <SessionTable />

      </div>
    )
  }
}

App.propTypes = {
  loading: PropTypes.any,
  alerts: PropTypes.object,
  clearError: PropTypes.func,
};
