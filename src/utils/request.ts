/*
 * @Author: Mr Chang
 * @Date: 2021-05-07 18:27:10
 * @LastEditTime: 2021-05-12 16:44:07
 * @LastEditors: Mr Chang
 * @Description:
 * @FilePath: \basis-mini-program\src\basis\utils\request.ts
 */
import { hideLoading, request, RequestTask, showLoading } from '@tarojs/taro'

type methodType =
  | "OPTIONS"
  | "GET"
  | "HEAD"
  | "POST"
  | "PUT"
  | "DELETE"
  | "TRACE"
  | "CONNECT";

interface Data  <T = any>{
  code: string,
  data: T,
  message: string
}

class AjaxRequest {
  protected service: <T>(option: request.Option) => Promise<Data<T>>
  protected successCode: Array<number> = [200, 201, 204]
  private static _instance: AjaxRequest
  private requestInterceptorsFns: Array<(data: request.Option) => request.Option>
  private responseIntercptorsFns: Array<(data: Data) => Data>
  constructor () {
    this.service = async <T = any>(config: request.Option) => {
      // 拦截请求
      const option = this.requestInterceptorsFns.reduce((config, fn) => fn(config), config)
      const res = await request<Data<T>>(option)
      // 拦截响应
      return this.responseIntercptorsFns.reduce((data, fn) => fn(data ), res as unknown as Data<T>)
    }
    this.interceptorsRequest((requestConfig): request.Option => {

      return requestConfig
    })
    // this.interceptorsResponse()
  }
  public static getInstance (): AjaxRequest {
    this._instance || (this._instance = new AjaxRequest())
    return this._instance
  }
  /**
   * 
   * @param url 请求url
   * @param params 请求参数
   * @param loading 是否显示loading
   * @param config 参考taro文档 Taro.request(option)
   * @returns 
   */
  public async get <T = any>(url: string, params= {}, loading = false, config: request.Option ) {
    // 启用loading
    if (loading) {
      showLoading({title: '加载中...', mask: true})
    }
    const { complete, fail, header, success } = config
    const option = {url, dataType: 'json', method: 'GET' as methodType, data: params, complete, fail, header, success }
    const res = await this.service<Data<T>>(option)
    hideLoading()
    return res 
  }
  /**
   * post 请求
   * @param url 
   * @param data 
   * @param loading 
   * @param stringify 
   * @param config 
   * @returns 
   */
  public async post<T = any> (
    url: string,
    data: any = {},
    loading = false,
    stringify = false,
    config: request.Option 
  ) {
    // 启用loading
    if (loading) {
      showLoading({title: '加载中...', mask: true})
    }
    
    const { complete, fail, header, success } = config
    const option = {url, dataType: 'json', method: 'POST' as methodType, data: data, complete, fail, header , success }
    if (stringify ) {
      option.header = option.header ? option.header : {}
      option.header['content-type'] = 'application/x-www-form-urlencoded'
    }
    const res = await this.service<T>(option)
    hideLoading()
    return res
  }
  /**
   * 自定义请求
   * @param config 
   * @param loading 
   * @returns 
   */
  public async request<T = any> (config: request.Option, loading = false) {
    // 启用loading
    if (loading) {
      showLoading({title: '加载中...', mask: true})
    }
    const res = await this.service<T>(config)
    hideLoading()
    return res
  }
  /**
   * 请求拦截
   */
  protected interceptorsRequest (fn: (cofig: request.Option) => request.Option) {
    this.requestInterceptorsFns.push(fn)
  }
  /**
   * 响应拦截
   */
  protected interceptorsResponse(fn: (data: Data) => Data) {
    this.responseIntercptorsFns.push(fn)
  }
}

export default AjaxRequest.getInstance()