<template>

    <div class = "detail">

      <detail-navbar class = "nav-detail"></detail-navbar>

      <scroll class = "content">
        <detail-swiper :top-images="topImages"></detail-swiper>
        <detail-base-info :goods-detail="goodsDetail"></detail-base-info>
        <detail-shop-info :shop-message = "shopMessage"></detail-shop-info>
      </scroll>
    </div>



</template>

<script>

import DetailNavbar from "./childComps/DetailNavbar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";

import Scroll from "components/common/scroll/Scroll";

import {getShopDetail,Goods,Shop} from "network/detail";


export default {
  name: "Detail",
  components: {
    DetailBaseInfo,
    DetailSwiper,
    DetailNavbar,
    DetailShopInfo,

    Scroll

  },
  data(){

    return{

      iid:null,
      shopDetail:{},
      topImages: [],
      goodsDetail:{},    //商品详情信息
      shopMessage:{}     //店铺信息

    }

  },

  created() {

      this.getShopDetailData();

  },
  methods:{

    getShopDetailData(){

      //1.获得参数
      this.iid = this.$route.params.iid;
      console.log(this.iid);

      //2.根据参数通过request获得数据
      getShopDetail(this.iid).then((res)=>{

        const itemInfo = res.result.itemInfo;
        const result = res.result;

        console.log(res)

        this.topImages = itemInfo.topImages;

        this.goodsDetail = new Goods(itemInfo,result.columns,result.shopInfo.services);

        this.shopMessage = new Shop(result.shopInfo);

      });

    },


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

  }


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
