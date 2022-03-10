<template>
  <div class = "comment">

    <div class = "comment-title">

      <span>用户评价</span>
      <span style="text-align: right">更多</span>

    </div>

    <div class = "comment-user" v-if="commentMessage.cRate > 0"
         v-for = "items in commentMessage.list">            <!--遍历所有用户的评论-->

      <div class="user-message" >           <!--评论者的头像以及姓名-->

        <img :src="items.user.avatar">
        <span>{{items.user.uname}}</span>

      </div>

      <div class="user-comment">  <!--评论者的评论信息-->

        <span class = "user-talk">{{items.content}}</span>

        <div class = "user-select">

          <span class = "select-time">{{getTime(items.created)}}</span>   <!--评论时间-->
          <span class = "select-style">{{items.style}}</span>     <!--评论者已购买样式-->

        </div>

        <div class="user-show" v-if = "items.images">     <!--评论者货物自拍-->

          <img :src = "image" v-for="image in items.images">

        </div>


      </div>



    </div>

  </div>
</template>

<script>

  import {formatTime} from "common/utils.js"

  export default {
    name: "DetailCommentInfo",
    props:{

      commentMessage:{

        type:Object,
        default(){

          return {}

        }

      }

    },
    methods:{

      getTime(num){

        const time = new Date(num);

        let str = "";
        let month = time.getMonth()+1
        str += time.getFullYear()+"-"+month+"-"+time.getDay()+" "+time.getHours()+':'+time.getMinutes()+":"+time.getSeconds();

        return str;

      }

    }

  }
</script>

<style scoped>

  .comment{

    /*background: #ff8198;*/
    height: 100%;
    padding: 10px;

  }

  .comment-title{

    /*background: #00FF00;*/
    line-height: 60px;
    display: flex;
    font-size: 16px;
    border-bottom: 1px solid rgba(100,100,100,0.2);

  }

  .comment-title span{

    flex: 1;

  }

  .user-message{

    margin-top: 5px;
    display: inline-block;
    width: 100%;
    line-height: 60px;
    /*background: #e31818;*/
    display: flex;
  }

  .user-message img{

    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: 5px;

  }
  .user-message span{

    margin-left: 15px;
    font-size: 20px;

  }

  .user-comment{

    margin-top: 5px;

  }

  .user-talk{



  }

  .user-select{

    margin-top: 5px;
    font-size: 12px;
    color: #bec0be;

  }

  .select-time{


  }

  .select-style{

    margin-left: 10px;
  }

  .user-show{

    width: 100%;
    margin-top: 5px;

  }
  .user-show img{

    width: 60px;
    height: 60px;
    padding: 2px;

  }


</style>
