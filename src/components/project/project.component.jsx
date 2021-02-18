import React from 'react';
import {Row, Col, Card, Tabs, Input, Collapse, Tooltip, Button, Badge} from 'antd';

import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  CheckCircleFilled,
  QuestionCircleOutlined
} from '@ant-design/icons';

const {TabPane} = Tabs;
const {Panel} = Collapse;

export const Project = props => {
  console.log(this.props.project.name)
  console.log(typeof this.props)
  return (
    <Row>
      <Col span={24}>
        <Card title={this.props.project.name} bordered={false} extra={(
          <span>
            <span style={{marginRight: '10px', fontSize: '14px'}}>Status: Active</span>
            <PlayCircleOutlined style={{color: "#52c41a", marginRight: '5px'}}/>
            <PauseCircleOutlined style={{color: "grey", cursor: 'pointer'}}/>
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
                          <Tooltip title="Feed was successfully validated on 01/01/2021">
                            <CheckCircleFilled style={{color: 'green'}}/>
                          </Tooltip>
                        }/>
                      </Col>
                      <Col span={4}>
                        <Button type="primary" size={'medium'} disabled>
                          Primary
                        </Button>
                      </Col>
                    </Row>
                  </Input.Group>
                </Col>
              </Row>
              <Row key="2" style={{marginTop: '10px'}}>
                <Col span={24}>
                  <Collapse>
                    <Panel header="Validation information" key="1">
                      <p>Last validation datge: 01/01/2021</p>
                      <p>Items found: 9 990</p>
                      <p>Columns found: 12</p>
                      <p>Columns list: id, title, description, link, image_link, price, sale_price</p>
                    </Panel>
                  </Collapse>
                </Col>
              </Row>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Badge count={30} style={{backgroundColor: '#52c41a', marginRight: '5px'}} showZero/>
                    Template
                </span>
              }
              key="2">
              Tab 2
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Badge count={4} style={{backgroundColor: '#52c41a', marginRight: '5px'}} showZero/>
                    Rules Sets
                </span>
              }
              key="3">
              Tab 2
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Badge count={0} style={{backgroundColor: '#6f6e6e', marginRight: '5px'}} showZero/>
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