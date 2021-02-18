import React from 'react';
import {Collapse} from 'antd';

const {Panel} = Collapse;

export const ValidationInfo = props => {
  return (
    <Collapse>
      <Panel header="Validation information" key="1">
        <p>Last validation date: {props.info.date}</p>
        <p>Items found: {new Intl.NumberFormat('ru-RU').format(props.info.items)}</p>
        <p>Columns found: {props.info.columns}</p>
        <p>Columns list: {props.info.columns_list.join(', ')}</p>
      </Panel>
    </Collapse>
  )
}