<template>
  <div class = "goodsList">

    <goods-list-item v-for="(item,index) in goods" :good_item="item" :key = "index"></goods-list-item>

  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props:{

    goods:{

      type:Array,
      default(){

        return []

      }

    }

  },

  components: {GoodsListItem}
}
</script>

<style scoped>

  .goodsList{

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

  }
</style>
