<template>
  <div class = "goodsListItem" @click = "showDetail">

    <img :src = "showImg" @load = "imgLoad">

    <div class = "goodsInfo">

      <p>{{good_item.title}}</p>
      <span class = "price">{{good_item.price}}</span>
      <span class = "collect">{{good_item.cfav}}</span>

    </div>

  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props:{

    good_item:{

      type:Object,
      default(){

        return {}

      }

    }
  },

  computed:{

    showImg(){

      return this.good_item.image||this.good_item.show.img

    }

  },

  methods:{

    imgLoad(){


      //this.$bus.$emit("goodsImgLoad");
      this.$bus.$emit("ItemImgLoad")


    },
    showDetail(){

      console.log("展示商品详情");
      this.$router.push("/detail/"+this.good_item.iid);
      console.log(this.good_item);

    }

  }

}
</script>

<style scoped>

  .goodsListItem{

    padding-bottom: 40px;
    position: relative;
    width: 48%;

  }

  .goodsListItem img{

    width: 100%;
    height: 100%;
    border-radius: 5px;


  }

  .goodsInfo{

    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;

  }

  .goodsInfo img{

    width: 100%;
    border-radius: 5px;

  }
  .goodsInfo p{

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;

  }

  .goodsInfo .price{

    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goodsInfo .collect{

    position: relative;

  }

  .goodsInfo .collect::before{

    content: '';
    position: absolute;
    left: -15px;
    top:-1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;

  }


</style>
