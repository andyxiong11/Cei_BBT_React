import { Row, Col } from 'antd';
import { useState } from "react";
import './index.css'
import slide_one from '../../../public/shizhanlianbin.jpg'
import slide_two from '../../../public/jianbinpeixun.jpg'
import slide_three from '../../../public/zhishijingsai.jpg'
import slide_long_one from '../../../public/shizhanlianbin_long.jpg'
import slide_long_two from '../../../public/jianbinpeixun_long.jpg'
import slide_long_three from '../../../public/zhishijingsai_long.jpg'

export default function Accordion() {
  const [drawerData] = useState([
    {num : 1 ,smallImg :slide_two , longImg : slide_long_two},
    {num : 2 ,smallImg :slide_one , longImg : slide_long_one},
    {num : 3 ,smallImg :slide_three , longImg : slide_long_three},
  ])
  function drawerClick(index) {
    for(var i = 0;i < drawerData.length;i++){
      let docMiddle = document.getElementById(i)
         if(i <=  index){
             /* docMiddle.animate({left:i*195+"px"},800);
             setTimeout(() => {
               docMiddle.style.left = i*195+'px'
             }, 750) */
             docMiddle.style.left = i*195+'px'
         }else{
            /* docMiddle.animate({left:(i+1)*195+390+"px"},800);
            setTimeout(() => {
                   docMiddle.style.left = (i+1)*195+390+'px'
            }, 750); */
            docMiddle.style.left = (i+1)*195+390+'px'
         }
    }
  }
  return (
    <div>
      <Row type="flex" justify="center">
          <div style={{height: "270px",width: '1245px',position:"relative",margin:"50px 0",overflow:"hidden"}}>
          {
            drawerData.map((item,index)=>{
              return (
                // 绝对定位
                <div id={index} style={{height:"100%",position:"absolute",left:index*195 + 'px'}}>
                  {/* 浮动定位 */}
                  <div style={{float:"left"}} onMouseOver={()=> drawerClick(index)}>
                    <img src={item.smallImg}/>
                  </div>
                  <img src={item.longImg}/>
                </div>
              )
            })
          }
          </div>
      </Row>
    </div>
  )
}