/*
 * @Author: Mr Chang
 * @Date: 2021-05-20 18:31:22
 * @LastEditTime: 2021-05-20 18:31:52
 * @LastEditors: Mr Chang
 * @Description: 
 * @FilePath: \basis-mini-program\src\config\GlobalStyle.ts
 */
import merge from 'deepmerge'
import ChannelStyle from '../channel/channel1/ChannelStyle'

const DefaultStyle = {
  mainColor: '#1afa29',
  tabBar: {
    color: '#515151',
  }
}

const GlobalStyle = merge(DefaultStyle, ChannelStyle);

export default GlobalStyle