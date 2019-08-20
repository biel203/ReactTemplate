import React, { useState } from 'react';
import './style.scss';

import { Table, Button } from 'react-bootstrap'

import moment from 'moment';

const TableComponent = (prop) => {
  const { dataList = [], onCloseSession } = prop;
  const [activeRow, setActiveRow] = useState('')

  const rowClicked = (evt, keyRow) => {
    console.log('[TableComponent]')
    console.log(evt.currentTarget)

    if (activeRow === keyRow) {
      setActiveRow('')
    } else {
      setActiveRow(keyRow)
    }
    
  }

  const handleClickCloseSession = (evt, userName) => {
    evt.stopPropagation()
    onCloseSession(userName)
  }

  const buildSituationButton = (data, rowkey) => {
    if (activeRow === rowkey) {
      return <a href='#' onClick={(evt) => handleClickCloseSession(evt, data.userName)}>Encerrar Sessão</a>
    }

    return <div className='activeUser'>Usuário Ativo</div>
  }

  return (
    <Table bordered hover >
      <thead className='table-header-component'>
        <tr>
          <th className='th-table-component'>Operador</th>
          <th className='th-table-component'>Abertura de sessão</th>
          <th className='th-table-component'>Fechamento de sessão</th>
        </tr>
      </thead>

      <tbody>
        {
          dataList.map((data, index) => {
            const { userName, startDateTime, endDateTime, situation } = data
            const rowkey = `${userName}/${index + 1} `
            return (
              <tr
                key={rowkey}
                onClick={(evt) => rowClicked(evt, rowkey)}
                className={activeRow === rowkey ? 'activeRow' : ''}
              >

                <td className='td-table-component'>{userName}</td>
                <td className='td-table-component'>{moment(startDateTime).format('DD/MM/YYYY (HH:mm)')}</td>
                <td className='td-table-component'>
                  {
                    !situation ?
                      buildSituationButton(data, rowkey)
                      :
                      <div>{moment(endDateTime).format('DD/MM/YYYY (HH:mm)')}</div>
                  }
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  )
}

export default TableComponent;
