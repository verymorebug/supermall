import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store"
import toast from "./components/common/toast"
import FastClick from "fastclick"
import VueLazyLoad from "vue-lazyload";

Vue.config.productionTip = false

//事件总线对象
Vue.prototype.$bus = new Vue();

FastClick.attach(document.body);

//1.安装插件
Vue.use(toast);

//1.第一种是用vue-lazyload方式
//Vue.use(VueLazyLoad);
//2.第二种方式
Vue.use(VueLazyLoad,{

  loading:require('assets/img/common/baby.png')

});


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


const id = 10
const car = []

