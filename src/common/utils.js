/*
  防抖动函数 默认是10ms
*/
export function debounce(func,delay = 10) {

  let timer = null

  return function (...args){

    if(timer) clearTimeout(timer)

    timer = setTimeout(()=>{

      func.apply(this,args)

    },delay)

  }

}
