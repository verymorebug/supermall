<template>
  <div v-if = "Object.keys(goodsDetail).length !== 0" class = "base-info">

    <div class = "info-title">{{goodsDetail.title}}</div>

    <div class = "info-price">

      <span class = "new-price">{{goodsDetail.newPrice}}</span>
      <span class = "old-price">{{goodsDetail.oldPrice}}</span>
      <span v-if = "goodsDetail.discount" class="discount">{{goodsDetail.discount}}</span>

    </div>

    <div class = "info-other">

      <span>{{goodsDetail.columns[0]}}</span>
      <span>{{goodsDetail.columns[1]}}</span>
      <span>{{goodsDetail.services[goodsDetail.services.length-1].name}}</span>

    </div>

    <div class="info-service">

      <span v-for="index in goodsDetail.services.length-1" class = "info-service-item">

        <img :src = "goodsDetail.services[index-1].icon">
        <span>{{goodsDetail.services[index-1].name}}</span>

      </span>

    </div>

  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props:{

    goodsDetail:{

      type:Object,
      default(){

        return []

      }

    }

  }

}
</script>

<style scoped>

  .base-info{

    margin-top: 5px;
    /*background: var(--color-tint);*/
    height: 230px;
    padding: 5px;
    border-bottom: 4px solid rgba(100,100,100,0.1);
  }

  .info-title{

    font-size: 20px;
    text-align: left;
    color: #000;

  }

  .info-price{

    height: 50px;
    text-align: left;
    margin-top: 10px;

  }

  .new-price{

    color: var(--color-tint);
    font-size: 30px;

  }

  .old-price{

    font-size: var(--color-text);
    text-decoration: line-through;
    margin-left: 5px;
    color: #b2b2af;
  }

  .discount{

    background: var(--color-tint);
    padding: 5px;
    border-radius: 10px;
    margin-left: 5px;


  }

  .info-other{

    display: flex;
    justify-content: space-between;
    line-height: 30px;
    font-size: 13px;
    /*box-shadow: 0px 1px 1px rgba(100,100,100,0.1) ;*/
    border-bottom: 1px solid rgba(100,100,100,0.1);   /*底部制造阴影*/

  }

  .info-other span{

    color: #b2b2af;;

  }


  .info-service{

    display: flex;
    justify-content: space-between;
    line-height: 60px;

  }

  .info-service-item img{

    height: 13px;
    position: relative;
    top:2px

  }

  .info-service-item span{

    font-size: 13px;
    color: #333;

  }



</style>
