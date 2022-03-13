<template>
  <div class = "cart-list">

    <shop-cart-list-item v-for = "(item,index) in cartList"
                         :key = "index"
                         :goods="item"


    ></shop-cart-list-item>

  </div>
</template>

<script>

import {mapGetters} from "vuex";
import ShopCartListItem from "./ShopCartListItem";
import CartListItem from "./CartListItem";
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "ShopCartList",
  components: {ShopCartListItem,Scroll,CartListItem},
  computed:{

    ...mapGetters(['cartList'])

  },



}


</script>

<style scoped>

  .cart-list{

    height:100%;
  }


</style>
