import {request} from "network/request";

export function getHomeMultiData(){

  return request("/home/multidata");

}

//获取(流行新款精选)导航栏的数据
export function getHomeGoodsData(type,page){

  const config={

    url:"/home/data",
    params:{

      type,
      page

    }

  }

  return request(config)

}
