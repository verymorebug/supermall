<template>
  <div id = "home">

    <nav-bar class = "home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <scroll class="content" ref = "scroll" :probe-type="3"
            @scroll = "contentScroll"
            :pull-up-load ="true"
            @pullingUp = "loadMoreGoods">

      <home-swiper :banners="banners"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-fashion-view></home-fashion-view>
      <tab-control :titles="['流行','新款','精选']" @tabControlClick = "tabControlClick"></tab-control>
      <goods-list :goods = "goods[currentType].list"></goods-list>

    </scroll>

    <back-top @click.native = "backClick" v-show="isShowBackTop"></back-top>

  </div>
</template>

<script>

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import HomeFashionView from "./childComps/HomeFashionView";
import TabControl from "./childComps/tabControl/TabControl";


import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import BackTop from "components/content/backTop/BackTop";
import GoodsList from "components/content/goods/GoodsList";

import {getHomeMultiData,getHomeGoodsData} from "network/home";

export default {
  name: "Home",
  components:{


    HomeSwiper,
    HomeRecommendView,
    HomeFashionView,
    TabControl,

    GoodsList,
    BackTop,

    NavBar,
    Scroll
  },

  data(){

    return{

      banners:[],
      recommends:[],
      goods:{

        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}

      },
      goodsType:['pop','new','sell'],
      currentType:'pop',

      isShowBackTop:false

    }

  },

  created() {

    this.getHomeMultiDataMethod();
    this.getHomeGoodsDataMethod('pop');
    this.getHomeGoodsDataMethod('new');
    this.getHomeGoodsDataMethod('sell');

  },

  methods:{

    /*
      监听事件
     */
    //商品目录滚动事件 监听滚动距离
    contentScroll(position){

      this.isShowBackTop = position.y < -1000  /*超过-1000就显示回顶部按钮*/

    },

    //商品上拉加载商品信息事件
    loadMoreGoods(){

      console.log("尝试加载数据");
      this.getHomeGoodsDataMethod(this.currentType);   //使用加载商品信息方法

    },

    //商品类别监听
    tabControlClick(index){

      this.currentType = this.goodsType[index]

    },

    //返回顶部按钮监听
    backClick(){

      this.$refs.scroll.scrollIn(0,0,500)

    },

    /*
      网络请求方法
     */
    getHomeMultiDataMethod(){

      getHomeMultiData().then(res=>{

        this.banners = res.data.banner.list;
        console.log(res.data)
        this.recommends = res.data.recommend.list;

      })

    },
    getHomeGoodsDataMethod(type){

      const page = this.goods[type].page+1;

      getHomeGoodsData(type,page).then(res=>{

        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

      }).then(()=>{

        this.$refs.scroll.finishPullUpData();//上拉加载完之后 结束 使之后可以继续上拉

      })

    }




  }

}
</script>

<style scoped>

  #home{

    /*padding-top: 44px;*/
    height: 100vh;

  }

  .home-nav{

    background-color: var(--color-tint);
    color: white;
    position: sticky;
    top:0px;
    z-index: 9;

  }

  .content{

    /*height: calc(100% - 93px);*/
    height: 100%;
    overflow: hidden;

  }

</style>
