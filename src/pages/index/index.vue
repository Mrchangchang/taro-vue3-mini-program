<!--
 * @Author: Mr Chang
 * @Date: 2021-05-01 00:54:05
 * @LastEditTime: 2021-05-21 16:15:19
 * @LastEditors: Mr Chang
 * @Description: 
 * @FilePath: \basis-mini-program\src\pages\index\index.vue
-->
<template>
  <view className="index">
    <NumberDisplay/>
    <NumberSubmit/>
    <view>
      <text>Hello, World, </text>
      <text class="main_color_txt">I am {{channel}}</text>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NumberDisplay from '../../components/NumberDisplay.vue'
import NumberSubmit from '../../components/NumberSubmit.vue'

export default defineComponent({
  name: "Index",
  components: {
    NumberDisplay,
    NumberSubmit
  },
  setup () {
    return {channel: process.env.channel}
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
