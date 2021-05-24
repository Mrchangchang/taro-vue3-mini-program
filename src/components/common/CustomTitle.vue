<!--
 * @Author: Mr Chang
 * @Date: 2021-05-19 16:18:06
 * @LastEditTime: 2021-05-20 11:28:56
 * @LastEditors: Mr Chang
 * @Description: 
 * @FilePath: \basis-mini-program\src\basis\components\common\CustomTitle.vue
-->
<template>
  <view class="vh" :style="{ height: domHeight + 'px' }">
    <view class="titBox" :class="isWhiteBg ? 'whiteBg' : ''">
      <view class="status_bar" :style="{ height: barHeight + 'px' }">
        <!-- 这里是状态栏 -->
      </view>
      <view class="title" :style="{ height: titleHight + 'px' }">
        <view class="backImg" v-if="!isTabPage" @click="back">
          <image :src="require('@/assets/img/home/icon_back@2x.png')"></image>
        </view>
        <text>{{ titleMsg }}</text>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { navigateBack } from "@tarojs/taro";

export default defineComponent({
  props: {
    titleMsg: String,
    isTabPage: {
      type: Boolean,
      default: false,
    },
    isWhiteBg: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const titleHight = ref(0);
    const domHeight = ref(0);
    const barHeight = ref(0);
    const back = () => {
      navigateBack();
    };
    return {
      titleHight,
      domHeight,
      barHeight,
      back,
    };
  },
});
</script>
<style lang="scss">
.vh {
  // height: 128rpx;
  .titBox {
    position: fixed;
    top: 0;
    width: 100%;
    // height: 128rpx;
    z-index: 5;
    .title {
      // height: 88rpx;
      // line-height: 88rpx;
      display: flex;
      padding: 12rpx;
      box-sizing: content-box;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 32rpx;
      position: relative;
      font-weight: bold;
      .backImg {
        position: absolute;
        width: 34rpx;
        height: 100%;
        left: 34rpx;
        line-height: 17px;
        height: 34rpx;
        // top: 26rpx;
        display: flex;
        align-items: center;
        text-align: left;
        image {
          width: 18rpx;
          height: 34rpx;
        }
      }
    }
  }

  .status_bar {
    // height: var(--status-bar-height);
    width: 100%;
  }

  .whiteBg {
    background-color: #ffffff;
  }
}
</style>
