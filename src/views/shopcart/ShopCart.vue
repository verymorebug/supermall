<template>
  <div class = "shop-cart">

    <nav-bar class = "nav-bar">

      <div slot = "center">购物车({{length}})</div>

    </nav-bar>

    <scroll class="content" ref = "cartScroll">

      <shop-cart-list></shop-cart-list>

    </scroll>

    <cart-bottom-bar class = "cart-bottom-bar"></cart-bottom-bar>

  </div>
</template>

<script>
import {mapGetters} from "vuex"

import NavBar from "components/common/navbar/NavBar";

import ShopCartList from "./childComps/ShopCartList";
import Scroll from "components/common/scroll/Scroll";
import CartBottomBar from "./childComps/CartBottomBar";


export default {

  name: "ShopCart",

  components: {
    Scroll,
    ShopCartList,
    NavBar,
    CartBottomBar,
  },

  computed:{

    // getCartListLength(){
    //
    //   return this.$store.getters.cartListLength;
    //
    // },

    //1.数组形式
    // ...mapGetters(['cartListLength']),

    ...mapGetters({

      length:'cartListLength'

    })


  },
  mounted() {

  },

  activated() {

    this.$refs.cartScroll.refresh();

  }


}
</script>

<style scoped>

  .shop-cart{

    height: 100vh;

  }

  .nav-bar{

    background: var(--color-tint);
    color: white;

  }

  .content{

    height: calc(100% - 44px - 49px - 50px);
    overflow: hidden;

  }

  .cart-bottom-bar{

    position: relative;
    left: 0;
    right: 0;

  }

</style>
