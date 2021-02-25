import React from 'react';
import {
  Layout,
  Menu,
  Breadcrumb,
  Dropdown,
  Avatar,
  Spin
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
      projects_loaded: false,
      projects: [],
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

  componentDidMount() {
    fetch('http://0.0.0.0:3001/projects')
      .then(response => response.json())
      .then(json => this.setState((prevState, prevProps) => {
        return { projects: json.projects, projects_loaded: true }
      }))
  }

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

            {this.state.projects_loaded ?
            <Projects projects={this.state.projects} projectStatusChanger={this.changeProjectStatus}/>
            : <div style={{textAlign: "center", marginTop: "200px"}}>
                <Spin size="large"/>
              </div>}

          </Content>
          <Footer style={{textAlign: 'center'}}>DOT - Dynamic Optimisation Tool ©2018 Performics</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
