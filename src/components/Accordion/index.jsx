import { Row, Col } from 'antd';
import { useState } from "react";
import React, { Component } from 'react'

import './index.css'
import slide_one from '../../../public/shizhanlianbin.jpg'
import slide_two from '../../../public/jianbinpeixun.jpg'
import slide_three from '../../../public/zhishijingsai.jpg'
import slide_long_one from '../../../public/shizhanlianbin_long.jpg'
import slide_long_two from '../../../public/jianbinpeixun_long.jpg'
import slide_long_three from '../../../public/zhishijingsai_long.jpg'

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerData : [
        {num : 1 ,smallImg :slide_two , longImg : slide_long_two},
        {num : 2 ,smallImg :slide_one , longImg : slide_long_one},
        {num : 3 ,smallImg :slide_three , longImg : slide_long_three},
      ]
    }
  }


drawerClick = (index) => {
  let drawArr = this.state.drawerData
  for(var i = 0;i < drawArr.length;i++){
    let docMiddle = document.getElementById(i)
       if(i <=  index){
           docMiddle.animate({left:i*200+"px"},800);
           setTimeout(() => {
             docMiddle.style.left = i*200+'px'
           }, 750)
       }else{
          docMiddle.animate({left:(i+1)*200+400+"px"},800);
          setTimeout(() => {
                 docMiddle.style.left = (i+1)*200+400+'px'
          }, 750);
       }
  }
}

render(){
  let { drawerData } = this.state
    return (
      <div>
      <Row style={{width : "100%",position: "relative",display: "flex",flexDirection: "column",alignItems: "center"}}>
          <div style={{height: "270px",width: '1200px',position:"relative",margin:"30px 0",overflow:"hidden",boxSizing: "border-box"}}>
          {
            drawerData.map((item,index)=>{
              return (
                // 绝对定位
                <div id={index} 
                     style={{position:"absolute",top:"0px",left:"0px",left:index*200 + 'px',zIndex:index*5,boxSizing: "border-box"}}>
                  {/* 浮动定位 */}
                  <div style={{width:"200px",height:"100%",position:"absolute",left:"0px",top:"0px"}} 
                       onMouseOver={()=> this.drawerClick(index)}>
                    <img style={{width:"100%",height:"100%"}} 
                         src={item.smallImg}/>
                  </div>
                  <img style={{width:"100%",height:"270px",paddingLeft:"200px",paddingRight:200*(2-index)+'px'}} 
                       src={item.longImg}/>
                </div>
              )
            })
          }
          </div>
      </Row>
    </div>
    )
}
}



// export default function Accordion() {
//   const [drawerData] = useState([
//     {num : 1 ,smallImg :slide_two , longImg : slide_long_two},
//     {num : 2 ,smallImg :slide_one , longImg : slide_long_one},
//     {num : 3 ,smallImg :slide_three , longImg : slide_long_three},
//   ])
//   function drawerClick(index){
//     for(var i = 0;i < drawerData.length;i++){
//       let docMiddle = document.getElementById(i)
//          if(i <=  index){
//              docMiddle.animate({left:i*200+"px"},800);
//              setTimeout(() => {
//                docMiddle.style.left = i*200+'px'
//              }, 750)
//             //  docMiddle.style.left = i*195+'px'
//          }else{
//             docMiddle.animate({left:(i+1)*200+400+"px"},800);
//             setTimeout(() => {
//                    docMiddle.style.left = (i+1)*200+400+'px'
//             }, 750);
//             // docMiddle.style.left = (i+1)*195+390+'px'
//          }
//     }
//   }
//   return (
//     <div>
//       <Row style={{width : "100%",position: "relative",display: "flex",flexDirection: "column",alignItems: "center"}}>
//           <div style={{height: "270px",width: '1200px',position:"relative",margin:"30px 0",overflow:"hidden",boxSizing: "border-box"}}>
//           {
//             drawerData.map((item,index)=>{
//               return (
//                 // 绝对定位
//                 <div id={index} style={{position:"absolute",top:"0px",left:"0px",left:index*200 + 'px',zIndex:index*5,boxSizing: "border-box"}}>
//                   {/* 浮动定位 */}
//                   <div style={{width:"200px",height:"100%",position:"absolute",left:"0px",top:"0px"}} onMouseOver={()=> drawerClick(index)}>
//                     <img style={{width:"100%",height:"100%"}} src={item.smallImg}/>
//                   </div>
//                   <img style={{width:"100%",height:"270px",paddingLeft:"200px",paddingRight:200*(2-index)+'px'}} src={item.longImg}/>
//                 </div>
//               )
//             })
//           }
//           </div>
//       </Row>
//     </div>
//   )
// }