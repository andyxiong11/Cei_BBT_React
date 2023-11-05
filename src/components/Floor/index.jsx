export default function Floor() {
  const text = ['第一集：环境综合服务市场占不住？业务实践大力拓展市场渠道！',]
  return (
    <div style={{
            width:"1230px",
            // backgroundColor:"pink",
            margin:"50px auto",
            display:"flex"
    }}>
      {/* 上部分 */}
      <div style={{height:"600px",display:"flex"}}>
        {/* 左边图片区 */}
        {/* flexDirection从上到下  */}
        {/* TODO父元素给高度后，justifyContent:"space-between"才有效 */}
        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
          <div>
            <img style={{width:"210px",height:"288px",borderRadius: "6px"}} src="https://data.cei.net.cn/images/advertisement/1650421246187.jpg"/>
          </div>
          <div>
            <img style={{width:"210px",height:"288px",borderRadius: "6px"}} src="https://data.cei.net.cn/images/advertisement/1646206522403.jpg"/>
          </div>
        </div>
        {/* 右边内容区 */}
        <div style={{width:"635px",backgroundColor:"white"}}>
          {/* 企业服务 */}
          <div style={{width:"100%",padding:"0 1vw",display:"flex",flexDirection:"column"}}>
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
            {/* 上部分内容 */}
            <div style={{display:"flex",justifyContent:"space-between"}}>
              {/* TODO每个盒子给百分比宽度,justifyContent:"space-between" */}
              <div style={{width:"31%"}}>
                <div>
                  {/* TODO图片给100%宽度，按比例缩放 */}
                  <img style={{width:"100%",}} src="https://data.cei.net.cn/images/product/1624341234427.jpg"/>
                </div>
                <div style={{height: "45px",textOverflow: "ellipsis"}}>{text[0]}</div>
                <div>
                  <img src="../../../huo.png"/>
                  1727人已购买
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                  <span>主讲人 西尔</span>
                  <span style={{fontSize: "20px",color: "#f40"}}>￥0</span>
                </div>
              </div>
              <div style={{width:"31%"}}>
                <div>
                  <img style={{width:"100%",height:"100%"}} src="https://data.cei.net.cn/images/product/1624341234427.jpg"/>
                </div>
                <div style={{height: "45px"}}>第二集：你真的会做管家业务？业务以技术为主，技术以人才为主！</div>
                <div>
                  <img src="../../../huo.png"/>
                  1727人已购买
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                  <span>主讲人 西尔</span>
                  <span style={{fontSize: "20px",color: "#f40"}}>￥0</span>
                </div>
              </div>
              <div style={{width:"31%"}}>
                <div>
                  <img style={{width:"100%",height:"100%"}} src="https://data.cei.net.cn/images/product/1624341234427.jpg"/>
                </div>
                第三集：环保管家如何对待客户？专家给你5大利器！
                <div>
                  <img src="../../../huo.png"/>
                  1727人已购买
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                  <span>主讲人 西尔</span>
                  <span style={{fontSize: "20px",color: "#f40"}}>￥0</span>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          {/* 右边 */}
          <div>

          </div>
        </div>
      </div>
      {/* 下部分 */}
    </div>
  )
}