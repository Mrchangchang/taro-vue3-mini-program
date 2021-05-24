/*
 * @Author: Mr Chang
 * @Date: 2021-05-01 00:54:05
 * @LastEditTime: 2021-05-21 11:23:22
 * @LastEditors: Mr Chang
 * @Description: 
 * @FilePath: \basis-mini-program\src\app.ts
 */
import { createApp } from 'vue'
import store from './store'

// 根据config/index.js alias配置
import '@/app_style'

import './app.scss'



const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(store)

export default App
