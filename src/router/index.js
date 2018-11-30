import Vue from 'vue'
import VueRouter from 'vue-router'


const Home =()=>import('../pages/Home/Home.vue')
const Category =() =>import('../pages/Category/Category.vue')
const Identify =() =>import('../pages/Identify/Identify.vue')
const Cart =()=>import('../pages/Cart/Cart.vue')
const Personal =() =>import('../pages/Personal/Personal.vue')

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/identify',
      component:Identify
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/personal',
      component:Personal
    },
    {
      path:'/',
      redirect:'/home'
    },
    
    
    
  ]
  
})
