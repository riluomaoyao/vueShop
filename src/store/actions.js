// 引入ajax.js中
import {
  reqData,
  reqBanner,
  reqDetail,
  reqHome,
  reqNav,
} from "../api/index";
// 引入mutations-type，因为要触发mutation-type
import {
  RECEIVE_DATA,
  RECEIVE_BANNER,
  RECEIVE_DETAIL,
  RECEIVE_HOME,
  RECEIVE_NAV
} from "./mutation-types";


export default {
  // 接收data的接口
  async getData({commit},cb) {
    const result = await reqData()
    console.log(result);
    if(result.code===0) {
      commit(RECEIVE_DATA, {data:result.data})
      typeof cb==='function' && cb()

    }
  },
  
// 接收首页轮播图片的接口
  //result暴露的是一个对象，对象里面有一个focusList的属性，focusList的是一个数组
  async getBanner({commit},cb) {
    const result = await reqBanner()
    if(result.code===0) {
      commit(RECEIVE_BANNER, {banner:result.focusList})
      typeof cb==='function' && cb()
      
    }
  },
  
//接收detail页数据的接口
//   async getDetail({commit},cb) {
//     const result = await reqDetail()
//     if(result.code===0) {
//       commit(RECEIVE_DETAIL, {})
//       typeof cb==='function' && cb()
//
//     }
//   },

// 接收home页数据的接口
  async getHome({commit},cb) {
    const result = await reqHome()
    console.log(result)
    if(result.code===0) {
      commit(RECEIVE_HOME, {home:result.home})
      typeof cb==='function' && cb()

    }
  },

//返回分类页nav数据
  async getNav({commit},cb) {
    const result = await reqNav()
    console.log(result);
    if(result.code===0) {
      commit(RECEIVE_NAV, {result})
      typeof cb==='function' && cb()

    }
  },

}

