<template>
    <swiper class = "showSwiper" >

      <swiper-item v-for="(item,index) in topImages">

        <img :src = "item">

      </swiper-item>

    </swiper>


</template>

<script>

import {debounce} from "common/utils";
import {Swiper,SwiperItem} from "components/common/swiper";

export default {
  name: "DetailSwiper",
  components:{

    Swiper,SwiperItem

  },

  props:{

    topImages:{
      type:Array,
      default(){

        return []

      }

    }

  },

  methods:{


  },


}
</script>

<style scoped>

  .showSwiper{

    height: 300px;
    overflow: hidden;

  }

</style>
