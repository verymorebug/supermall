import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home     = () => import("views/home/Home")
const Classify = () => import("views/classify/Classify")
const Profile  = () => import("views/profile/Profile")
const ShopCart = () => import("views/shopcart/ShopCart")
const Detail   = () => import("views/detail/Detail")

const routes = [
  {
    path:'',
    redirect:'/home',
    meta:{show:true}
  },
  {
    path:'/classify',
    component:Classify,
    meta:{show:true}

  },
  {
    path:'/home',
    component:Home,
    meta:{show:true}
  },
  {
    path:'/profile',
    component:Profile,
    meta:{show:true}
  },
  {
    path:'/shopCart',
    component:ShopCart,
    meta:{show:true}

  },

  {
    path:'/detail/:iid',
    component:Detail,
    meta:{show:false}

  }

]

const router = new VueRouter({
  routes,
  mode:"history",

})

export default router
