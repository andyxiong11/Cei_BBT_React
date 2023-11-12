// 参考 https://juejin.cn/post/7063829866378068005#heading-13

import React,{useRef,useEffect} from 'react'
// 引入echarts
import * as echarts from 'echarts';
import { MapChart } from 'echarts/charts';

// 引入阿里云下载的中国地图的数据 https://datav.aliyun.com/portal/school/atlas/area_selector
import { geoJson } from "./geojson";
import { chinaMapConfig } from "./config";
import { resData } from "./data";

export default function EchartsMap() {
  // 初始化ref状态为null
  const ref = useRef(null);
  let mapInstance = null;

  const renderMap = () => {
    // 通过 echarts.getInstanceByDom 获取 dom 容器上的实例
    const renderedMapInstance = echarts.getInstanceByDom(ref.current);
    if (renderedMapInstance) {
      mapInstance = renderedMapInstance;
    } else {
      // 基于准备好的dom，初始化echarts实例
      mapInstance = echarts.init(ref.current);
    }
    mapInstance.setOption(
      chinaMapConfig({ data: resData.data, max: resData.max, min: 0 })
    );
  };
  // 组件每次渲染时执行
  useEffect(() => {
    echarts.use([MapChart]);
    // 必须在使用 use 方法注册了 MapChart 后才能使用 registerMap 注册地图
    echarts.registerMap('china', {geoJSON:geoJson});
    renderMap();
  }, []);
  useEffect(() => {
    window.onresize = function () {
      mapInstance.resize();
    };
    return () => {
      mapInstance && mapInstance.dispose();
    };
  }, []);
  return (
    <div>
      <div style={{width: "85%",height: "70vh"}} ref={ref}></div>
    </div>
  );
}