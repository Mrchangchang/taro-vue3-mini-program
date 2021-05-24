
/*
 * @Author: Mr Chang
 * @Date: 2021-05-01 00:54:05
 * @LastEditTime: 2021-05-23 23:08:16
 * @LastEditors: Mr Chang
 * @Description: 
 * @FilePath: \basis-mini-program\src\app.config.ts
 */

import { ASSETS_PATH, MAIN_COLOR, PAGE_MANAGE } from "global";

export default {
  pages: [
    'pages/index/index',
    'pages/dev/index',
    'pages/devInfo/index',
    // 'pages/login/login',
    PAGE_MANAGE,
  ],
  window: {
    backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#515151',
    selectedColor: MAIN_COLOR,
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: ASSETS_PATH + '/home_u.png',
        selectedIconPath: ASSETS_PATH + '/home_s.png'
      },{
        pagePath: 'pages/dev/index',
        text: '开发',
        iconPath: ASSETS_PATH + '/dev_u.png',
        selectedIconPath: ASSETS_PATH + '/dev_s.png'
      },{
        pagePath: PAGE_MANAGE,
        text: '管理',
        iconPath: ASSETS_PATH + '/manage_u.png',
        selectedIconPath: ASSETS_PATH + '/manage_s.png'
      }
    ]
  }
}
