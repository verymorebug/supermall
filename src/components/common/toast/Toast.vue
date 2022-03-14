<template>
  <div class = "toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props:{

    message:{

      type:String,
      default:''

    },
    isShow:{

      type:Boolean,
      default: false

    }

  },
  methods:{

    show(message,time = 1000){

      this.isShow = true;
      this.message = message;

      // console.log("使用的是通过插件形式的Toast");

      setTimeout(()=>{

         this.isShow = false;
         this.message = '';

      },time)

    }

  }

}
</script>

<style scoped>

  .toast{


    background: rgba(0,0,0,0.5);
    font-size: 20px;
    border-radius: 10px;
    padding: 8px 10px;
    color: white;
    position: fixed;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;


  }

</style>
