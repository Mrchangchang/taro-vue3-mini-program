<!--
 * @Author: Mr Chang
 * @Date: 2021-05-22 23:53:22
 * @LastEditTime: 2021-05-24 09:56:02
 * @LastEditors: Mr Chang
 * @Description: 
 * @FilePath: \basis-mini-program\src\pages\devInfo\index.vue
-->
<template>
  <view class="container">
    <image class="dev_info_img" :src="img" />
    <view class="dev_padding_view" />
    <text class="main_color_txt">{{ title }}</text>
  </view>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";

import { getCurrentInstance, setNavigationBarTitle } from "@tarojs/taro";

import "@/theme/dev_info.scss";

export default defineComponent({
  setup() {
    const { router } = getCurrentInstance();
    console.log(router);
    onMounted(() => {
      setNavigationBarTitle({ title: router?.params.title || "" });
    });
    return {
      img: router?.params.img,
      title: router?.params.title,
    };
  },
});
</script>
