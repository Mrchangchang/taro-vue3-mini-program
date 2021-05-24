/*
 * @Author: Mr Chang
 * @Date: 2021-05-01 00:54:05
 * @LastEditTime: 2021-05-23 23:08:50
 * @LastEditors: Mr Chang
 * @Description: 
 * @FilePath: \basis-mini-program\global.d.ts
 */
import './vuex-shim'

declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";

// declare namespace JSX {
//     interface IntrinsicElements {
//         'import': React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>
//     }
// }

declare const process: {
  env: {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd'
    [key: string]: any
  }
}

declare let ASSETS_PATH: string
declare let PAGE_MANAGE: string
declare let MAIN_COLOR: string
declare let DEV_TITLE: string