import axios from "axios"
import store from "./store"
import router from "./router"

// http全局拦截
// token要放在我们请求的header上面带给后端
export default function setAxios(){
  // 先把token带过去,请求拦截
  axios.interceptors.request.use(
    config=>{

      console.log(33333, store.state.token)
      if(store.state.token){
        config.headers.token = store.state.token
      }

      console.log(22222,config)
      return config
    }
  )

  // 每次的请求有返回的，都是先经过这个拦截器的
  axios.interceptors.response.use(
    response=>{
      if(response.status==200){
        const data=response.data;
        // if (data.code !== 200) {  // 500或401等返回code码
        if (data.code == 500 || data.code == 401) {
          // 登录失败,需要重新登录,清空vuex的token和localStorage的token
          store.commit('setToken','')
          localStorage.removeItem('token')
          // 跳转到登录login页面
          router.replace({path:'/login'})
        }
        return data
      }
      return response
    }
  )
}