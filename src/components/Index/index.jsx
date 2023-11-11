import React from "react";
// Layout布局；Row, Col栅格组件；Menu导航菜单；Input输入框；Button按钮；Carousel跑马灯
import { Layout, Row, Col, Menu, Input, Button, Carousel, Affix } from "antd";
import {
  UnorderedListOutlined,
  VerticalAlignTopOutlined,
  QrcodeOutlined,
  FormOutlined,
  PhoneOutlined,
} from "@ant-design/icons"; //TODO新版本antd，按需引入
import Accordion from '../Accordion'
import Floor from '../Floor'
import "./index.css";

export default function index() {
  const { Header, Footer, Content } = Layout;
  const { SubMenu } = Menu;
  const { Search } = Input;
  return (
    <div>
      <Layout>
        {/* 头部 */}
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            backgroundColor: "#fff",
            float: "left",
          }}
        >
          <Row gutter={16} type="flex" justify="center">
            <Col>
              {/* horizontal 菜单水平
              theme 主题
              defaultSelectedKeys 初始选中的菜单项 key 数组 
              TODO 可以使用flex布局的属性justifyContent居中*/}
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={["2"]}
                style={{ height: "64px" }}
              >
                <Menu.Item
                  style={{
                    paddingTop: "20px",
                    marginRight: "24px",
                    paddingBottom: "9px",
                  }}
                >
                  <img src="../../../logo.png" alt="加载中" />
                </Menu.Item>
                <SubMenu
                  title={
                    <span>
                      全部课程
                      <UnorderedListOutlined style={{ marginLeft: "5px" }} />
                    </span>
                  }
                  style={{
                    backgroundColor: "#4aa1f0",
                    color: "white",
                    width: "116px",
                    textAlign: "center",
                  }}
                >
                  <Menu.Item key="setting:1">政策法律法规</Menu.Item>
                  <Menu.Item key="setting:1">政策法律法规</Menu.Item>
                  <Menu.Item key="setting:1">政策法律法规</Menu.Item>
                  <Menu.Item key="setting:1">政策法律法规</Menu.Item>
                </SubMenu>
                <Menu.Item key="1">首页</Menu.Item>
                <Menu.Item key="2">图书馆</Menu.Item>
                <Menu.Item key="3">环境法宝</Menu.Item>
                <Menu.Item key="4">名师讲堂</Menu.Item>
                <Menu.Item key="5">热门资讯</Menu.Item>
              </Menu>
            </Col>
            {/* TODO 解决Search输入框无法垂直居中 */}
            <Col
              style={{ display: "flex", alignItems: "center", width: "200px" }}
            >
              <Search placeholder="课程、班级、..." />
            </Col>
            <Col>
              <span
                style={{
                  color: "#ffa537",
                  textAlign: "center",
                  fontSize: "15px",
                  fontWeight: 600,
                  overflow: "hidden",
                  textOverflow: "ellipsis ",
                  cursor: "pointer",
                }}
              >
                VIP畅学
              </span>
            </Col>
            {/* TODORow全局align="middle" 对imh无效  */}
            <Col style={{ display: "flex", alignItems: "center" }}>
              <img
                src="../../../download.png"
                alt="加载中"
                style={{ width: "13px", height: "21px" }}
              />
              <span>下载APP</span>
            </Col>
            <Col>
              <img
                src="../../../xinrenyouli.png"
                style={{ position: "absolute", top: "8px", left: "-4px" }}
              />
              <span>登录/注册</span>
            </Col>
            <Col>
              <Button
                style={{
                  borderRadius: "15px",
                  fontSize: "14px",
                  backgroundColor: "#1fa2f8",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                查询证书
              </Button>
            </Col>
          </Row>
        </Header>
        {/* 内容区 */}
        <Content style={{ marginTop: 64 }}>
          {/* 图钉 */}
          <Affix offsetTop={400}>
            {/* TODO float:"right" 图钉靠右*/}
            <ul
              style={{
                float: "right",
                width: "60px",
                listStyle: "none",
                color: "#888",
                marginRight:"20px"
              }}
            >
              <li className="li_css">
                <VerticalAlignTopOutlined style={{ fontSize: "30px" }} />
                <span>置顶</span>
              </li>
              <li className="li_css">
                <QrcodeOutlined style={{ fontSize: "30px" }} />
                西尔下载
              </li>
              <li className="li_css">
                <FormOutlined style={{ fontSize: "30px" }} />
                留言板
              </li>
              <li className="li_css">
                <PhoneOutlined style={{ fontSize: "30px" }} />
                西尔客服
              </li>
            </ul>
          </Affix>
          {/* 轮播图 */}
          <Carousel autoplay>
            <div>
              <img
                style={{ width: "100%" }}
                src="https://data.cei.net.cn/images/product/1678758914412.jpg"
              />
            </div>
            <div>
              <img
                style={{ width: "100%" }}
                src="https://data.cei.net.cn/images/product/1678859575872.jpg"
              />
            </div>
            <div>
              <img
                style={{ width: "100%" }}
                src="https://data.cei.net.cn/images/product/1685946053778.jpg"
              />
            </div>
            <div>
              <img
                style={{ width: "100%" }}
                src="https://data.cei.net.cn/images/product/1678783346954.jpg"
              />
            </div>
            <div>
              <img
                style={{ width: "100%" }}
                src="https://data.cei.net.cn/images/product/1682565542094.jpg"
              />
            </div>
            <div>
              <img
                style={{ width: "100%" }}
                src="https://data.cei.net.cn/images/product/1682565562660.jpg"
              />
            </div>
            <div>
              <img
                style={{ width: "100%" }}
                src="https://data.cei.net.cn/images/product/1654849687735.jpg"
              />
            </div>
            <div>
              <img
                style={{ width: "100%" }}
                src="https://data.cei.net.cn/images/product/1654849878917.jpg"
              />
            </div>
          </Carousel>
          <Accordion/>
          {/* <Row type="flex" justify="center">
              <Col>
                <img src="../../../shizhanlianbin.jpg"/>
              </Col>
              <Col>
                <img src="../../../shizhanlianbin_long.jpg"/>
              </Col>
              <Col>
                <img src="../../../jianbinpeixun.jpg"/>
              </Col>
              <Col>
                <img src="../../../zhishijingsai.jpg"/>
              </Col>
          </Row> */}
          {/* 培训专栏 */}
          <div style={{width:"100%"}}>
            {/* 标题 */}
            <div style={{height:"40px",
                         margin:"20px auto",
                         textAlign:"center",
                         display:"flex",
                         // 垂直居中
                         alignItems:"center",
                        //  水平居中
                         justifyContent: "center"}}>
              {/* TODO图片位置写法 */}
              <img src='../../../tree.png' style={{height: "40px",marginRight: "10px"}}/>
              <span style={{height: "40px",
                            lineHeight: "40px",
                            width: "165px",
                            fontSize: "36px",
                            // 两端对齐
                            textAlign: "justify",
                            // 字符间距
                            letterSpacing: "2px",
                    }}>培训专栏</span>
              <div style={{width:"10px",height:"10px",backgroundColor: "#4aa1f0",marginTop:"30px"}}></div>
            </div>
            <Floor/>
            <Floor/>
            <Floor/>
            <Floor/>
          </div>
        </Content>
        {/* 底部 */}
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
}
