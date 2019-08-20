
import {
  FETCH_DATALIST,
  FETCH_DATALIST_SUCCESS,
  FETCH_DATALIST_ERROR,
  CLEAR_ERROR,
  SYSTEM_ERROR
} from './constants';

import axios from 'axios'

import { request } from '../../config'
import datalistJSON from '../../../dataTemplate.json'

/**
 * Alimenta as propriedades iniciais do sistema, essa ação é executada apenas para armazenar essas informações.
 *
 * @param {object} initialProperties Objeto com as informações iniciais do projeto
 * @return {object} Objeto de ação do tipo INITIAL_PROPERTIES
 */
export const fetchDataList = () => async (dispatch) => {
  dispatch(fetchList);
  try {
    console.log('REQUISITANDO DATALIST')
    const info = await axios.get(`${request.dataList}`)

    if (info.status === 200) {
      dispatch(fetchDataListSuccess(info.data.data));
    } else {
      throw new Error(info.message);
    }
  } catch (e) {
    dispatch(fetchDataListSuccess(datalistJSON.data))
    dispatch(systemError(e.message));
  }
};

export const fetchList = () => {
  return {
    type: FETCH_DATALIST,
  };
}

export const fetchDataListSuccess = (value) => {
  return {
    type: FETCH_DATALIST_SUCCESS,
    value
  };
}

export const fetchDataListError = (value) => {
  return {
    type: FETCH_DATALIST_ERROR,
    value
  };
}

export const clearError = () => {
  return {
    type: CLEAR_ERROR
  };
}

export const systemError = (value) => {
  return {
    type: SYSTEM_ERROR,
    value
  };
}
