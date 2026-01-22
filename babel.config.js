module.exports = {
  presets: [
    // 根据你的项目加预设，比如React项目加：
    // '@babel/preset-env',
    // '@babel/preset-react'
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'antd',
        style: true
      }
    ]
  ]
};
