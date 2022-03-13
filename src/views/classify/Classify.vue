<template>
  <div class="wrapper" ref = "aaa">
    <ul class = "content">
      <li>分类信息1</li>
      <li>分类信息2</li>
      <li>分类信息3</li>
      <li>分类信息4</li>
      <li>分类信息5</li>
      <li>分类信息6</li>
      <li>分类信息7</li>
      <li>分类信息8</li>
      <li>分类信息4</li>
      <li>分类信息5</li>
      <li>分类信息6</li>
      <li>分类信息7</li>
      <li>分类信息8</li>

    </ul>
  </div>
</template>

<script>

import BScroll from "better-scroll"

export default {
  name: "Classify",

  data(){

    return{

      scroll:null

    }

  },
  components:{

    BScroll

  },

  mounted() {

    this.scroll = new BScroll(document.querySelector(".wrapper"),{

      probeType:3,
      pullUpLoad:true

    })

    this.scroll.on("pullingUp",()=>{

      console.log("上拉加载");

    })

    this.scroll.on("scroll",(position)=>{

      console.log(position)

    })


  }

}
</script>

<style scoped>

  .wrapper{
    overflow: hidden;
    height: 180px;
    background: #ff8198;
    /*overflow: scroll;*/


  }

</style>
