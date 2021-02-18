import React from 'react';
import {ValidationInfo} from '../project_info/project_info.component'
import {Row, Col, Card, Tabs, Input, Collapse, Tooltip, Button, Badge} from 'antd';

import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  CheckCircleFilled,
  InfoCircleFilled,
  QuestionCircleOutlined
} from '@ant-design/icons';

const {TabPane} = Tabs;
const {Panel} = Collapse;

export const Project = props => {
  return (
    <Row>
      <Col span={24}>
        <Card title={props.project.name} bordered={false} extra={(
          <span>
            <span style={{marginRight: '10px', fontSize: '14px'}}>Status: Active</span>
            <PlayCircleOutlined
              onClick={props.projectStatusChanger}
              style={props.project.status ? {color: "#52c41a", marginRight: '5px'} : {
                color: "grey",
                marginRight: '5px'
              }}/>
            <PauseCircleOutlined
              style={props.project.status ? {color: "grey", cursor: 'pointer'} : {color: "orange", cursor: 'pointer'}}/>
          </span>
        )}>
          <Tabs defaultActiveKey="1">
            <TabPane
              tab={
                <span>
                  <QuestionCircleOutlined/>
                    Info
                </span>
              }
              key="1">
              <Row key="1">
                <Col span={12}>
                  Data source <br/>
                  <Input.Group size="medium">
                    <Row gutter={8}>
                      <Col span={12}>
                        <Input size="medium" placeholder="https://example.com/feed.csv" suffix={
                          props.project.feed_validation_status ?
                            <Tooltip title={`Feed was successfully validated on ${props.project.validation.date}`}>
                              <CheckCircleFilled style={{color: 'green'}}/>
                            </Tooltip>
                            :
                            <Tooltip title='Last feed validation failed. Please fix th error and try validating again'>
                              <InfoCircleFilled style={{color: 'red'}}/>
                            </Tooltip>
                        }/>
                      </Col>
                      <Col span={4}>
                        <Button type="primary" size={'medium'} disabled={props.project.feed_validation_status}>
                          Primary
                        </Button>
                      </Col>
                    </Row>
                  </Input.Group>
                </Col>
              </Row>
              <Row key="2" style={{marginTop: '10px'}}>
                <Col span={24}>
                  <ValidationInfo info={props.project.validation}/>
                </Col>
              </Row>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Badge count={props.project.templates.length} style={
                    props.project.templates.length > 0 ?
                      {backgroundColor: '#52c41a', marginRight: '5px'} :
                      {backgroundColor: '#6f6e6e', marginRight: '5px'}
                  } showZero/>
                    Template
                </span>
              }
              key="2">
              Tab 2
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Badge count={props.project.rules_sets.length} style={
                    props.project.rules_sets.length > 0 ?
                      {backgroundColor: '#52c41a', marginRight: '5px'} :
                      {backgroundColor: '#6f6e6e', marginRight: '5px'}
                  } showZero/>
                    Rules Sets
                </span>
              }
              key="3">
              Tab 2
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Badge count={props.project.feeds.length} style={
                    props.project.feeds.length > 0 ?
                      {backgroundColor: '#52c41a', marginRight: '5px'} :
                      {backgroundColor: '#6f6e6e', marginRight: '5px'}
                  } showZero/>
                    Feeds
                </span>
              }
              key="4">
              Tab 2
            </TabPane>
          </Tabs>
        </Card>
      </Col>
    </Row>
  )
}