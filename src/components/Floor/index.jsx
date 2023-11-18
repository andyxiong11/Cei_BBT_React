import "./index.css";
export default function Floor(props) {
  const {img,courseTop,courseBottom,message,issue,imgBanner} = props
  return (
    <div style={{
            width:"1230px",
            // backgroundColor:"pink",
            margin:"50px auto",
            display:"flex",
            flexDirection:"column"
    }}>
      {/* 上部分 */}
      <div style={{height:"600px",display:"flex"}}>
        {/* 左边图片区 */}
        {/* flexDirection从上到下  */}
        {/* TODO父元素给高度后，justifyContent:"space-between"才有效 */}
        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
          {
            // TODOmap方法报错不能为空，已解决
            img&&img.map((item)=>{
              return (
                <div>
                  <img style={{width:"210px",height:"288px",borderRadius: "6px"}} src={item}/>
                </div>
              )
            })
          }
        </div>
        {/* 右边内容区 */}
        <div style={{width:"63vw",backgroundColor:"white",display:"flex"}}>
          {/* 企业服务 */}
          <div style={{width:"44vw",maxWidth: "700px",padding:"0 1vw",display:"flex",flexDirection:"column"}}>
            {/* 导航 */}
            <div style={{height:"60px",width:"100%",display:"flex",justifyContent:"space-between",alignItems: "center"}}>
              <div style={{display:"flex",alignItems: "center"}}>
                <div style={{width:"10px",height:"10px",backgroundColor:"#1fa2f8"}}></div>
                <div style={{marginLeft: "8px",fontSize: "1rem",letterSpacing: "1px",fontWeight: "600"}}>企业服务</div>
              </div>
              <div style={{width:"23vw",fontSize: ".95rem",display:"flex",justifyContent:"space-between",letterSpacing: "1px",fontWeight: "600"}}>
                <div>推荐</div>
                <div>在线课程</div>
                <div>远程培训班</div>
                <div>面授培训班</div>
              </div>
              <div style={{fontSize: ".82rem",color:"#ccc"}}>更多{'>'}</div>
            </div>
            {/* 内容区 */}
            <div style={{height: "540px",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
              {/* 上部分内容 */}
              <div style={{display:"flex",justifyContent:"space-between"}}>
                {
                  // TODOmap方法报错不能为空，已解决
                  courseTop&&courseTop.map((item)=>{
                    return (
                      // TODO每个盒子给百分比宽度,justifyContent:"space-between"
                      <div style={{width:"31%",height:"240px",position:"relative"}}>
                        <div style={{width: "45px",height: "25px",lineHeight:"25px",textAlign:"center",color:"#fff",backgroundColor: "rgba(0,0,0,.3)",right: "6px",top: "6px",position: "absolute"}}>在线</div>
                        <div>
                          {/* TODO图片给100%宽度，按比例缩放 */}
                          <img style={{width:"100%",borderRadius: "5px"}} src={item.img}/>
                        </div>
                        <div style={{width: "40px",height: "40px",top: "88px",right:"0px",position: "absolute"}}>
                          <img style={{width:"100%"}} src="../../../jingpin.png"/>
                        </div>
                        <div className="SL" style={{height: "43px",fontSize: "15px",fontWeight: "600",marginTop: "5px"}}>{item.title}</div>
                        <div>
                          <img src="../../../huo.png"/>
                          1727人已购买
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                          <span>主讲人 西尔</span>
                          <span style={{fontSize: "20px",color: "#f40"}}>￥0</span>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              {/* 下部分内容 */}
              <div style={{display:"flex",justifyContent:"space-between"}}>
                {
                  // TODOmap方法报错不能为空，已解决
                  courseBottom&&courseBottom.map((item)=>{
                    return (
                      // TODO每个盒子给百分比宽度,justifyContent:"space-between"
                      <div style={{width:"48%",position:"relative"}}>
                      <div style={{width: "45px",height: "25px",lineHeight:"25px",textAlign:"center",color:"#fff",backgroundColor: "rgba(0,0,0,.3)",right: "6px",top: "6px",position: "absolute"}}>在线</div>
                      <div>
                        {/* TODO图片给100%宽度，按比例缩放 */}
                        <img style={{width:"100%",height:"100%",orderRadius: "5px"}} src={item.img}/>
                      </div>
                      <div style={{width: "40px",height: "40px",top: "158px",right:"0px",position: "absolute"}}>
                        <img style={{width:"100%"}} src="../../../jingpin.png"/>
                      </div>
                      <div className="SL" style={{height: "43px",fontSize: "15px",fontWeight: "600",marginTop: "5px"}}>{item.title}</div>
                      <div>
                        <img src="../../../huo.png"/>
                        1727人已购买
                      </div>
                      <div style={{display:"flex",justifyContent:"space-between"}}>
                        <span>主讲人 西尔</span>
                        <span style={{fontSize: "20px",color: "#f40"}}>￥0</span>
                      </div>
                    </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          {/* 热门资讯 */}
          <div style={{width:"18vw",maxWidth: "310px"}}>
            {/* 上部分 */}
            <div style={{height: "295px",}}>
                {/* 标题 */}
                <div style={{height:"60px",width:"100%",display:"flex",justifyContent:"space-between",alignItems: "center"}}>
                  <div style={{display:"flex",alignItems: "center"}}>
                    <div style={{width:"10px",height:"10px",backgroundColor:"#1fa2f8"}}></div>
                    <div style={{marginLeft: "8px",fontSize: "1rem",letterSpacing: "1px",fontWeight: "600"}}>热门资讯</div>
                  </div>
                  <div style={{fontSize: ".85rem"}}>更多{'>'}</div>
                </div>
                {
                  // TODOmap方法报错不能为空，已解决
                  message&&message.map((item)=>{
                    return (
                      <div style={{marginBottom: "10px"}}>
                        <div className="SL" style={{height: "50px",lineHeight: "25px",fontSize: ".85rem"}}>
                          {item}
                        </div>
                        <div style={{height: "25px",lineHeight: "25px",fontSize: ".7rem"}}>
                          2023-11-10
                        </div>
                      </div>
                    )
                  })
                }
            </div>
            {/* 下部分 */}
            <div style={{marginTop:"15px",padding:"0 0.5vw"}}>
              <div style={{height: "40px",lineHeight:"40px",textAlign:"center",fontSize: "1rem",fontWeight: "600",display:"flex",justifyContent:"space-between"}}>
                <div style={{width: "7vw"}}>热门问答</div>
                <div style={{width: "7vw"}}>环境法宝</div>
              </div>
              {/* TODOissue报错不能为空，已解决 */}
              <div style={{height: "50px"}}>{issue&&issue.quesiton}</div>
              <div style={{display:"flex",justifyContent:"space-between"}}>
                <div style={{display:"flex"}}>
                  <div style={{height: "45px",width: "45px"}}>
                    <img style={{width:"100%",height:"100%"}} src="https://data.cei.net.cn/images/headPortrait/icon-1_1.png"/>
                  </div>
                  <div style={{lineHeight:"45px",marginLeft: "7px"}}>金妍</div>
                </div>
                <div style={{lineHeight:"45px",display:"flex"}}>
                  <div>
                    <img src="../../../zan.png"/>
                  </div>
                  <div style={{color: "#ff6253"}}>
                      2
                  </div>
                </div>
              </div>
              <div style={{height: "110px",position:"relative"}}>
                {/* TODOissue报错不能为空，已解决 */}
                <div style={{width:"100%",height: "90px",lineHeight: "22px",fontSize: "12px",backgroundColor:"#fffaf2",overflow:"hidden"}}>
                  {issue&&issue.answer}
                </div>
                {/* TODO需要绝对定位才能使用right：0 */}
                <div style={{color: "#71a8ef",right:"0",position:"absolute"}}>查看</div>
              </div>
              <div style={{height: "25px",display:"flex",justifyContent: "center",alignItems: "center" }}>
                <div style={{lineHeight: "25px",width: "65px",textAlign:"center",border: "1px solid #ccc",borderRadius: "12.5px"}}>
                  更多
                  <span>></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 下部分 */}
      <div style={{height: "200px",display:"flex",justifyContent:"space-between",marginTop:"2vh"}}>
          {/* TODO图片给100%高度，才会按照父盒子高度缩放 */}
          {/* TODO这里不用遍历，会影响flex布局 */}
          {/* TODOimgBanner报错不能为空，已解决 */}
          <img style={{height:"100%",width:"49%",borderRadius: "3px"}} src={imgBanner&&imgBanner[0]}></img>
          <img style={{height:"100%",width:"49%",borderRadius: "3px"}} src={imgBanner&&imgBanner[1]}></img>
      </div>
    </div>
  )
}