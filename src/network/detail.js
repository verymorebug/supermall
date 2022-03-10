import {request} from "network/request";

export function getShopDetail(iid){

  const config = {

    url:'/detail',
    params:{
      iid
    }
  }
  return request(config);

}

export class Goods{

  constructor(itemInfo,columns,services) {

    this.title = itemInfo.title;
    this.oldPrice = itemInfo.oldPrice;
    this.newPrice = itemInfo.price;
    this.desc = itemInfo.desc;
    this.discount = itemInfo.discountDesc;
    this.discBgColor = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowPrice;

  }

}

export class Shop{

  constructor(shopInfo) {

    this.shopLogo = shopInfo.shopLogo;
    this.sells = shopInfo.cSells;
    this.fans = shopInfo.cFans;
    this.shopName = shopInfo.name;          //店铺名
    this.score = shopInfo.score;        //商品评分
    this.goodsCount = shopInfo.cGoods;  //商品数量

  }

}

export class GoodsParam{

  constructor(info,rule) {

    this.infos = info.set;
    this.sizes = rule.tables;
    this.image = info.images?info.images[0]:'';

  }


}
