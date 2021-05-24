<!--
 * @Author: Mr Chang
 * @Date: 2021-05-12 16:45:29
 * @LastEditTime: 2021-05-20 16:43:02
 * @LastEditors: Mr Chang
 * @Description: 
 * @FilePath: \basis-mini-program\src\basis\pages\login\login.vue
-->
<template>
  <view class="index">
    <image class="navImage" src="../../../assets/img/home/pic_bj@2x.png" />
    <CustomTitle :titleMsg='titleMsg' :isloginPage='isloginPage' />
    <view class="personel-wrapper">
      <view class="login-wrapper">
        <view class="x-flex-center login-header">
          <image class="login-header-icon" src="../../static/images/home/pic01.png"></image>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import CustomTitle from '@/basis/components/common/CustomTitle.vue'

export default defineComponent({
  name: 'login',
  components: {
    CustomTitle
  },
  setup() {
    const titleMsg = ref('')
    const isloginPage = ref(true)
    return {
      titleMsg,
      isloginPage
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
