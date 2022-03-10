<template>

    <div class = "detail">

      <detail-navbar class = "nav-detail"></detail-navbar>

      <scroll class = "content" ref = "detailScroll">
        <detail-swiper :top-images="topImages"></detail-swiper>
        <detail-base-info :goods-detail="goodsDetail"></detail-base-info>
        <detail-shop-info :shop-message = "shopMessage"></detail-shop-info>
        <detail-goods-info :goods-show = "goodsShow"
                           @detailGoodsImageLoad = "detailGoodsImageLoad">
        </detail-goods-info>
        <detail-rule-info :goods-params = "goodsParams"></detail-rule-info>
        <detail-comment-info :comment-message="goodsComment"></detail-comment-info>
        <recommend-goods-list :goods = "goodsRecommend"></recommend-goods-list>

      </scroll>
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

import Scroll from "components/common/scroll/Scroll";

import {getShopDetail,getShopDetailRecommend,Goods,Shop,GoodsParam} from "network/detail";
import RecommendGoodsList from "components/content/recommendgoods/RecommendGoodsList";
import GoodsList from "components/content/goods/GoodsList";
import {debounce} from "common/utils";



export default {
  name: "Detail",
  components: {
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

    }

  },

  created() {

      this.getShopDetailData();
      this.getShopRecommend();

  },
  mounted() {

    this.detailGoodsRecommendImgLoad();

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

    detailGoodsImageLoad(){

      this.$refs.detailScroll.refresh();

    },

    detailGoodsRecommendImgLoad(){

      const refresh = debounce(this.$refs.detailScroll.refresh,50);

      this.$bus.$on("detailRecommendImgLoad",()=>{

        refresh();

      })

    },

    //获得商品数据
    getShopDetailData(){

      //1.获得参数
      this.iid = this.$route.params.iid;
      console.log(this.iid);

      //2.根据参数通过request获得数据
      getShopDetail(this.iid).then((res)=>{

        const itemInfo = res.result.itemInfo;
        const result = res.result;

        console.log(res)

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
        console.log(this.goodsParams);

        //6.获得商品评论信息
        this.goodsComment = result.rate;

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

    height: calc(100% - 44px);

  }
  .nav-detail{

    position: relative;
    z-index: 9;
    background: white;

  }


</style>
