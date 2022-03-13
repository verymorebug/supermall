<template>
  <div id = "home">

    <nav-bar class = "home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <tab-control :titles="['流行','新款','精选']"
                 @tabControlClick = "tabControlClick"
                 ref = "tabControlUp" class = "tabControlUp" v-show="isFixed"></tab-control>

    <scroll class="content" ref = "scroll" :probe-type="3"
            @scroll = "contentScroll"
            :pull-up-load ="true"
            @pullingUp = "loadMoreGoods">

      <home-swiper :banners="banners" @swiperImgLoad = "swiperImgLoad"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-fashion-view></home-fashion-view>
      <tab-control :titles="['流行','新款','精选']"
                   @tabControlClick = "tabControlClick"
                   ref = "tabControlDown"></tab-control>
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
import {debounce} from "common/utils";

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

      isShowBackTop:false,
      tabControlOffsetTop:0,
      isFixed:false,
      isPopY:0,
      isNewY:0,
      isSellY:0,

    }

  },

  created() {

    this.getHomeMultiDataMethod();
    this.getHomeGoodsDataMethod('pop');
    this.getHomeGoodsDataMethod('new');
    this.getHomeGoodsDataMethod('sell');

    //不能再create里面操作  可能拿不到元素
    //在home创建的时候就要对scroll进行设定 可滚动高度
    //
    // this.$bus.$on("ItemImgLoad",()=>{
    //
    //     this.$refs.scroll.refresh();
    //
    // })

  },

  mounted() {

    //在home创建的时候就要对scroll进行设定 可滚动高度 在这里使用防抖动函数
    const refresh = debounce(this.$refs.scroll.refresh,50);
    this.$bus.$on("ItemImgLoad",()=>{

      refresh();

    })

  },

  activated() {

    this.$refs.scroll.refresh();
    if(this.currentType == 'pop'){

      this.$refs.scroll.scrollIn(0,this.isPopY,5)

    }

    if(this.currentType == 'new'){

      this.$refs.scroll.scrollIn(0,this.isNewY,5)

    }

    if(this.currentType == 'sell'){

      this.$refs.scroll.scrollIn(0,this.isSellY,5)

    }


  },
  deactivated() {

    if(this.currentType == 'pop'){

      this.isPopY = this.$refs.scroll.scroll.y;

    }

    if(this.currentType == 'new'){

      this.isNewY = this.$refs.scroll.scroll.y;

    }

    if(this.currentType == 'sell'){

      this.isSellY = this.$refs.scroll.scroll.y;

    }

    // console.log(this.isSellY)
    // console.log(this.isPopY)
    // console.log(this.isNewY)


  },
  methods:{

    /*
      监听事件
     */
    //监听轮播图是否加载
    swiperImgLoad() {

      this.tabControlOffsetTop = this.$refs.tabControlDown.$el.offsetTop;  //将tabControl的位置存下来

    },

    //商品目录滚动事件 监听滚动距离
    contentScroll(position){

      //1.监听商品目录是否达到可以显示返回顶部按钮距离
      this.isShowBackTop = position.y < -1000  /*超过-1000就显示回顶部按钮*/

      //2.监听tabControl是否可以浮空显示
      this.isFixed = -position.y > this.tabControlOffsetTop

    },

    //商品上拉加载商品信息事件
    loadMoreGoods(){

      // console.log("尝试加载数据");
      this.getHomeGoodsDataMethod(this.currentType);   //使用加载商品信息方法

    },

    //商品类别监听
    tabControlClick(index){

      this.currentType = this.goodsType[index]
      this.$refs.tabControlUp.currentIndex = index;   //隐藏在上面的精品栏与下面的精品栏 按钮点击下标保持一致
      this.$refs.tabControlDown.currentIndex = index;

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
        // console.log(res.data)
        this.recommends = res.data.recommend.list;

      })

    },
    getHomeGoodsDataMethod(type){

      const page = this.goods[type].page+1;

      getHomeGoodsData(type,page).then(res=>{

        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

      }).then(()=>{

         this.$refs.scroll && this.$refs.scroll.finishPullUpData();//上拉加载完之后 结束 使之后可以继续上拉

      })

    }




  }

}
</script>

<style scoped>

  #home{
    /*padding-top: 78px;*/
    height: 100vh;
    position: relative;

  }

  .home-nav{

    background-color: var(--color-tint);
    color: white;
    /*position: sticky;*/
    /*top:0;*/
    /*z-index: 9;*/

  }

  .content{

    /*height: calc(100% - 93px);*/
    position: absolute;
    top: 43px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;

  }

  .tabControlUp{

    position: relative;
    top: -2px;
    background: white;
    z-index: 9;
  /*使用top:-1px是因为导航栏与tabControl中间还有缝隙*/
  }

</style>
