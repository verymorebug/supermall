<template>
  <div class = "rule-info">

    <div v-if = "goodsParams.sizes" v-for="tables in goodsParams.sizes">

      <table class = "rule-table">

        <tr v-for = "items in tables">

          <td v-for = "item in items">{{item}}</td>

        </tr>

      </table>

    </div>


    <table class = "goods-table">

      <tr v-for = "item in goodsParams.infos">

        <td class = "goods-key">{{item.key}}</td>
        <td class = "goods-value">{{item.value}}</td>

      </tr>

    </table>

    <div class = "goods-img" v-if = "goodsParams.image">

      <img :src = "goodsParams.image">

    </div>


  </div>
</template>

<script>
  export default {
    name: "DetailRuleInfo",

    props:{

      goodsParams:{

        type:Object,
        default(){

          return {}

        }

      }

    }

  }
</script>

<style scoped>
  .rule-info{


    height: 100%;
    width: 100%;
    padding: 5px;

  }
  .rule-table{

    table-layout: fixed;
    border-collapse:collapse;     /*合并相邻的单元格*/
    width: 100%;
    line-height: 50px;
    margin-top: 10px;
    text-align: left;

  }

  .goods-table{
    table-layout: fixed;
    border-collapse:collapse;
    width: 100%;
    margin-top: 10px;
    line-height: 50px;

  }

  .rule-table td{
    border-bottom: 1px solid rgba(100,100,100,0.2);

  }

  .goods-table td{

    border-bottom: 1px solid rgba(100,100,100,0.1);
  }

  .goods-key{

    width: 100px;
    text-align: left;

  }
  .goods-value{

    text-align: left;
    color: var(--color-tint);

  }

  .goods-img{

    width: 100%;

  }


</style>
