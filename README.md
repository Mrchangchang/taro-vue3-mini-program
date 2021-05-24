# taro-vue3-mini-program
基于taro3 + vue3的小程序分身方案
## 使用方式

修改config/channel.js内的channel字段，该项目可用"channel1"、"channel2"、"channel3"。

Clone代码到本地后，根据Taro官方文档执行编译。或运行package.json中的 
```
"dev:weapp": "npm run build:weapp -- --watch"
```

使用小程序开发工具打开生成的dist_channel1目录（如果channel.js内配置的是channel2，则为dist_channel2目录）
