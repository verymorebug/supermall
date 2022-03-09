<template>
  <div class = "base-info">

    <div class = "title">{{goodsDetail.title}}</div>

    <div class = "count">

        <span class="newCount">{{goodsDetail.newPrice}}</span>
        <span class="oldCount">{{goodsDetail.oldPrice}}</span>
        <span class="descCount" :style="{background: goodsDetail.descBgColor}">
          {{goodsDetail.descCount}}
        </span>

    </div>

    <div class = "message">

      <span class = "sell">{{goodsDetail.columns[0]}}</span>
      <span class = "collect">{{goodsDetail.columns[1]}}</span>
      <span class = "discounts">{{goodsDetail.services[0].name}}</span>

    </div>

    <div class="express">

      <span class="express_left">{{goodsDetail.services[1].name}}</span>
      <span class="express_right">{{goodsDetail.services[2].name}}</span>

<!--      <span class="info-service-item" v-for="index in goodsDetail.services.length-1" :key="index">-->

<!--          <img :src = "goodsDetail.services[index-1].icon">-->
<!--          <span>{{goodsDetail.services[index-1].name}}</span>-->
<!--      -->
<!--      </span>-->

    </div>

  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props:{

    goodsDetail:Object

  }

}
</script>

<style scoped>
  .base-info{

    margin-top: 5px;
    /*background: var(--color-tint);*/
    height: 200px;
    padding: 5px;

  }

  .title{

    font-size: 20px;
    text-align: left;
    color: #000;

  }

  .count{
    margin-top: 10px;
    height: 50px;
    text-align: left;
  }
  .newCount{

    color: var(--color-tint);
    font-size: 30px;


  }

  .oldCount{

    font-size: var(--color-text);
    text-decoration: line-through;
    margin-left: 5px;
    color: #b2b2af;

  }

  .descCount{

    color: white;
    font-size: 18px;
    border-radius: 10px;
    margin-left: 5px;
    padding: 4px;
  }

  .message{

    height: 40px;
    text-align: left;
    color: #b2b2af;
    padding-top: 10px;
    font-size: 15px;
    display: flex;
    box-shadow: 0px 1px 1px rgba(100,100,100,0.1)

  }

  .sell{

    flex: 1;
    text-align: left;
  }

  .collect{

    flex: 1;
    text-align: center;
  }

  .discounts{

    flex: 1;
    text-align: right;

  }

  .express{

    height: 50px;
    display: flex;
    box-shadow: 0 1px 1px rgba(100,100,100,0.1);

  }

  .express_left{

    flex: 1;
    padding-top: 15px;
    text-align: left;

  }

  .express_right{

    flex: 1;
    padding-top: 15px;
    text-align: right;

  }

</style>
