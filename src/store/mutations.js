import Vue from 'vue'
// 包含n个用于直接更新state的函数的对象模块
import {
  RECEIVE_DATA,
  RECEIVE_BANNER,
  RECEIVE_DETAIL,
  RECEIVE_HOME,
  RECEIVE_NAV
} from './mutation-types'
//这里直接改变状态
export default {
  [RECEIVE_BANNER](state,{banner}){
    state.banner = banner
  },
  [RECEIVE_DATA](state,{data}){
    state.data = data
  },
  [RECEIVE_HOME](state,{home}){
    state.home = home
  },
  [RECEIVE_NAV](state,{result}){
    state.nav = result.nav
  },
}
