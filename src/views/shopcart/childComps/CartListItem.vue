<template>
  <div class = "shop-item">

    <div class = "item-selector"></div>

    <div class = "item-img">
<!--      style="width: 80px;height: 100px;display: block;border-radius: 5px"-->
      <img :src="cartGoods.image">

    </div>

    <div class = "item-info">

      <div class = "item-title">{{cartGoods.title}}</div>
      <div class = "item-desc">{{cartGoods.desc}}</div>
      <div class = "info-bottom">

        <div class = "item-price left">{{cartGoods.realPrice}}</div>
        <div class = "item-count right">x{{cartGoods.count}}</div>

      </div>



    </div>

  </div>
</template>

<script>
export default {
  name: "CartListItem",
  props:{

    cartGoods:{

      type:Object,
      default(){

        return {}

      }

    }

  }
}
</script>

<style scoped>

  .shop-item{

    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;

  }

  .item-title ,.item-desc{

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

  }

  .item-img{

    padding: 5px;
    background: #ff8198;

  }

  .item-img img{

    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }


  .item-info{

    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;

  }

  .item-info .item-desc{

    font-size: 14px;
    color:#666;
    margin-top: 15px;


  }

  .info-bottom{

    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;

  }

  .info-bottom .item-price{

    color: orangered;

  }


</style>
