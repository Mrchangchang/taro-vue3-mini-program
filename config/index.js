/*
 * @Author: Mr Chang
 * @Date: 2021-05-01 00:54:05
 * @LastEditTime: 2021-05-21 17:52:17
 * @LastEditors: Mr Chang
 * @Description: 
 * @FilePath: \basis-mini-program\config\index.js
 */
const path = require('path')
const channelInfo = require('./channel')

const config = {
  projectName: 'basis-mini-program',
  date: '2021-5-1',
  designWidth: 750,
  alias: {
    // '@': path.resolve(__dirname, '..', 'src'),
    '@/channel': path.resolve(__dirname, '..', 'src/channel/' + channelInfo.channel),
    '@/assets': path.resolve(__dirname, '..', 'src/channel/' + channelInfo.channel + '/assets'),
    '@/app_style': path.resolve(__dirname, '..', 'src/channel/' + channelInfo.channel + '/app.scss'),
    '@/theme': path.resolve(__dirname, '..', 'src/theme/theme1'),
    '@/diff': path.resolve(__dirname, '..', 'src/config/diff'),
  },
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist/' + channelInfo.channel,
  plugins: [],
  defineConstants: {
    ASSETS_PATH: JSON.stringify('channel/'+channelInfo.channel+'/assets'),
    MAIN_COLOR: JSON.stringify('#000000'),
    PAGE_MANAGE: JSON.stringify( 'pages/manage/index'),
    DEV_TITLE: JSON.stringify('开发')
  },
  copy: {
    patterns: [
      {
        from: 'config/' + channelInfo.channel + '/project.config.json',
        to: 'dist/' + channelInfo.channel + '/project.config.json'
      }
    ],
    options: {
    }
  },
  framework: 'vue3',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  let envConfig
  if (process.env.NODE_ENV === 'development') {
    envConfig = require('./dev')
  } else {
    envConfig = require('./prod')
  }
  const mergeCofig = merge({}, config, envConfig, require('./' + channelInfo.channel + "/config"))
  Object.entries(mergeCofig.defineConstants).forEach(([key, value]) => {
    global[key] = JSON.parse(value)
  })
  return mergeCofig
}
