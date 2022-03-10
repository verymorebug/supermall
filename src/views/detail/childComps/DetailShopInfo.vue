<template>
  <div class = "shop-bar">

    <div class = "info-shop">

      <img :src = "shopMessage.shopLogo">
      <span>{{shopMessage.shopName}}</span>

    </div>

    <div class = "info-shop-message">

      <div class = "info-cells">
        <div class = "cells-count">
          {{ simplifyNum(shopMessage.sells) }}   <!--对数据进行简化处理-->
        </div>

        <div class = "cells-text">总销量</div>

      </div>

      <div class = "info-goods">

        <div class = "goods-count">
          {{ simplifyNum(shopMessage.goodsCount) }}
        </div>

        <div class = "goods-text">全部宝贝</div>
      </div>

      <div class = "info-comment">

        <table class = "info-comment-table">

          <tr v-for = "(item,index) in shopMessage.score" :key = "index">

            <td>{{item.name}}</td>
            <td class = "score" :class="{scoreBetter:item.isBetter}">{{item.score}}</td>

            <td class = "better">
              <span class = "betterSpan"
                    :class = "{isBetter:item.isBetter}">
                {{item.isBetter?'高':'低'}}
              </span>
            </td>

          </tr>

        </table>

      </div>

    </div>

    <div class = "go-shop">

      <button>进店逛逛</button>

    </div>

  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props:{

    shopMessage:{

      type:Object,
      default(){
        return []
      }
    }
  },

  methods:{

    simplifyNum(number){

      if(number > 10000)
        return (number/10000).toFixed(2)+"万"  //保存两位小数 四舍五入
      return number;

    }

  }

}
</script>

<style scoped>
  .shop-bar{

    height: 240px;
    /*background: #ff8198;*/
    border-bottom: 4px solid rgba(100,100,100,0.1);

  }

  .info-shop{

    height: 80px;
    line-height: 80px;
    background: white;
    display: flex;

  }

  .info-shop img{

    margin-top: 10px;
    margin-left: 5px;
    width: 55px;
    height: 55px;
    border-radius: 50%;

  }

  .info-shop span{

    font-size: 18px;
    margin-left: 10px;

  }

  .info-shop-message{

    display: flex;
    height: 100px;
    background: white;

  }

  .info-cells{

    flex: 1;
    text-align: center;
    margin-top: 20px;
  }

  .info-goods{

    flex: 1;
    text-align: center;
    border-right: 1px solid rgba(100,100,100,0.1);
    margin-top: 20px;
    margin-bottom: 20px;

  }

  .info-comment{

    flex: 2;
    height: 100%;
    text-align: center;
    /*background: #ff8198;*/

  }

  .info-comment-table{

    height: 100%;
    width: 100%;

  }

  .cells-count,.goods-count{

    font-size: 20px;

  }
  .cells-text  ,.goods-text{

    font-size: 13px;
    padding-top: 10px;

  }

  .score{

    color: 	#00FF00;

  }

  .scoreBetter{

    color: var(--color-tint);

  }

  .scoreLow{

    color: var(--color-tint);

  }

  .betterSpan{

    background: 	#00FF00;

  }

  .isBetter{

    background: var(--color-tint);

  }

  .better{

    color:white;

  }

  .go-shop{

    text-align: center;

  }

  .go-shop button{

    border-radius: 20px;
    padding: 8px;
    background: rgba(100,100,100,0.1);
    border: 0px;
    color: #9f9e9e;

  }

</style>
