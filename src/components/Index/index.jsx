import React,{useEffect } from "react";
// Layout布局；Row, Col栅格组件；Menu导航菜单；Input输入框；Button按钮；Carousel跑马灯
import { Layout, Row, Col, Menu, Input, Button, Carousel, Affix } from "antd";
import {
  UnorderedListOutlined,
  VerticalAlignTopOutlined,
  QrcodeOutlined,
  FormOutlined,
  PhoneOutlined,
} from "@ant-design/icons"; //TODO新版本antd，按需引入

/* import {Navigation} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; */
// 引入老版本SWIPER
import Swiper from "swiper/swiper-bundle.min.js"
import  "swiper/swiper-bundle.min.css"

import Accordion from '../Accordion'
import Floor from '../Floor'
import EchartsMap from '../EchartsMap'
import {data} from "./data.js"
import "./index.css";

export default function Index() {
  // antd组件
  const { Header, Footer, Content } = Layout;
  const { SubMenu } = Menu;
  const { Search } = Input;
  // 课程优势
  const merit = [
    {
      src:'../../../luoshijichu.png',
      title1:'落实基础',
      title2:'课程优势'
    },
    {
      src:'../../../fencengjiaoxue.png',
      title1:'分层教学',
      title2:'课程优势'
    },
    {
      src:'https://www.cei.net.cn/static/answer.06d5be39.png',
      title1:'效果反馈',
      title2:'课程优势'
    },
    {
      src:'../../../kuozhanzhuanhua.png',
      title1:'拓展转化',
      title2:'课程优势'
    },
    {
      src:'https://www.cei.net.cn/static/report.6d2a09f0.png',
      title1:'专属报告',
      title2:'课程优势'
    }
  ]
  // 顶部轮播图
  const topSlide = [
    {
      num:0,
      src:"https://data.cei.net.cn/images/product/1678758914412.jpg",
      title:"环保书籍"
    },
    {
      num:1,
      src:"https://data.cei.net.cn/images/product/1678859575872.jpg",
      title:"618大促"
    },
    {
      num:2,
      src:"https://data.cei.net.cn/images/product/1685946053778.jpg",
      title:"企业管理"
    },
    {
      num:3,
      src:"https://data.cei.net.cn/images/product/1678783346954.jpg",
      title:"第三方服务"
    },
    {
      num:4,
      src:"https://data.cei.net.cn/images/product/1682565542094.jpg",
      title:"环境执法"
    },
    {
      num:5,
      src:"https://data.cei.net.cn/images/product/1682565562660.jpg",
      title:"西尔课程录制"
    },
    {
      num:6,
      src:"https://data.cei.net.cn/images/product/1654849687735.jpg",
      title:"学习网"
    },
    {
      num:7,
      src:"https://data.cei.net.cn/images/product/1654849878917.jpg",
      title:"新书上架"
    }       
  ]


  useEffect(() => {
    // 头部轮播图
    var topSlideSwiper = new Swiper ('.topSlide_banner', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay : {
        delay : 1000,
      },
      // 分页器
      pagination: {
        el: '.swiper-pagination',
        clickable :true,
        renderBullet: function (index, className) {
          return `<span class=${className}> 
                     <div class='pagination_bottom_con'>${topSlide[index].title} </div>  
                  </span>`;
        }
      },
      // 前进后退按钮
      navigation: {
        nextEl: '.topSlide_swiper_button_nest',
        prevEl: '.topSlide_swiper_button_prev',
      },
      // 滚动条
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // }
    }); 
    // 西尔荣耀轮播图
    var ceiHonorSwiper = new Swiper ('.cei_honor_banner', {
      observer:true,
      observeParents:true,                    
       loop: true,
       loopFillGroupWithBlank: true,
       navigation: {
         nextEl: '.honor_swiper_button_nest',
         prevEl: '.honor_swiper_button_prev',
      },
    });
  });

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
        <Content style={{ marginTop: 64,backgroundColor:"#fff"}}>
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
          {/* {<Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={1}//slider容器能够同时显示的slides数量
              onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          >
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          <SwiperSlide><img
                style={{ width: "100%" }}
                src="https://data.cei.net.cn/images/product/1678758914412.jpg"
              /></SwiperSlide>
          <SwiperSlide><img
                style={{ width: "100%" }}
                src="https://data.cei.net.cn/images/product/1678859575872.jpg"
              /></SwiperSlide>
          <SwiperSlide><img
                style={{ width: "100%" }}
                src="https://data.cei.net.cn/images/product/1685946053778.jpg"
              /></SwiperSlide>
          <SwiperSlide><img
                style={{ width: "100%" }}
                src="https://data.cei.net.cn/images/product/1678783346954.jpg"
              /></SwiperSlide>
          </Swiper>} */}
          {/* <Carousel autoplay>
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
          </Carousel> */}
          <Row style={{justifyContent: "center",alignItems: "center"}}>
              <div className='swiper-container topSlide_banner'>
                <div className='swiper-wrapper'>
                  {
                    topSlide.map((item,index)=>{
                      // console.log("轮播",item);
                      return (
                        <div style={{width:"100%",height:"460px"}} className='swiper-slide'>
                          <img style={{width:"100%",backgroundSize: "cover"}}  src={item.src} alt=""/>
                        </div>
                      )
                    })
                  }
                </div>
                <div className='swiper-pagination'> </div>
                <div className= {'topSlide_swiper_button_nest'}></div>
                <div className= {'topSlide_swiper_button_prev'} ></div>
              </div>  
            </Row>
          {/* 水平手风琴 */}
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
              {
                // TODO暂时未找到遍历对象的实现方法，将data改为数组
                data.map((item)=>{
                  console.log(item);
                  return (
                    <Floor 
                      {...item}
                    />
                  )
                })
              }
          </div>
          <div style={{height: "160px",padding: "15px 0",display:"flex",justifyContent: "center",alignItems:"center"}}>
            <img style={{height:"55px",width: "80vw",maxWidth: "1230px"}} src="https://www.cei.net.cn/static/leiji.70cfcad9.png"/>
          </div>
          {/* 培训数据 */}
          <div>
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
                    }}>培训数据</span>
              <div style={{width:"10px",height:"10px",backgroundColor: "#4aa1f0",marginTop:"30px"}}></div>
            </div>
            {/* 地图 */}
            <EchartsMap></EchartsMap>
          </div>
          {/* 西尔荣誉 */}
          <div>
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
                    }}>西尔荣誉</span>
              <div style={{width:"10px",height:"10px",backgroundColor: "#4aa1f0",marginTop:"30px"}}></div>
            </div>
            {/* 轮播图 */}
            {/* <Carousel autoplay>
              <div >
                <img style={{width:"100%"}} src="https://www.cei.net.cn/static/home_zhengshu1.6f426679.jpg"/>
              </div>
              <div>
                <img style={{width:"100%"}} src="https://www.cei.net.cn/static/home_zhengshu2.6c9d769f.jpg"/>
              </div>
              <div>
                <img style={{width:"100%"}} src="	https://www.cei.net.cn/static/home_zhengshu3.ae3cd6d3.jpg"/>
              </div>
            </Carousel> */}
            <Row style={{justifyContent: "center",alignItems: "center"}}>
              <div className='swiper-container cei_honor_banner'>
                <div className='swiper-wrapper'>
                  <div  className='swiper-slide' style={{padding : "0 100px"}}>
                    <img src="https://www.cei.net.cn/static/home_zhengshu1.6f426679.jpg" alt=""/>
                  </div>
                  <div  className='swiper-slide' style={{padding : "0 100px"}}>
                    <img src="https://www.cei.net.cn/static/home_zhengshu2.6c9d769f.jpg" alt=""/>
                  </div>
                  <div className='swiper-slide' style={{padding : "0 100px"}}>
                    <img src="https://www.cei.net.cn/static/home_zhengshu3.ae3cd6d3.jpg" alt=""/>
                  </div>
                </div>
                <div className= {'honor_swiper_button_nest'}></div>
                <div className= {'honor_swiper_button_prev'} ></div>
              </div>  
            </Row>
          </div>
          {/* 课程优势 */}
          <div style={{
            display:"flex",
            flexDirection:"column",
            // 垂直居中
            alignItems:"center",
            //  水平居中
            justifyContent: "center"}}>
            {/* 标题 */}
            <div style={{height:"40px",
                         margin:"20px auto",
                         textAlign:"center",
                         display:"flex"
                        }}>
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
                    }}>课程优势</span>
              <div style={{width:"10px",height:"10px",backgroundColor: "#4aa1f0",marginTop:"30px"}}></div>
            </div>
            <div style={{width:"80vw",padding:"20px 0",display:"flex",justifyContent:"space-between"}} >
              {
                merit.map((item,index)=>{
                  return (
                    // TODObackgroundSize: "cover"必须写在background中，且用/
                      <div style={{
                        height:"130px",
                        width:"18%",
                        background:`url(${item.src}) center / cover`,
                        color:"#fff",
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        alignItems:"center"}}>
                        <span style={{fontSize: "23px"}}>{item.title1}</span>
                        <span style={{fontSize: "16px"}}>{item.title2}</span>
                      </div>
                  )
                })
              }
            </div>
          </div>
        </Content>
        {/* 底部 */}
        <Footer style={{backgroundColor:"#000",paddingTop: "80px",display:"flex",flexDirection:"column",alignItems:"center" }}>
          <Row gutter={24} style={{maxWidth: "1430px"}} className="a_color_whiter">
            <Col span={6} style={{color:"#fff"}}>
              <p>客服咨询</p>
              <p>服务电话：024-23407031</p>
              <p>在线客服：立即咨询</p>
              <p>服务邮箱：passport@cei.net.cn</p>
              <p>周一至周五：9:00-18:00</p>
            </Col>
            <Col span={12} style={{color:"#fff",width:"auto"}}>  
              <Row type="flex" justify="space-around" gutter={24}>
                <Col style={{color:"#fff"}}>生态环境部及直属单位</Col>
                <Col style={{color:"#fff"}}>各省市服务单位</Col>
              </Row>
              <Row  type="flex" justify="space-between" gutter={24}>
                <a href="http://zfj.mee.gov.cn">生态环境执法局</a>  
                <a href="http://jcs.mee.gov.cn">生态环境监测司</a>  
                <a href="http://rss.mee.gov.cn">行政体制与人事司</a>  
                <a href="http://qhs.mee.gov.cn">应对气候变化司</a>  
                <a href="http://www.cnemc.cn">中国环境监测总站</a>  
                <a href="http://www.chinaeol.net">环保部宣传教育中心</a>  
                <a href="https://yjb.mee.gov.cn/">环境应急与事故调查中心</a>  
                <a href="http://www.cenews.com.cn">中国环境报社</a> 
                <a href="http://www.caep.org.cn/">环境规划院</a>  
                <a href="http://zfj.mee.gov.cn">中国-东盟环境保护合作中心</a> 
                <a href="http://www.edcmep.org.cn">中日友好环境保护中心（环境发展中心）</a> 
                <a href="http://www.prcee.org">环境与经济政策研究中心</a> 
                <a href="http://www.sepact.com">北京会议与培训基地</a>  
                <a href="http://www.bdhetec.com.cn">北戴河环境技术交流中心</a>  
              </Row>
            </Col>
            <Col span={3} style={{color:"#fff"}}>
              <Row>
                <Col style={{color:"#fff"}}>快速入口</Col>
              </Row>
              <Row  style={{flexDirection:"column"}}>
                <a href="http://zfj.mee.gov.cn">个人中心</a>
                <a href="http://jcs.mee.gov.cn">购物车</a>
                <a href="http://rss.mee.gov.cn">我的订单</a>
                <a href="http://qhs.mee.gov.cn">登录/注册</a>
              </Row>
            </Col>
            <Col span={3} style={{color:"#fff"}}>
              <Row>
                <Col style={{color:"#fff"}}>关于我们</Col>
              </Row>
              <Row style={{flexDirection:"column"}}>
                <a href="http://zfj.mee.gov.cn">生态环境执法局</a>
                <a href="http://jcs.mee.gov.cn">生态环境监测司</a>
                <a href="http://rss.mee.gov.cn">行政体制与人事司</a>
                <a href="http://qhs.mee.gov.cn">应对气候变化司</a>
                <a href="http://www.cnemc.cn">中国环境监测总站</a>
              </Row>
            </Col>
          </Row>
          <Row style={{alignItems:"center"}}>
            <Col>
            <a style={{height:"20px",lineHeight:"20px",display: "inline-block"}}>
              <img style={{float:"left"}} src="https://www.cei.net.cn/static/beian_guohui.d0289dc0.png"/>
              <p style={{color: "#939393",float:"left"}}>京公网安备 11010102004423号</p>
            </a>
            
            </Col>
            <Col>
            <a style={{height:"50px",display: "inline-block"}}>
              <img style={{height:"100%",width:"100%"}} src="https://program.xinchacha.com/web/1585481618913452032=*.cei.net.cn.svg"/>
            </a>
            </Col>
          </Row>
        </Footer>

        <div style={{textAlign:"center", background: "#424242",color:"#fff",padding:"5px 0"}} >
            <span>
              Copyright2023 西尔环境教育（CEI）版权所有 主办单位：北京西尔云教育科技有限公司&nbsp;
              <a style={{color:"#1fa2f8"}} href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">京ICP备19011394号-2</a> 
              出版物经营许可证：
              <a style={{color:"#1fa2f8"}} href="/front/cert" target="_blank" rel="noopener noreferrer">新出发京零字第海180213号</a>
            </span>
          </div>

      </Layout>
    </div>
  );
}
