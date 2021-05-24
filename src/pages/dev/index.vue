<!--
 * @Author: Mr Chang
 * @Date: 2021-05-21 15:46:02
 * @LastEditTime: 2021-05-21 17:57:26
 * @LastEditors: Mr Chang
 * @Description: 
 * @FilePath: \basis-mini-program\src\pages\dev\index.vue
-->
<template>
  <view class="dev_list">
    <DevItem v-for="(item, index) of devItems" :key="index" :img="item.img" :txt="item.img" :onItemClick="item.onItemClick"></DevItem>
  </view>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import DevItem from '../../components/DevItem.vue'
import {devConfig} from "../../config/MultiChannelConfig"

import "@/theme/dev.scss"

export default defineComponent({
  components: {DevItem},
  setup () {
    const devItems = ref<Array<any>>([])
      for (const item of Object.values(devConfig.items)) {
        item && devItems.value.push(item)
      }
    return {
      devItems
    }
  }
})
</script>

<style>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
