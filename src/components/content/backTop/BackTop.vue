<template>
  <div class = "back-top">

    <img src="~assets/img/common/top.svg">

  </div>
</template>

<script>
export default {
  name: "BackTop"
}
</script>

<style scoped>

  .back-top{

    position:fixed;
    right: 8px;
    bottom: 70px;
    z-index: 100;

  }

  .back-top img{

    height: 50px;
    width: 50px;

  }

</style>
