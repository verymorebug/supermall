<template>

  <div class = "tabbar-control">
    <div v-for = "(item,index) in titles"
         class = "tabItem"
         :class = "{active:index === currentIndex}" @click="tabControlClick(index)" >

      <span>{{item}}</span>

    </div>


  </div>

</template>

<script>
export default {

  name: "TabbarContrl",
  props:{
    titles:{

      type:Array,
      default(){

        return []

      }
    }
  },

  data(){

    return{

      currentIndex:0

    }

  },

  methods:{

    tabControlClick(index){

      this.currentIndex = index;
      this.$emit("tabControlClick",index)

    }

  }

}
</script>

<style scoped>
  .tabbar-control{

    display: flex;
    line-height: 40px;
    height: 40px;
    text-align: center;

    position: sticky;
    top: 44px;
    background-color: white;

    z-index: 8;

  }

  .tabItem{

    flex: 1;

  }

  .tabItem span{

    padding: 5px;

  }

  .active{

    color: var(--color-high-text);

  }

  .active span{

    border-bottom: 2px solid var(--color-tint);

  }

</style>
