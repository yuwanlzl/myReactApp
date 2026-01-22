import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import 'echarts-wordcloud';

const WordCloud = ({data}) => {
  useEffect(() => {
    // 1. 初始化 ECharts 实例
    const chartDom = document.getElementById('wordcloud-container');
    const myChart = echarts.init(chartDom);

    // 2. 词云数据（格式：{name: 关键词, value: 权重}）
    // const data = [
    //   { name: 'React', value: 100 },
    //   { name: 'Vue', value: 80 },
    //   { name: 'JavaScript', value: 120 },
    //   { name: 'CSS', value: 70 },
    //   { name: 'HTML', value: 60 },
    // ];

    // 3. 配置词云选项
    const option = {
      series: [
        {
          type: 'wordCloud',
          shape: 'circle', // 词云形状（circle、cardioid、diamond 等）
          left: 'center',
          top: 'center',
          width: '100%',
          height: '100%',
          sizeRange: [12, 60], // 字体大小范围
          rotationRange: [0, 0], // 旋转角度范围
          data: data,
          textStyle: {
            color: function () {
              // 使用预设的好看颜色方案
              const colors = [
                '#5470c6', '#91cc75', '#fac858', '#ee6666', 
                '#73c0de', '#3ba272', '#fc8452', '#9a60b4',
                '#ea7ccc', '#2f4554', '#61a0a8', '#d48265',
                '#c23531', '#2f4554', '#61a0a8', '#d48265',
                '#91c7ae', '#749f83', '#ca8622', '#bda29a',
                '#6e7074', '#546570', '#c4ccd3', '#e7e7e7'
              ];
              return colors[Math.floor(Math.random() * colors.length)];
            },
          },
        },
      ],
    };

    // 4. 渲染词云
    myChart.setOption(option);

    // 5. 响应式适配
    window.addEventListener('resize', () => {
      myChart.resize();
    });

    return () => {
      myChart.dispose();
    };
  }, [data]);

  return (
    <div
      id="wordcloud-container"
      style={{ width: '600px', height: '400px', margin: '0 auto' }}
    />
  );
};

export default WordCloud;
