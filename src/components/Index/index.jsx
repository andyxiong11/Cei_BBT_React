import React from 'react'
// Layout布局；Menu导航菜单；Input输入框；Button按钮
import { Layout,Menu, Breadcrumb,Input,Button  } from 'antd'
import { UnorderedListOutlined } from '@ant-design/icons'; //TODO新版本antd，按需引入
import './index.css'

export default function index() {
  const { Header, Footer, Content } = Layout;
  const { SubMenu } = Menu;
  const { Search } = Input;
  return (
    <div>
      <Layout>
        {/* 头部 */}
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%',backgroundColor:"#fff" }}>
          {/* horizontal 菜单水平
              theme 主题
              defaultSelectedKeys 初始选中的菜单项 key 数组 
              TODO 可以使用flex布局的属性justifyContent居中*/}
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ height: '64px',justifyContent:"center" }}
          >
            <Menu.Item style={{paddingTop:'20px',marginRight:'24px',paddingBottom:'9px'}}>
              <img src='../../../logo.png' alt='加载中' />
            </Menu.Item>
            <SubMenu
              title={
                <span>
                  全部课程
                </span>
              }
              style={{backgroundColor:"#4aa1f0",color:"white"}}
            >
              <Menu.Item key="setting:1">政策法律法规</Menu.Item>
              <Menu.Item key="setting:1">政策法律法规</Menu.Item>
              <Menu.Item key="setting:1">政策法律法规</Menu.Item>
              <Menu.Item key="setting:1">政策法律法规</Menu.Item>
            </SubMenu>
            <UnorderedListOutlined />
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2">图书馆</Menu.Item>
            <Menu.Item key="3">环境法宝</Menu.Item>
            <Menu.Item key="4">名师讲堂</Menu.Item>
            <Menu.Item key="5">热门资讯</Menu.Item>
            <Menu.Item key="6" style={{ width: 200, alignItems:"center !important" }}>
              {/* TODO 输入框没有垂直居中 */}
              <Search
                placeholder="课程、班级、..."
                onSearch={value => console.log(value)}
              />
            </Menu.Item>
            <Menu.Item key="7" >
              <span style={{
                color: "#ffa537",
                textAlign: "center",
                fontSize: "15px",
                fontWeight: 600,
                overflow: "hidden",
                textOverflow: "ellipsis ",
                cursor: "pointer",
            }}>VIP畅学</span></Menu.Item>
            <Menu.Item key="8">
              <img src='../../../download.png' alt='加载中' style={{width:"13px",height:'21PX'}}/>
              <span>下载APP</span>
            </Menu.Item>
            <Menu.Item key="9">
              <img src='../../../xinrenyouli.png' style={{position:"absolute",top:"-2.5px",left:"-2.5px"}}/>
              <span>登录/注册</span>
            </Menu.Item>
            <Menu.Item key="10">
              <Button style={{
                borderRadius: "15px",
                fontSize: "14px",
                backgroundColor: "#1fa2f8",
                color: "#fff",
                cursor: "pointer",
              }}>查询证书</Button>
            </Menu.Item>
          </Menu>
        </Header>
        {/* 内容区 */}
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
        </Content>
        {/* 底部 */}
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  )
}
