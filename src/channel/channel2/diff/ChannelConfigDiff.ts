/*
 * @Author: Mr Chang
 * @Date: 2021-05-21 10:06:39
 * @LastEditTime: 2021-05-23 00:22:00
 * @LastEditors: Mr Chang
 * @Description: 
 * @FilePath: \basis-mini-program\src\channel\channel2\diff\ChannelConfigDiff.ts
 */
import Taro from "@tarojs/taro";
import { PAGE_MANAGE } from "global";

const dev = {
  dev: {
    items: {
      item1: {
        img: require('@/assets/java.png'),
        txt: 'Java',
        onItemClick: () => {
          toPage('Java', require('@/assets/java.png'))
        }
      },
      item2: {
        img: require('@/assets/jsx.png'),
        txt: 'JSX',
        onItemClick: () => {
          toPage('JSX', require('@/assets/jsx.png'))
        }
      },
      item5: null,
      item8: {
        onItemClick: () => {
          Taro.switchTab({url: '/'+PAGE_MANAGE})
        }
      }
    }
  }
}

function toPage(title, img) {
  Taro.navigateTo({url: '/pages/devInfo/index?title=' + title + '&img=' + img})
}

export default (config, merge) => {
  return merge([{}, config, dev])
}
