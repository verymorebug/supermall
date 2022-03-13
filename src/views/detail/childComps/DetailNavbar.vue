<template>
  <div>
    <nav-bar class = "detail_nav">

      <div slot="left" class = "left_back" @click = "backClick">

        <img src = "~assets/img/common/back.svg">

      </div>

      <div slot="center" class = "center_title">

        <div v-for = "(item,index) in titles" class = "title_item"
             :class = "{active:index === currentIndex}"
             @click = "centerItemClick(index)">{{item}}</div>

<!--  3 3
   cur = 3 scur = 3
   cur = 3 scur = 0
   3!==2 1 0  ->

3 2 1 0      -->

      </div>
    </nav-bar>


  </div>

</template>

<script>

import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavbar",

  components:{

    NavBar

  },
  data(){

    return{

      titles:["商品","详情","评论","推荐"],
      currentIndex:0,
      currentType:null,

    }

  },

  methods:{

    centerItemClick(index){

      this.currentIndex = index;
      this.currentType  = this.titles[this.currentIndex];

      this.$emit("navItemClick",index);

    },

    backClick(){

      this.$router.back();  //返回按键  通过路由实现

    }

  }

}
</script>

<style scoped>

  .left_back img{

    margin-top: 6px;

  }

  .center_title{

    display: flex;
    text-align: center;

  }
  .title_item{

    flex: 1;


  }

  .active{

    color: var(--color-high-text);

  }

</style>
