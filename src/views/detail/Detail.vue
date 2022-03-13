<template>

    <div class = "detail">

      <detail-navbar class = "nav-detail" @navItemClick = "navItemClick" ref="detail_navbar"></detail-navbar>

      <scroll class = "content" ref = "detailScroll" :probe-type="3" @scroll = "scrollListener">
        <detail-swiper :top-images="topImages"></detail-swiper>
        <detail-base-info :goods-detail="goodsDetail"></detail-base-info>
        <detail-shop-info :shop-message = "shopMessage"></detail-shop-info>
        <detail-goods-info :goods-show = "goodsShow"
                           @detailGoodsImageLoad = "detailGoodsImageLoad">
        </detail-goods-info>
        <detail-rule-info :goods-params = "goodsParams" ref = "rule"></detail-rule-info>
        <detail-comment-info :comment-message="goodsComment" ref="commend"></detail-comment-info>
        <recommend-goods-list :goods = "goodsRecommend" ref="recommend"></recommend-goods-list>


      </scroll>
      <back-top @click.native = "backClick" v-show="isShowBackTop"></back-top>

      <detail-bottom-bar v-on:addCart = "addCart"></detail-bottom-bar>

    </div>

</template>

<script>

import DetailNavbar from "./childComps/DetailNavbar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailRuleInfo from "./childComps/DetailRuleInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";
import Scroll from "components/common/scroll/Scroll";

import {backTopMixin} from "common/mixin";

import {getShopDetail,getShopDetailRecommend,Goods,Shop,GoodsParam} from "network/detail";
import RecommendGoodsList from "components/content/recommendgoods/RecommendGoodsList";
import GoodsList from "components/content/goods/GoodsList";
import {debounce} from "common/utils";




