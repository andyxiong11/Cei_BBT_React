import "./index.css";
export default function Floor() {
  const text = [
    '第一集：环境综合服务市场占不住？业务实践大力拓展市场渠道！',
    '第二集：你真的会做管家业务？业务以技术为主，技术以人才为主！',
    '第三集：环保管家如何对待客户？专家给你5大利器！']
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
          <div>
            <img style={{width:"210px",height:"288px",borderRadius: "6px"}} src="https://data.cei.net.cn/images/advertisement/1650421246187.jpg"/>
          </div>
          <div>
            <img style={{width:"210px",height:"288px",borderRadius: "6px"}} src="https://data.cei.net.cn/images/advertisement/1646206522403.jpg"/>
          </div>
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
                {/* TODO每个盒子给百分比宽度,justifyContent:"space-between" */}
                <div style={{width:"31%",height:"240px",position:"relative"}}>
                  <div style={{width: "45px",height: "25px",lineHeight:"25px",textAlign:"center",color:"#fff",backgroundColor: "rgba(0,0,0,.3)",right: "6px",top: "6px",position: "absolute"}}>在线</div>
                  <div>
                    {/* TODO图片给100%宽度，按比例缩放 */}
                    <img style={{width:"100%",borderRadius: "5px"}} src="https://data.cei.net.cn/images/product/1624341234427.jpg"/>
                  </div>
                  <div style={{width: "40px",height: "40px",top: "88px",right:"0px",position: "absolute"}}>
                    <img style={{width:"100%"}} src="../../../jingpin.png"/>
                  </div>
                  <div className="SL" style={{height: "43px",fontSize: "15px",fontWeight: "600",marginTop: "5px"}}>{text[0]}</div>
                  <div>
                    <img src="../../../huo.png"/>
                    1727人已购买
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between"}}>
                    <span>主讲人 西尔</span>
                    <span style={{fontSize: "20px",color: "#f40"}}>￥0</span>
                  </div>
                </div>
                {/* TODO每个盒子给百分比宽度,justifyContent:"space-between" */}
                <div style={{width:"31%",height:"240px",position:"relative"}}>
                  <div style={{width: "45px",height: "25px",lineHeight:"25px",textAlign:"center",color:"#fff",backgroundColor: "rgba(0,0,0,.3)",right: "6px",top: "6px",position: "absolute"}}>在线</div>
                  <div>
                    {/* TODO图片给100%宽度，按比例缩放 */}
                    <img style={{width:"100%",borderRadius: "5px"}} src="https://data.cei.net.cn/images/product/1624341234427.jpg"/>
                  </div>
                  <div style={{width: "40px",height: "40px",top: "88px",right:"0px",position: "absolute"}}>
                    <img style={{width:"100%"}} src="../../../jingpin.png"/>
                  </div>
                  <div className="SL" style={{height: "43px",fontSize: "15px",fontWeight: "600",marginTop: "5px"}}>{text[1]}</div>
                  <div>
                    <img src="../../../huo.png"/>
                    1727人已购买
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between"}}>
                    <span>主讲人 西尔</span>
                    <span style={{fontSize: "20px",color: "#f40"}}>￥0</span>
                  </div>
                </div>
                {/* TODO每个盒子给百分比宽度,justifyContent:"space-between" */}
                <div style={{width:"31%",height:"240px",position:"relative"}}>
                  <div style={{width: "45px",height: "25px",lineHeight:"25px",textAlign:"center",color:"#fff",backgroundColor: "rgba(0,0,0,.3)",right: "6px",top: "6px",position: "absolute"}}>在线</div>
                  <div>
                    {/* TODO图片给100%宽度，按比例缩放 */}
                    <img style={{width:"100%",borderRadius: "5px"}} src="https://data.cei.net.cn/images/product/1624341234427.jpg"/>
                  </div>
                  <div style={{width: "40px",height: "40px",top: "88px",right:"0px",position: "absolute"}}>
                    <img style={{width:"100%"}} src="../../../jingpin.png"/>
                  </div>
                  <div className="SL" style={{height: "43px",fontSize: "15px",fontWeight: "600",marginTop: "5px"}}>{text[2]}</div>
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
              {/* 下部分内容 */}
              <div style={{display:"flex",justifyContent:"space-between"}}>
                {/* TODO每个盒子给百分比宽度,justifyContent:"space-between" */}
                <div style={{width:"48%",position:"relative"}}>
                  <div style={{width: "45px",height: "25px",lineHeight:"25px",textAlign:"center",color:"#fff",backgroundColor: "rgba(0,0,0,.3)",right: "6px",top: "6px",position: "absolute"}}>在线</div>
                  <div>
                    {/* TODO图片给100%宽度，按比例缩放 */}
                    <img style={{width:"100%",height:"100%",orderRadius: "5px"}} src="https://data.cei.net.cn/images/product/1678783456408.jpg"/>
                  </div>
                  <div style={{width: "40px",height: "40px",top: "158px",right:"0px",position: "absolute"}}>
                    <img style={{width:"100%"}} src="../../../jingpin.png"/>
                  </div>
                  <div className="SL" style={{height: "43px",fontSize: "15px",fontWeight: "600",marginTop: "5px"}}>《生态环境综合服务（生态环保管家）及延伸》在线培训班</div>
                  <div>
                    <img src="../../../huo.png"/>
                    1727人已购买
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between"}}>
                    <span>主讲人 西尔</span>
                    <span style={{fontSize: "20px",color: "#f40"}}>￥0</span>
                  </div>
                </div>
                {/* TODO每个盒子给百分比宽度,justifyContent:"space-between" */}
                <div style={{width:"48%",position:"relative"}}>
                  <div style={{width: "45px",height: "25px",lineHeight:"25px",textAlign:"center",color:"#fff",backgroundColor: "rgba(0,0,0,.3)",right: "6px",top: "6px",position: "absolute"}}>在线</div>
                  <div>
                    {/* TODO图片给100%宽度，按比例缩放 */}
                    <img style={{width:"100%",height:"100%",borderRadius: "5px"}} src="https://data.cei.net.cn/images/product/1623823524215.jpg"/>
                  </div>
                  <div style={{width: "40px",height: "40px",top: "158px",right:"0px",position: "absolute"}}>
                    <img style={{width:"100%"}} src="../../../jingpin.png"/>
                  </div>
                  <div className="SL" style={{height: "43px",fontSize: "15px",fontWeight: "600",marginTop: "5px"}}>第三方环保服务业专项技能训练</div>
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
                <div style={{marginBottom: "10px"}}>
                  <div className="SL" style={{height: "50px",lineHeight: "25px",fontSize: ".85rem"}}>
                    生态环境部固体废物与化学品司有关负责人就《关于进一步加强危险废物规范化环境管理有关工作的通知》答记者问
                  </div>
                  <div style={{height: "25px",lineHeight: "25px",fontSize: ".7rem"}}>
                    2023-11-10
                  </div>
                </div>
                <div style={{marginBottom: "10px"}}>
                  <div className="SL" style={{height: "50px",lineHeight: "25px",fontSize: ".85rem"}}>
                    生态环境部固体废物与化学品司有关负责人就《关于进一步加强危险废物规范化环境管理有关工作的通知》答记者问
                  </div>
                  <div style={{height: "25px",lineHeight: "25px",fontSize: ".7rem"}}>
                    2023-11-10
                  </div>
                </div>
                <div style={{marginBottom: "10px",borderBottom: "1px solid #ddd"}}>
                  <div className="SL" style={{height: "50px",lineHeight: "25px",fontSize: ".85rem"}}>
                    生态环境部固体废物与化学品司有关负责人就《关于进一步加强危险废物规范化环境管理有关工作的通知》答记者问
                  </div>
                  <div style={{height: "25px",lineHeight: "25px",fontSize: ".7rem"}}>
                    2023-11-10
                  </div>
                </div>
            </div>
            {/* 下部分 */}
            <div style={{marginTop:"15px",padding:"0 0.5vw"}}>
              <div style={{height: "40px",lineHeight:"40px",textAlign:"center",fontSize: "1rem",fontWeight: "600",display:"flex",justifyContent:"space-between"}}>
                <div style={{width: "7vw"}}>热门问答</div>
                <div style={{width: "7vw"}}>环境法宝</div>
              </div>
              <div style={{height: "50px"}}>电厂冷却用的温排水是否属于清净下水?</div>
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
                <div style={{width:"100%",height: "90px",lineHeight: "22px",fontSize: "12px",backgroundColor:"#fffaf2",overflow:"hidden"}}>
                  在排放标准中，一般不使用“清净下水”这一术语。但在日常环境管理中，一般认为清净下水包括温排水、锅炉循环水等。考虑到这类清净下水通常为循环水，运行中常需加入阻垢剂、杀菌剂、杀藻剂等，可能导致循环水化学需氧量、总磷超标，因此，多数排放标准将此类废水纳入管控范围，要求处理达标后方可排放。
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
          <img style={{height:"100%",width:"49%",borderRadius: "3px"}} src="https://data.cei.net.cn/images/advertisement/1646271226382.jpg"></img>
          <img style={{height:"100%",width:"49%",borderRadius: "3px"}} src="https://data.cei.net.cn/images/advertisement/1646271682744.jpg"></img>
      </div>
    </div>
  )
}