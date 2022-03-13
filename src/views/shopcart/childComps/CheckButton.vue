<template>
  <div class="check">

    <img src = "~assets/img/cart/tick.svg" :class="{active:isSelect}">

  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props:{

    isSelect:{

      type:Boolean,
      default:false

    }

  }

}
</script>

<style scoped>
  .check img{

    width: 20px;
    border: 1px solid rgba(100,100,100,0.3);
    border-radius: 50%;

  }

  .active{

    background: #ff8198;
    border-color: #ff8198;

  }
</style>
