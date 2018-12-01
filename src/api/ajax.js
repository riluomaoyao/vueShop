/*
用于发送ajax请求的函数
包装axios
函数的返回值是promise对象
 */
import axios from 'axios'
// 这是一个发ajax请求的模块，返会的是一个promise对象
export default function ajax(url, data={}, method='GET') {
  
  return new Promise((resolve, reject) => {
    let promise
    if(method==='GET') {
      //return axios.get(url, {params: data})
      // 拼query请求参数串
      let queryStr = ''
      Object.keys(data).forEach(key => {
        const value = data[key]
        queryStr += `${key}=${value}&`
      })
      // let queryStr = Object.keys(data).reduce((pre, key) => pre + `${key}=${data[key]}&`, '')
      
      if(queryStr!=='') { // username=tom&password=123&
        queryStr = queryStr.substring(0, queryStr.length-1) // username=tom&password=123
        url += '?' + queryStr  // /login/?username=tom&password=123
      }
      promise = axios.get(url) // url?username=tom&password=123
      // return axios.get(url, {params: data}) // url?username=tom&password=123
    } else {
      promise = axios.post(url, data)
    }
    promise
      .then((response) => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
  
}

// 调用ajax
// 这里要消灭到会掉函数加上async...await
// ajax()
//   .then(response =>{
//     const result =  response.data
//   })


// 改变后===但是这样写比较的啰嗦
// const response = await ajax()
// const result = response.data



// 最终希望的结果是===因为axios.post(url,data)返回的就是response
//所以这里在将其包装成一个promise对象
// const result = await ajax()

// return new Promise(function (resolve,reject) {
//   //执行异步请求
//   //如果成功了，调用resolve(response.data)
//   //如果失败了，调用reject
// })
