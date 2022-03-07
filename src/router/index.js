import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home     = () => import("views/home/Home")
const Classify = () => import("views/classify/Classify")
const Profile  = () => import("views/profile/Profile")
const ShopCart = () => import("views/shopcart/ShopCart")


const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/classify',
    component:Classify

  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/shopCart',
    component:ShopCart

  }
]

const router = new VueRouter({
  routes,
  mode:"history",

})

export default router
