<template>
  <div class ="bottom-bar">

    <div class = "bar-left">

      <div class = "left-server">

        <div>
          <img src = "~assets/img/detail/server.svg">
        </div>

        <div>
          <span>客服</span>
        </div>

      </div>
      <div class = "left-shop">

        <div>
          <img src = "~assets/img/detail/shop.svg">
        </div>

        <div>
          <span>店铺</span>
        </div>

      </div>
      <div class = "left-collect">

        <div>
          <img src = "~assets/img/detail/collect.svg">
        </div>

        <div>
          <span>收藏</span>
        </div>

      </div>

    </div>
    <div class = "bar-right">

      <div class = "right-add-cart" @click = "addCart">
        <span>加入购物车</span>

      </div>
      <div class = "right-buy">购买</div>

    </div>

  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",

  methods:{

    addCart(){

      this.$emit("addCart");

    }

  }

}
</script>

<style scoped>
  .bottom-bar{

    height: 58px;

    /*background: var(--color-tint);*/
    background: white;
    position: relative;
    /*position:fixed;*/
    /*z-index: 9;*/
    /*bottom: 53px;*/
    /*left: 0;*/
    /*right: 0;*/
    display: flex;

  }
  .active{

    background: #b2b0b0;

  }

  .bar-left{

    flex: 1;
    /*background: #00FF00;*/
    font-size: 14px;
    display: flex;
    text-align: center;

  }
  .left-server{

    flex: 1;
    /*background: white;*/

  }

  .left-server img{

  }

  .left-shop{

    flex: 1;
    /*background: yellow;*/

  }
  .left-collect{

    flex: 1;
    /*vertical-align: middle;*/
    /*background: red;*/

  }


  .bar-right{

    flex: 1;
    /*background: yellow;*/
    display: flex;
    line-height: 58px;
    text-align: center;
    height: 100%;

  }
  .right-add-cart{

    flex: 1;
    background: #ecec32;
    height: 100%;

  }

  .right-add-cart span{


  }

  .right-buy{

    flex: 1;
    background: #ff8198;
    color: white;
    height: 100%;
    height: 100%;

  }


</style>
