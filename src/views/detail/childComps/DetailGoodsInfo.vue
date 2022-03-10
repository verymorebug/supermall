<template>

  <div class = "goods-info" >

    <div class = "message-info">

      {{goodsShow.desc}}

    </div>

    <div class = "img-info" v-if = "goodsShow.detailImage">

      <img :src = "item" v-for="item in goodsShow.detailImage[0].list" @load = "imgLoad">

    </div>

  </div>

</template>

<script>
export default {
  name: "DtailGoodsInfo",
  props:{

    goodsShow:Object

  },
  data(){

    return {

      listImgLength: 0,
      imgCount: 0

    }

  },
  methods:{

    imgLoad(){

      if(this.listImgLength === ++this.imgCount){

        this.$emit("detailGoodsImageLoad");
        console.log("数据已经加载");

      }
    }

  },
  watch:{

    goodsShow(){

      this.listImgLength = this.goodsShow.detailImage[0].list.length;

    }

  }

}
</script>

<style scoped>

  .goods-info{

    margin-top: 20px;
    padding: 5px;

  }

  .message-info{

    height: 100%;
    font-size: 15px;
    /*font-weight: bold;*/
    border-bottom: 1px solid black;
    padding: 10px;
    /*justify-content: space-between;*/
     /*background: #ff8198;*/

  }
  .img-info{

    margin-top: 10px;

  }
  .img-info img{

    height: 100%;
    width: 100%;

  }


</style>
