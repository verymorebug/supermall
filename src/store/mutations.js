import {ADD_TO_CART,ADD_COUNTER} from "./mutations-types";

export default {

  // //将商品加入购物车  在这里用了if/else 并不能跟踪到mutations的变化,只会显示同一个方法，所以需要分离操作
  // addCart(state,payload){
  //
  //   //1.判断购物车里有没有该商品 有->数量count+1
  //   let oldProduct = state.cartList.find(item =>item.iid === payload.iid)
  //
  //   if(oldProduct)
  //     oldProduct.count += 1;
  //   else
  //     state.cartList.push(payload);
  //
  // }

  //增加加入购物车的某个商品数量
  [ADD_COUNTER](state,payload){

    payload.count += 1;

  },

  //添加新商品进入购物车
  [ADD_TO_CART](state,payload){

    payload.selected = true;
    state.cartList.push(payload);

  },

  changeSelectGoods(state,payload){

    payload.selected = !payload.selected;  //直接取反

  },

  notSelectAllGoods(state){

    for(let item of state.cartList){

      item.selected = false

    }

  },

  selectAllGoods(state){

    for(let item of state.cartList){

      item.selected = true;

    }

  }



}


