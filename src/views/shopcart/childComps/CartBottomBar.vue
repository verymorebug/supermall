<template>
  <div class="bottom-bar">

    <div class="all-selected" >

      <check-button class="check-button" :is-select = "allSelected" @click.native = "allSelectedClick"></check-button>
      <span>全选</span>

    </div>


    <div class = "sum-money">合计:￥{{calculateGoods}}</div>

    <div class = "calculate right">

        去计算({{calculateLength}})
    </div>

  </div>
</template>

<script>
import CheckButton from "./CheckButton";
import {mapGetters} from "vuex";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton,

  },

  data(){

    return{

      allSelected:true,

    }

  },
  computed:{

    ...mapGetters(['cartList']),

    calculateGoods(){


      let price = this.cartList.filter((item)=>{

        return item.selected;  //选中就返回

      }).reduce((accumulator,item)=>{

        return accumulator+item.count*item.realPrice;


      },0).toFixed(2);


      return price

    },

    calculateLength(){

      return this.cartList.filter((item)=>{

        return item.selected

      }).length

    }



  },

  created() {

    if(this.cartList.length == 0)
      this.allSelected = false;
    else{

      let haveNotSelect = this.cartList.find(item => item.selected === false)

      if(haveNotSelect)
        this.allSelected = false;
      else
        this.allSelected = true;

    }

  },
  methods: {

    allSelectedClick() {

      this.allSelected = !this.allSelected;
      this.$store.dispatch("changeSelectGoods",this.allSelected);

    }
  }


}
</script>

<style scoped>
  .bottom-bar{

    line-height: 30px;
    height: 30px;
    width: 100%;
    display: flex;
    font-size: 14px;
    background: #eae6e6;
    /*justify-content: space-between;*/
    padding: 1px;

  }

  .all-selected{

    /*background: #ff8198;*/
    /*color: black;*/

    /*line-height: 20px;*/
    /*padding: 2px;*/

  }

  .check-button{

    margin: 4px 0px 0px 3px;
    float: left;


  }

  .all-selected span{

    margin-left: 4px;
    color: #c4bfbf;
    float: right;

  }

  .sum-money{

    padding-left: 20px;
    /*background: white;*/
    flex: 1;
  }

  .calculate{

    width: 80px;
    background: orangered;
    color: white;
    text-align: center;
  }


</style>
