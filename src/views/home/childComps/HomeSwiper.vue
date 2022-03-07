<template>

  <swiper>

    <swiper-item v-for = "(item,index) in banners" :key = "index" >

      <a v-bind:href="item.link">
        <img :src = "item.image" @load = "swiperImgLoad">
      </a>
      <!--    监听轮播图图片是否已经加载完成   -->
    </swiper-item>

  </swiper>

</template>

<script>

import {Swiper,SwiperItem} from "components/common/swiper"

export default {
  name: "HomeSwiper",
  props:{

    banners:{

      type:Array,
      default(){

        return []

      }

    }

  },
  data(){

    return{

      isLoad:false

    }

  },

  components:{

    Swiper,
    SwiperItem

  },

  methods:{

    swiperImgLoad(){


      if(!this.isLoad) {  //通过此变量来控制只向外发出一次轮播图加载完成信息

        this.$emit("swiperImgLoad");//表示此图片已经加载完成
        this.isLoad = true;
      }
    }

  }

}
</script>

<style scoped>

</style>
