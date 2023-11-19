import { Collapse } from 'antd';
import { useState } from "react";
import './index.css'

const { Panel } = Collapse;

export default function Accordion() {
  const [flag,setFlag] = useState(true)
  const handleMouseEnter  = (e) => {
    console.log(e.target);
    setFlag(!flag)
    console.log(flag);
  }
  return (
    <Collapse accordion defaultActiveKey={1}  style={{display:"flex",justifyContent:"center"}}>
      <Panel 
        showArrow={false}
        key="1"
        style={{
          display:"flex",
          height:"270px",
          backgroundImage:`url(${process.env.PUBLIC_URL + '/jianbinpeixun.jpg'})`,
          backgroundRepeat:"no-repeat"
        }}>
        <div style={{
          width:"660px",
          height:"270px", 
          margin:"-16px -16px 0 -16px",
          backgroundImage:`url(${process.env.PUBLIC_URL + '/jianbinpeixun_long.jpg'})`,
          backgroundRepeat:"no-repeat"
        }}/>
      </Panel>
      <Panel 
        showArrow={false} 
        key="2"
        style={{
          display:"flex",
          height:"270px",
          backgroundImage:`url(${process.env.PUBLIC_URL + '/jianbinpeixun.jpg'})`,
          backgroundRepeat:"no-repeat"
        }}>
        <div style={{
          width:"660px",
          height:"270px", 
          margin:"-16px -16px 0 -16px",
          backgroundImage:`url(${process.env.PUBLIC_URL + '/jianbinpeixun_long.jpg'})`,
          backgroundRepeat:"no-repeat"
        }}/>
      </Panel>
      <Panel 
        showArrow={false} 
        key="3"
        style={{
          display:"flex",
          height:"270px",
          backgroundImage:`url(${process.env.PUBLIC_URL + '/jianbinpeixun.jpg'})`,
          backgroundRepeat:"no-repeat"
        }}>
        <div style={{
          width:"660px",
          height:"270px", 
          margin:"-16px -16px 0 -16px",
          backgroundImage:`url(${process.env.PUBLIC_URL + '/jianbinpeixun_long.jpg'})`,
          backgroundRepeat:"no-repeat"
        }}/>
      </Panel>
    </Collapse>

    // <div style={{ width: "1260px",
    //               height: "270px",
    //               margin: "50px auto",
    //               border: "1px solid red",
    //               position:"relative",
    //               overflow:"hidden"
    //             }}>
    //       <ul style={{position:"absolute",width:"1980px",listStyle:"none"}}>
    //         <li className="list" 
    //             style={{ 
    //               // TODO图片位置写法
    //               backgroundImage:`url(${process.env.PUBLIC_URL + '/jianbinpeixun.jpg'})`,
    //             }} onMouseEnter={handleMouseEnter}></li>
    //         <li className="list_long" 
    //             style={{ 
    //               backgroundImage:`url(${process.env.PUBLIC_URL + '/jianbinpeixun_long.jpg'})`
    //             }}></li>
    //         <li className="list" 
    //             style={{ 
    //               marginLeft: flag ? "-660px" : "0px",
    //               backgroundImage:`url(${process.env.PUBLIC_URL + '/jianbinpeixun.jpg'})`,
    //             }} onMouseEnter={handleMouseEnter}></li>
    //         <li className="list_long" 
    //             style={{ 
    //               backgroundImage:`url(${process.env.PUBLIC_URL + '/jianbinpeixun_long.jpg'})`
    //             }}></li>
    //         <li className="list" 
    //             style={{ 
    //               marginLeft: flag ? "-660px" : "0px",
    //               backgroundImage:`url(${process.env.PUBLIC_URL + '/jianbinpeixun.jpg'})`,
    //             }} onMouseEnter={handleMouseEnter}></li>
    //         <li className="list_long" 
    //             style={{ 
    //               backgroundImage:`url(${process.env.PUBLIC_URL + '/jianbinpeixun_long.jpg'})`,
    //             }}></li>
    //         {/* {
    //           img.map(()=>{
    //               // <li style={backgroundImage:"url(images/" + i + ".jpg)"}></li>
    //               return (<li style={{
    //                             width: "660px",
    //                             height: "270px",
    //                             float:"left",
    //                             backgroundImage:`url(${process.env.PUBLIC_URL + '/jianbinpeixun_long.jpg'})`
    //                           }} onMouseEnter={handleMouseEnter}></li>
    //               )
    //           })
    //         } */}
    //     </ul>
    // </div>
  )
}