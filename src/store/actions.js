import {ADD_COUNTER, ADD_TO_CART} from "./mutations-types";

export default{

  addCart({commit,state},payload){

   return new Promise((resolve,reject)=>{

      //1.判断购物车里有没有该商品 有->数量count+1

      let oldProduct = state.cartList.find(item=>item.iid === payload.iid);

      if(oldProduct){

        commit(ADD_COUNTER,oldProduct);
        resolve("商品数量+1")

      }
      else{

        commit(ADD_TO_CART,payload);
        resolve("添加了新的商品")
      }


    })



  },

  changeSelectGoods({commit,state},payload){

    //1.全选
    if(payload === true){

      commit("selectAllGoods");

    }else{

      commit("notSelectAllGoods");

    }

  }

}
