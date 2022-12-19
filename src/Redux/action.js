  import axios from "axios"
import {GET_THE_REQUEST,GET_THE_SUCESSES,GET_THE_ERROR} from "./actionType"
   const getData=(dispatch)=>{
   dispatch({type:GET_THE_REQUEST})
   return axios.get(`https://ravi-api.onrender.com/shampoo`).then(r=>{
    dispatch({type:GET_THE_SUCESSES,
        payload:r.data
    })
   }).catch((err)=>{
    dispatch({type:GET_THE_ERROR})
   })

}
 export{getData}