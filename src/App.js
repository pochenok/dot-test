import React from 'react'
import {
  Layout,
  Menu,
  Breadcrumb,
  Dropdown,
  Avatar,
} from 'antd';
import {
  UserOutlined
} from '@ant-design/icons';
import { Projects } from './components/projects/projects.component';
import './App.css'

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: 'Project #1',
          status: true,
          feed_link: 'https://pfxtools-dev.ru/feeds/feed.csv',
          feed_validation_status: true,
          validation: {
            'date': '01/01/2021',
            'items': 9999,
            'columns': 10,
            'columns_list': ['id', 'title', 'description', 'link', 'image_link']
          },
          templates: [1,2,3,4,5],
          rules_sets: [],
          feeds: []
        },
        {
          name: 'Project #2',
          status: false,
          feed_link: 'https://pfxtools-dev.ru/feeds/feed.csv',
          feed_validation_status: true,
          validation: {
            'date': '01/01/2021',
            'items': 9999,
            'columns': 10,
            'columns_list': ['id', 'title', 'description', 'link', 'image_link']
          },
          templates: [1,2,3,4],
          rules_sets: [1],
          feeds: []
        },
        {
          name: 'Project #3',
          status: false,
          feed_link: 'https://pfxtools-dev.ru/feeds/feed.csv',
          feed_validation_status: false,
          validation: {
            'date': '01/01/2021',
            'items': 9999,
            'columns': 10,
            'columns_list': ['id', 'title', 'description', 'link', 'image_link']
          },
          templates: [1,2,3,4,5],
          rules_sets: [1,2],
          feeds: [1]
        }
      ],
      collapsed: false,
    };
  }

  changeProjectStatus = (e) => {
    console.log(e)
    // this.setState({})
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({collapsed});
  };

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            3rd menu item
          </a>
        </Menu.Item>
      </Menu>
    );
    const {collapsed} = this.state;

    return (
      <Layout style={{minHeight: '100vh'}}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo"/>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="sub1" icon={<UserOutlined/>} title="DOT">
              <Menu.Item key="3">Projects</Menu.Item>
              <Menu.Item key="4">Library</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<UserOutlined/>} title="Image API">
              <Menu.Item key="5">Templates</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Dropdown overlay={menu} placement="bottomCenter" arrow>
                <Avatar icon={<UserOutlined/>}/>
              </Dropdown>
            </Menu>
          </Header>
          <Content style={{margin: '0 16px'}}>
            <Breadcrumb style={{margin: '16px 0'}}>
              <Breadcrumb.Item>DOT</Breadcrumb.Item>
              <Breadcrumb.Item>Projects</Breadcrumb.Item>
            </Breadcrumb>

            <Projects projects={this.state.projects} projectStatusChanger={this.changeProjectStatus}/>

          </Content>
          <Footer style={{textAlign: 'center'}}>DOT - Dynamic Optimisation Tool ©2018 Performics</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
