/*
与后台交互模块  mock数据是不需要携带参数的
 */
import ajax from './ajax'

/**
 * 返回data的接口
 */
export const reqData = () => ajax('/data' )

/**
 * 返回首页轮播图片的接口
 */
export const reqBanner = () => ajax('/banner')

/**
 * 返回home页数据的接口
 */
export const reqHome = () => ajax('/home')

/**
 * 返回detail页数据的接口
 */
export const reqDetail = () => ajax('/detail')

/**
 * 返回分类页nav数据
 */
export const reqNav = () => ajax('/nav')



