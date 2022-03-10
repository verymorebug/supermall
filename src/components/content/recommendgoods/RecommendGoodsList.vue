<template>
  <div class = "goodsList">

    <recommend-goods-list-item v-for="(item,index) in goods" :good_item="item" :key = "index"></recommend-goods-list-item>

  </div>
</template>

<script>
import RecommendGoodsListItem from "./RecommendGoodsListItem";
export default {
  name: "RecommendGoodsList",
  props:{

    goods:{

      type:Array,
      default(){

        return []

      }

    }

  },

  components:{

    RecommendGoodsListItem

  }

}
</script>

<style scoped>

.goodsList{

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

}
</style>