export default {
  name: "Detail",

  mixins:[backTopMixin],  //混入代码

  components: {
    DetailBottomBar,
    GoodsList,
    RecommendGoodsList,
    DetailRuleInfo,
    DetailBaseInfo,
    DetailSwiper,
    DetailNavbar,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailCommentInfo,

    Scroll

  },
  data(){

    return{

      iid:null,
      shopDetail:{},
      topImages: [],
      goodsDetail:{},    //商品详情信息
      shopMessage:{},     //店铺信息
      goodsShow:{},      //展示商品的信息

      goodsParams:{},      //商品尺码等信息

      goodsComment:{},      //商品评论

      goodsRecommend:[],     //商品推荐
      // isShowBackTop:false,

      themeTopYs:[],          //按键点击后跳转对应的位置
      themeTopY:null,         //获取跳转的位置

    }

  },

  created() {

      this.getShopDetailData();
      this.getShopRecommend();

    // this.themeTopYs = []
    //
    // this.themeTopYs.push(0);
    // this.themeTopYs.push(this.$refs.rule.$el.offsetTop);  在created周期的时候还没有渲染 所以不能通过$refs寻找组件
    // this.themeTopYs.push(this.$refs.commend.$el.offsetTop);
    // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);

    this.themeTopY = debounce(()=>{

      this.themeTopYs = []

      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.rule.$el.offsetTop);
      this.themeTopYs.push(this.$refs.commend.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);


    },100)

  },
  mounted() {

    this.detailGoodsRecommendImgLoad();

    //在mounted周期的时候虽然已经有dom但是有些图片还未加载 所以获得的高度是不正确的
    // this.themeTopYs = []
    //
    // this.themeTopYs.push(0);
    // this.themeTopYs.push(this.$refs.rule.$el.offsetTop);
    // this.themeTopYs.push(this.$refs.commend.$el.offsetTop);
    // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);



  },
  activated() {

    // this.iid = this.$route.params.iid;
    // console.log(this.iid);
    // getShopDetail(this.iid).then((res)=>{
    //
    //   this.shopDetail = res.result;
    //
    //   this.topImages = this.shopDetail.itemInfo.topImages;
    //
    //   console.log(this.topImages);
    //
    // });

    //console.log(this.shopDetail)

  },
  methods:{

    //将商品加进购物车
    addCart(){

      //获得购物车需要展示的信息
      console.log("已添加进购物车");
      const cartGoods = {}
      cartGoods.title = this.goodsDetail.title;
      cartGoods.realPrice = this.goodsDetail.realPrice;
      cartGoods.desc = this.goodsDetail.desc;
      cartGoods.image = this.topImages[0];
      cartGoods.iid = this.iid;
      cartGoods.count = 1;

      console.log(cartGoods);
      this.$store.dispatch("addCart",cartGoods);
      console.log(this.$store.state.cartList);

    },

    // //返回顶部按钮监听
    // backClick(){
    //
    //   this.$refs.detailScroll.scrollIn(0,0,300)
    //
    // },
    // listenShowBackTop(position){
    //
    //   //1.监听商品目录是否达到可以显示返回顶部按钮距离
    //   this.isShowBackTop = position.y < -1000  /*超过-1000就显示回顶部按钮*/
    //
    // },

    //监听detali界面的滚动  滚动到商品、详情、评论、推荐的时候navbar按键变红
    scrollListener(position){

      //1.监听商品目录是否达到可以显示返回顶部按钮距离
      this.listenShowBackTop(position);
      // console.log(position)

      let positionY = -position.y;

      for(let i = this.themeTopYs.length-1;i>=0;i--){

        if(positionY >= this.themeTopYs[i]){
          // console.log(i);
          // this.$refs.detailScroll.currentIndex !== i &&
          this.$refs.detail_navbar.currentIndex = i;
          break;

        }

      }
      // console.log(this.$refs.detail_navbar.position_Index);
      //
      // if(position.y > -this.themeTopYs[1]){
      //
      //   this.$refs.detail_navbar.position_Index = 0;
      //
      // }
      //
      // if(position.y < -this.themeTopYs[1]){
      //
      //   console.log(position.y);
      //   console.log(this.themeTopYs[1]);
      //   this.$refs.detail_navbar.position_Index = 1;
      //
      // }
      //
      // if(position.y < -this.themeTopYs[2]){
      //
      //   this.$refs.detail_navbar.position_Index = 2;
      //
      // }
      //
      // if(position.y < -this.themeTopYs[3]){
      //
      //   this.$refs.detail_navbar.position_Index = 3;
      //
      // }

    },
    //商品照片已经加载完成
    detailGoodsImageLoad(){

      this.$refs.detailScroll.refresh();

      this.themeTopY();

    },

    //商品推荐的照片已经加载完成
    detailGoodsRecommendImgLoad(){

      const refresh = debounce(this.$refs.detailScroll.refresh,50);

      this.$bus.$on("detailRecommendImgLoad",()=>{

        refresh();

      })


    },

    //detail页面点击了nav导航栏的["商品","详情","评论","推荐"]按键
    //在这里让它到达指定位置
    navItemClick(index){


      this.$refs.detailScroll.scrollIn(0,-this.themeTopYs[index],250);

    },

    //获得商品数据
    getShopDetailData(){

      //1.获得参数
      this.iid = this.$route.params.iid;

      //2.根据参数通过request获得数据
      getShopDetail(this.iid).then((res)=>{

        const itemInfo = res.result.itemInfo;
        const result = res.result;


        //1.获得轮播图数据
        this.topImages = itemInfo.topImages;



        //2.获得商品数据
        this.goodsDetail = new Goods(itemInfo,result.columns,result.shopInfo.services);

        //3.获得店铺信息
        this.shopMessage = new Shop(result.shopInfo);

        //4.获得商品展示信息
        this.goodsShow = result.detailInfo;

        //5.获得商品尺码等信息
        this.goodsParams = new GoodsParam(result.itemParams.info,result.itemParams.rule)

        //6.获得商品评论信息
        this.goodsComment = result.rate;

      //   this.themeTopYs = []
      //
      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.rule.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.commend.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      //
      //   console.log(this.themeTopYs)
      //
      //   this.$nextTick(()=>{   //根据最新的数据 DOM已经渲染完成
                                  //但是DOM里面的图片还没有加载完成
      //
      //     this.themeTopYs = []
      //
      //     this.themeTopYs.push(0);
      //     this.themeTopYs.push(this.$refs.rule.$el.offsetTop);
      //     this.themeTopYs.push(this.$refs.commend.$el.offsetTop);
      //     this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      //
      //     console.log(this.themeTopYs)
      //
      //   })
      //
      });

    },

    getShopRecommend(){

      getShopDetailRecommend().then(res=>{

        this.goodsRecommend = res.data.list;

      })

    }


  },



}
</script>

<style scoped>

  .detail{

    height: 100vh;

  }

  .content{

    height: calc(100% - 44px - 58px);   /*-顶部栏-底部控制栏*/
    overflow: hidden;
  }
  .nav-detail{

    z-index: 9;
    position: relative;
    background: white;

  }


</style>
