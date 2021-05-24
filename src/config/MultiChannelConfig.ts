/*
 * @Author: Mr Chang
 * @Date: 2021-05-21 16:56:29
 * @LastEditTime: 2021-05-21 16:56:40
 * @LastEditors: Mr Chang
 * @Description: 
 * @FilePath: \basis-mini-program\src\config\MultiChannelConfig.ts
 */
import merge from 'deepmerge'
import ChannelConfigDiff from '@/diff/ChannelConfigDiff'
//开发页面配置
import DevConfig from './pages/DevConfig'
//合并基本页面配置
const baseConfig = Object.assign({}, DevConfig)
//合并差异页面配置
const config = ChannelConfigDiff(baseConfig, merge.all)
//开发页面最终配置
export const devConfig = config.dev
