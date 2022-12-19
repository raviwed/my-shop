import {GET_THE_REQUEST,GET_THE_SUCESSES,GET_THE_ERROR} from "./actionType"
  const inisiate={
      matter:[],
      isLoading:false,
      isError:false
  }
export const reduser=(oldState=inisiate,action)=>{
    switch(action.type){
      case GET_THE_REQUEST:
        return{
            ...oldState,
            isLoading:true,
        }
      case GET_THE_SUCESSES:
        return{
            ...oldState,
            matter:action.payload,
            isLoading:false,
        }
     case GET_THE_ERROR:
        return{
          ...oldState,
          isLoading:true,
          isError:true
        }
        default:
            return oldState
    }
}
