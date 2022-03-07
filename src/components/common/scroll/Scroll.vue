<template>

  <div class = "wrapper" ref = "wrapper">

    <div class = "content">

      <slot></slot>

    </div>

  </div>

</template>

<script>

import BScroll from "better-scroll";

export default {
  name: "Scroll",
  components:{

    BScroll

  },

  data(){

    return{

      scroll:null

    }

  },

  mounted() {

    this.scroll = new BScroll(this.$refs.wrapper,{

      click:true,
      pullUpLoad:true,
      probeType:3

    })

  },
  methods:{

    scrollIn(x,y,time = 100){

      this.scroll.scrollTo(x,y,time);

    }

  }
}
</script>

<style scoped>

</style>
