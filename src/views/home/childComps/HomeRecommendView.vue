<template>
  <div class = "homeRecommendView">

    <div v-for="item in recommends" class = "recommendViewItem">

      <a :href="item.link">

        <img :src = "item.image">
        <div>{{item.title}}</div>

      </a>

    </div>


  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",

  props:{

    recommends:{

      type:Array,
      default() {
        return [];
      }

    }

  }

}
</script>

<style scoped>

  .homeRecommendView{

    display: flex;
    text-align: center;
    font-size: var(--font-size);
    padding: 10px 0 10px;
    border-bottom: 8px solid #eee;

  }

  .recommendViewItem{

    flex:1;

  }
  .recommendViewItem img{

    width: 70px;
    height: 70px;
    margin-top: 6px;
    margin-bottom: 6px;

  }

</style>
