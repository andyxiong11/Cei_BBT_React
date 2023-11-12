export const chinaMapConfig = (configData) => {
  const { data, max, min } = configData;

  return {
    // 标题
    /* title: {
      text: "数据地图",
      subtext: '数据来源于 xx平台',
      sublink: 'http://www.census.gov/popest/data/datasets.html',
      // 标题位置
      left: "right",
      textStyle: {
        color: "#000"// 主标题文字的颜色
      }
    }, */
    // 提示框
    tooltip: {
      trigger: "item",// 触发类型
      showDelay: 0,// 浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置
      transitionDuration: 0.2,// 提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。
      formatter: function (params) {// 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
        console.log(params);
        let { data = {} } = params;// 第一个参数 `params` 是 formatter 需要的数据集
        let { value = 0 } = data;// 第一个参数 `params` 是 formatter 需要的数据集
        return `${params.name}<br/>
                  个数: ${value}`; // params.name 数据名，类目名
      }
    },
    // 视觉映射组件
    /* visualMap: {
      type: "continuous", // 连续型
      left: "right", // visualMap 组件离容器左侧的距离,值为`'left'`, `'center'`, `'right'`，组件会根据相应的位置自动对齐。
      min: 0,        // 指定允许的最小值
      max: max,      // 指定允许的最大值,这里进行动态设置
      inRange: {     // 定义 **在选中范围中** 的视觉元素
          // 图元的颜色
          // 这里以这数组所填写的颜色点作为基准，形成一种『渐变』的色带，数据映射到这个色带上
          color: [ // 橘色效果
              "#fff",
              "#fedeb5",
              "#f96a35",
              "#c3380e",
              "#942005"
          ]
         // color: [ // 蓝色效果
         //     '#e5f7ff',
         //     '#096dd9',
         // ]
      },
      text: [`最大值：${max}`, 0],  // 两端的文本,如 `['High', 'Low']`
      textStyle: {
          color: "#000" // visualMap 文字的颜色。
      }
    }, */
    // 工具栏
    /* toolbox: {
      show: true,// 是否显示工具栏组件。
      left: "left",// 工具栏组件离容器左侧的距离
      top: "top",
      feature: {
        // dataView: { readOnly: false },// 数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
        restore: {},// 配置项还原
        saveAsImage: {} // 保存为图片
      }
    }, */
    // 数据集组件
/*     dataset: {
      source: data
    }, */
    // 地图主要用于地理区域数据的可视化
    series: {
      // 地图,可以是数组，多个
      label: {// 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
        show: true, //显示省市名称
        position: [1, 100], // 相对的百分比
        fontSize: 12,
        offset: [2, 0],// 是否对文字进行偏移。默认不偏移
        align: "left" // 文字水平对齐方式，默认自动
      },
      itemStyle: {
        areaColor: "#fff" // 地图图形颜色
      },
      type: "map",
      roam: true,
      map: "china",
      zoom: 1.2, // 当前视角的缩放比例
      scaleLimit: {
        max: 2,
        min: 1 // 设置默认缩放效果
      },
      top: "10%", // 距离顶部距离
      data:[
        {
          name: "北京",
          value: 218
        },
        {
          value: 122,
          name: "广东"
        },
        {
          value: 119,
          name: "台湾"
        },
        {
          value: 81,
          name: "香港"
        },
        {
          value: 74,
          name: "山东"
        },
        {
          value: 68,
          name: "江苏"
        },
        {
          value: 62,
          name: "浙江"
        },
        {
          value: 49,
          name: "上海"
        },
        {
          value: 48,
          name: "河北"
        },
        {
          value: 43,
          name: "河南"
        },
        {
          value: 41,
          name: "辽宁"
        },
        {
          value: 38,
          name: "NULL"
        },
        {
          value: 36,
          name: "四川"
        },
        {
          value: 33,
          name: "湖北"
        },
        {
          value: 31,
          name: "湖南"
        },
        {
          value: 29,
          name: "安徽"
        },
        {
          value: 28,
          name: "吉林"
        },
        {
          value: 26,
          name: "江西"
        },
        {
          value: 24,
          name: "新疆"
        },
        {
          value: 24,
          name: "重庆"
        },
        {
          value: 23,
          name: "福建"
        },
        {
          value: 19,
          name: "广西"
        },
        {
          value: 18,
          name: "山西"
        },
        {
          value: 16,
          name: "云南"
        },
        {
          value: 16,
          name: "内蒙古"
        },
        {
          value: 16,
          name: "黑龙江"
        },
        {
          value: 12,
          name: "陕西"
        },
        {
          value: 12,
          name: "天津"
        },
        {
          value: 11,
          name: "宁夏"
        },
        {
          value: 10,
          name: "甘肃"
        },
        {
          value: 8,
          name: "贵州"
        },
        {
          value: 4,
          name: "西藏"
        },
        {
          value: 4,
          name: "青海"
        },
        {
          value: 1,
          name: "海南"
        }
      ]

      // data: [
      //   { name: "内蒙古", value: 1000 },
      //   { name: "北京", value: 700 },
      //   { name: "河北", value: 30 },
      //   { name: "江苏", value: 400 },
      //   { name: "西藏", value: 200 }
      // ],

      // nameMap:{
      //     '内蒙古':'NeiMengGu',
      //     '北京':'Beijing',
      // },

      // nameMap: {
      //   110000: "北京",
      //   130000: "河北",
      //   150000: "内蒙古"
      // },
      // nameProperty: "adcode",
      // data: [
      //   { name: "内蒙古", value: 1000 },
      //   { name: "北京", value: 700 },
      //   { name: "河北", value: 30 }
      // ]
    }
  };
};
