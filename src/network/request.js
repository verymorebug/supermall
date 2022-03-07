import axios from "axios"

export function request(config){

  //1.创建axios实例
  const instance = axios.create({

      timeout:5000,
      baseURL:"http://152.136.185.210:7878/api/hy66"

  })

  //2.拦截
  instance.interceptors.request.use(config=>{

    return config

  },err=>{


  })

  instance.interceptors.response.use(res=>{

    return res.data

  },err=>{


  })

  return instance(config)

}


