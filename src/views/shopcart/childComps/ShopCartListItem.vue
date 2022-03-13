<template>
  <div class="cart-list-item">
    <div class = "select" >

        <check-button :is-select = "goods.selected" @click.native = "selectedClick"/>

    </div>
    <div class = "goods-img">

        <img :src = "goods.image">

    </div>


    <div class="item-right">

      <div class = "right-title">

        <span>{{goods.title}}</span>
      </div>

      <div class="right-desc">

        <span>{{goods.desc}}</span>

      </div>

      <div class = "right-number">

        <div class = "number-left">￥{{goods.realPrice}}</div>
        <div class = "number-right">x{{goods.count}}</div>

      </div>


    </div>


  </div>
</template>

<script>
import CheckButton from "views/shopcart/childComps/CheckButton";
export default {
  name: "ShopCartListItem",
  components: {CheckButton},
  props:{

    goods:{

      type:Object,
      default:{

        return: {}
      }

    }

  },

  methods:{

    selectedClick(){

      // console.log("点击了选项");
      this.$store.commit("changeSelectGoods",this.goods)

    }
  }

}
</script>

<style scoped>
  .cart-list-item{

    width: 100%;
    /*background: yellow;*/
    padding: 5px;
    display: flex;
    border-bottom: 1px solid rgba(100,100,100,0.3);

  }

  .select{

      /*padding-top: 43px;*/
    line-height: 110px;

  }

  .right-title, .right-desc{

    margin-top: 5px;
    overflow: hidden;            /*超出部分隐藏*/
    text-overflow: ellipsis;    /*超出的文本用省略号....表示*/
    white-space: nowrap;        /*表示所有文本在一行内显示 除非遇到了<br>标签等情况*/

  }
  .goods-img{

    padding: 5px;

  }

  .goods-img img{

    width: 80px;
    height: 100px;
    border-radius: 10px;

  }

  .item-right{

    padding: 5px 10px;
    font-size: 17px;
    overflow: hidden;
    position: relative;

  }
  .item-right .right-desc{

    font-size: 14px;
    color: #c2c0c0;

  }



  .right-number{

    position: absolute;
    left: 5px;
    right: 5px;
    bottom: 10px;

  }

  .number-right{
    float: right;

  }

  .number-left{

    float: left;
    color: orangered;
  }


</style>
