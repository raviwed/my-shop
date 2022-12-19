import axios from "axios"
export const FacePics=(data={})=>{
    return axios.post(`http://localhost:8080/makeUp`,{
     image :data.image, 
     cost :data.cost,
     description:data.description
    })

}
