<!--
 * @Author: Mr Chang
 * @Date: 2021-05-21 16:23:04
 * @LastEditTime: 2021-05-22 23:50:49
 * @LastEditors: Mr Chang
 * @Description: 
 * @FilePath: \basis-mini-program\src\components\DevItem.vue
-->
<template>
  <view class='dev_item_body' @tap="onClick">
        <image class='dev_item_img' :src="img"></image>
        <text class='dev_item_text main_color_txt'>{{txt}}</text>
      </view>
</template>
<script lang="ts">
import { defineComponent, PropType} from 'vue'

import "@/theme/dev_item.scss"

export default defineComponent({
  props: {
    img: String,
    txt: String,
    onItemClick: {
      type: Function as PropType<() => void>,
      required: true
    }
  },
  setup(props) {
    const onClick = () => {
      props.onItemClick()
    }
    return {
      onClick
    }
  }
})
</script>