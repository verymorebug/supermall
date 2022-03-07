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

  props:{

    probeType:{

      type:Number,
      default:0

    },
    pullUpLoad:{

      type:Boolean,
      default: false

    }

  },
  components:{

    BScroll

  },

  data(){

    return{

      scroll:null

    }

  },

  mounted() { //mounted里面才可以直接操作dom

    this.scroll = new BScroll(this.$refs.wrapper,{

      click:true,
      probeType:this.probeType,
      // pullUpLoad:this.pullUpLoad

    })

    this.scroll.on("scroll",(position)=>{

      this.$emit("scroll",position);

    })

    // this.scroll.on("pullingUp",()=>{
    //
    //   console.log("上拉事件");
    //   this.$emit("pullingUp")  //把上拉事件传给父组件
    //
    //
    // })

  },

  methods:{

    scrollIn(x,y,time = 100){

      this.scroll && this.scroll.scrollTo(x,y,time);

    },

    refresh(){

      this.scroll && this.scroll.refresh();

    },

    finishPullUpData(){

      this.scroll && this.scroll.finishPullUp();

    }


  }
}
</script>

<style scoped>

</style>
