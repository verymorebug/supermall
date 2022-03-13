import BackTop from "components/content/backTop/BackTop";
export const backTopMixin = {

  components:{

    BackTop

  },

  data(){

    return{

      isShowBackTop:false

    }

  },

  methods:{

    //返回顶部按钮监听
    backClick(){

      this.$refs.detailScroll.scrollIn(0,0,300);


    },

    listenShowBackTop(position){

      //1.监听商品目录是否达到可以显示返回顶部按钮距离
      this.isShowBackTop = position.y < -1000  /*超过-1000就显示回顶部按钮*/
      // console.log(this.isShowBackTop);

    },

  }



}
